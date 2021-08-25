import { NextApiRequest, NextApiResponse } from "next";
import { InfluxDB } from "@influxdata/influxdb-client";
import joi from "joi";

const token = process.env.INFLUX_TOKEN;
const org = process.env.INFLUX_ORG;
const bucket = process.env.INFLUX_BUCKET;
const influxUrl = process.env.INFLUX_URL;

const influxClient = new InfluxDB({ url: influxUrl, token: token });
const queryApi = influxClient.getQueryApi(org);

export default async function priceHistoryHandler(req: NextApiRequest, res: NextApiResponse) {
  const { params } = req.query;
  if (!Array.isArray(params)) {
    return;
  }
  const [id, numOfDays] = params;
  try {
    joi.assert(id, joi.string().uuid());
    joi.assert(numOfDays, joi.number().integer());
  } catch (e) {
    res.status(400).send("Invalid parameters");
  }
  switch (req.method) {
    case "GET": {
      const query = `
        from(bucket: "${bucket}")
      |> range(start: -${numOfDays}d)
      |> filter(fn: (r) => r["_measurement"] == "productPrice")
      |> filter(fn: (r) => r["_field"] == "price")
      |> filter(fn: (r) => r["productId"] == "${id}")
      |> yield(name: "mean")
    `;
      try {
        const response = await queryApi.queryRaw(query);
        res.json(response);
      } catch (e) {
        console.error(e);
        res.status(500).send(`Server error. Check the logs`);
      }
      break;
    }
    default:
      res.status(405).json({ error: "HTTP request not supported" });
  }
}
