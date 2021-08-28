import { NextApiRequest, NextApiResponse } from "next";
import client from "../../../../prisma/client";
import { processMetadata, sanitizeUrl, validateUrl } from "@src/util/scraping";

export default async function productsHandler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === "GET") {
    const products = await client.product.findMany({
      take: 10,
      orderBy: {
        createdAt: "desc",
      },
    });
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
            highestPrice: price,
            lowestPrice: price,
          },
        });
        res.send(newProduct);
      } else {
        res.status(400).json({ error: `Product with such URL already exists` });
      }
    } else {
      res.status(400).send({ error: "Invalid URL or website not supported" });
    }
  } else {
    res.status(400).send("Request error, only GET/POST requests are processed");
  }
}
