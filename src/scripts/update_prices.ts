import { config } from "dotenv";
import { PrismaClient, Product } from "@prisma/client";
import { Point, InfluxDB, WriteApi } from "@influxdata/influxdb-client";

import { processMetadata } from "../util/scraping";

config();

let influxClient: InfluxDB;
let writeApi: WriteApi;
let prismaClient: PrismaClient;

function initInflux() {
  const token = process.env.INFLUX_TOKEN;
  const org = process.env.INFLUX_ORG;
  const bucket = process.env.INFLUX_BUCKET;
  const influxUrl = process.env.INFLUX_URL;

  influxClient = new InfluxDB({ url: influxUrl, token: token });
  writeApi = influxClient.getWriteApi(org, bucket);
}
function initPrisma() {
  prismaClient = new PrismaClient();
}

function savePrice(productId: string, price: number) {
  const newPoint = new Point("productPrice").tag("productId", productId).intField("price", price);
  writeApi.writePoint(newPoint);
}

async function updatePrice(product: Pick<Product, "id" | "url" | "lowestPrice" | "highestPrice">) {
  const result = await processMetadata(product.url);
  console.log(
    `Updating product ${product.id}, low/high prices ${product.lowestPrice}/${product.highestPrice} with new price of ${result.price}`,
  );
  // Save the price
  savePrice(product.id, result.price);

  // Update the product info
  await prismaClient.product.update({
    where: {
      id: product.id,
    },
    data: {
      price: result.price,
      lowestPrice: result.price < product.lowestPrice ? result.price : product.lowestPrice,
      highestPrice: result.price > product.highestPrice ? result.price : product.highestPrice,
    },
  });
}

async function closeConnections() {
  try {
    await writeApi.close();
    await prismaClient.$disconnect();
  } catch (e) {
    console.error(`Influx DB writes failed, error:`, e);
  }
}

async function main() {
  initInflux();
  initPrisma();

  const allProducts = await prismaClient.product.findMany({
    select: {
      id: true,
      url: true,
      lowestPrice: true,
      highestPrice: true,
    },
  });
  const promises = allProducts.map((product) => updatePrice(product));
  try {
    await Promise.all(promises);
  } catch (e) {
    console.error(`Failed to update all products`);
  }

  await closeConnections();
  process.exit(0);
}

main();
