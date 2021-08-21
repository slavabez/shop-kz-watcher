import type { NextApiRequest, NextApiResponse } from "next";
import cheerio from "cheerio";
import got from "got";

interface IProductMetaData {
  price: number;
  url: string;
  imageUrl: string;
  title: string;
  description: string;
}

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === "GET") {
    const { url } = req.query;
    try {
      const shopRes = await got({
        url: url.toString(),
      });
      const $ = cheerio.load(shopRes.body);
      const priceText = $(".bx-card-info__price > .item_current_price").text();
      // Removing multiple types of spaces
      const price = Number.parseInt(priceText.replace(/[₸ ]/g, "")) || 0;
      const imageUrl = $('meta[property="og:image"]').attr("content") || "Not found";
      const title = $('meta[property="og:title"]').attr("content") || "Not found";
      const description = $('meta[property="og:description"]').attr("content") || "Not found";
      const canonicalUrl = $('link[rel="canonical"]').attr("href") || "Not found";
      const responseData: IProductMetaData = {
        url: canonicalUrl,
        description,
        title,
        price,
        imageUrl,
      };
      res.json(responseData);
    } catch (e) {
      res.status(500).send({ error: "Error" });
    }
  }
}
