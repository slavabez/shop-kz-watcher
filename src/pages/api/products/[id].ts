import { NextApiRequest, NextApiResponse } from "next";
import client from "../../../../prisma/client";

export default async function productsHandler(req: NextApiRequest, res: NextApiResponse) {
  const { id } = req.query;
  // Make sure the ID is formatted properly
  if (!id || typeof id !== "string") {
    res.status(400).json({ error: "Invalid parameters" });
    return;
  }
  switch (req.method) {
    case "GET": {
      const products = await client.product.findUnique({ where: { id } });
      res.json(products);
      break;
    }
    case "DELETE":
      {
        const deletion = await client.product.delete({ where: { id } });
        if (deletion) {
          res.json({ result: "success" });
        } else {
          res.status(500).json({ error: "Server error, could not delete" });
        }
      }
      break;
    default:
      res.status(405).json({ error: "HTTP request not supported" });
  }
}
