import { NextApiRequest, NextApiResponse } from "next";
import client from "../../../prisma/client";
import { got } from "got-scraping";
import cheerio from "cheerio";

interface IProductMeta {
  canonicalUrl: string;
  price: number;
  description: string;
  title: string;
  imageUrl: string;
  vendor: string;
}

enum Vendor {
  ShopKz = "shop.kz",
  Kaspi = "kaspi.kz",
  Wildberries = "kz.wildberries.ru",
}

export default async function productsHandler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === "GET") {
    const products = await client.product.findMany();
    res.send(products);
  } else if (req.method === "POST") {
    const { url } = req.body;
    const cleanUrl = sanitizeUrl(url);
    if (validateUrl(url)) {
      // Make sure we're not adding a duplicate URL
      const count = await client.product.count({ where: { url: cleanUrl } });
      if (count < 1) {
        const { canonicalUrl, vendor, imageUrl, description, title, price } = await processMetadata(
          cleanUrl,
        );
        const newProduct = await client.product.create({
          data: {
            title,
            url: canonicalUrl,
            description,
            imageUrl,
            price,
            vendor,
          },
        });
        res.send(newProduct);
      } else {
        res.status(400).json({ error: `Product with such URL already exists` });
      }
    } else {
      res.status(401).send({ error: "Invalid URL" });
    }
  } else {
    res.status(401).send("Request error, only GET/POST requests are processed");
  }
}

function validateUrl(url: string): boolean {
  try {
    new URL(url);
    return true;
  } catch (e) {
    return false;
  }
}

function sanitizeUrl(url: string): string {
  const newUrl = new URL(url);
  newUrl.search = "";
  return newUrl.toString();
}

async function processMetadata(url: string): Promise<IProductMeta | null> {
  const response = await got({
    url: url.toString(),
  });
  const $ = cheerio.load(response.body);
  // Extract the OpenGraph data, all vendors support this
  const imageUrl = $('meta[property="og:image"]').attr("content") || "Not found";
  const title = $('meta[property="og:title"]').attr("content") || "Not found";
  const description = $('meta[property="og:description"]').attr("content") || "Not found";
  let canonicalUrl = $('link[rel="canonical"]').attr("href") || "Not found";
  const vendor = determineVendor(url);

  // Extract the price, differs by vendor
  const cssSelector = getCssSelector(url);
  const priceText = $(cssSelector).text();
  const price = Number.parseInt(priceText.replace(/[₸ ()тг.]/g, ""));

  // Fix fow WB not providing a correct canonical url
  if (vendor === Vendor.Wildberries) {
    canonicalUrl = `https://kz.wildberries.ru${canonicalUrl}`;
  }

  return {
    price,
    canonicalUrl,
    description,
    title,
    imageUrl,
    vendor,
  };
}

function getCssSelector(url: string): string {
  const urlObject = new URL(url);
  switch (urlObject.hostname) {
    case Vendor.ShopKz:
      return ".bx-card-info__price > .item_current_price";
    case Vendor.Kaspi:
      return "#page > div:nth-child(11) > div.item > div > div.item__inner-right > div > div.mount-item-product > div > div.item__price > div.item__price-left-side > div.item__price-once";
    case Vendor.Wildberries:
      return "#infoBlockProductCard > div.same-part-kt__price-block.hide-mobile > div > div > p.price-block__price-wrap > span";
    default:
      throw new Error("Invalid hostname. Website not supported");
  }
}

function determineVendor(url: string) {
  const urlObject = new URL(url);
  switch (urlObject.hostname) {
    case Vendor.ShopKz:
      return Vendor.ShopKz;
    case Vendor.Kaspi:
      return Vendor.Kaspi;
    case Vendor.Wildberries:
      return Vendor.Wildberries;
    default:
      throw new Error("Invalid hostname. Vendor not supported");
  }
}
