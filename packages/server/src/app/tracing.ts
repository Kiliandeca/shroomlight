import { PrometheusExporter } from "@opentelemetry/exporter-prometheus";
import { NodeSDK } from "@opentelemetry/sdk-node";
import process from "process";

const exporter = new PrometheusExporter({
  port: 8080,
  preventServerStart: false
})

const otelSDK = new NodeSDK({
  metricReader: exporter
})

export default otelSDK;
