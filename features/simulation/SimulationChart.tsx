import React from "react";
import { Line, getDatasetAtEvent, getElementsAtEvent } from "react-chartjs-2";

import {
  Chart,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
  Filler,
  registerables,
  LineController,
  ChartType,
} from "chart.js";
Chart.register(
  LineController,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement
);

export function SimulationChart({ chartRef, data }) {
  return <Line ref={chartRef} datasetIdKey="id" data={data} />;
}
