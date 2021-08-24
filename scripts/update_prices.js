#!/usr/bin/node

const influx = require("@influxdata/influxdb-client");
// You can generate a Token from the "Tokens Tab" in the UI
const token =
  "3pTyWO75A9g47hsYUBiie_ZCRrlzhxVp5GjjXWLm6v_r0e-WqiKnmxWWDN59_vxeSnu-OAKGhxbdziOpwiWgng==";
const org = "primary";
const bucket = "shop-watch";

const client = new influx.InfluxDB({ url: "https://influx.slavab.kz", token: token });

const writeApi = client.getWriteApi(org, bucket);

const point1 = new influx.Point("productPrice")
  .tag("productId", "someotherproduct")
  .intField("price", Number.parseInt("25255"));
writeApi.writePoint(point1);

console.log(point1);
