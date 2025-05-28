"use client";
import React, { useEffect, useState } from "react";
import { Bar } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import { SensorData } from "@/types/sensor";
import { formatChartLabels } from "@/helpers/chartFormatter";
import { Timeframe, TimeframeCategory } from "@/types/timeframe";

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

type HeatingAndCoolingDemandChartProps = {
  data?: SensorData | SensorData[];
  timeframe: Timeframe;
};

const HeatingAndCoolingDemandChart: React.FC<
  HeatingAndCoolingDemandChartProps
> = ({ data, timeframe }) => {
  const [history, setHistory] = useState<SensorData[]>([]);

  useEffect(() => {
    if (!data) return;

    const newEntries = Array.isArray(data) ? data : [data];

    const sortedEntries = newEntries.sort(
      (a, b) => new Date(a.date).getTime() - new Date(b.date).getTime()
    );

    if (timeframe === TimeframeCategory.REALTIME) {
      setHistory((prev) => [...prev, ...sortedEntries]);
    } else {
      setHistory(sortedEntries);
    }
  }, [data, timeframe]);

  const chartData = {
    labels: formatChartLabels(history, timeframe),
    datasets: [
      {
        label: "Isıtma Talebi",
        data: history.map((item) => item.heatingDemand),
        backgroundColor: "rgba(255, 159, 64, 0.6)",
      },
      {
        label: "Soğutma Talebi",
        data: history.map((item) => item.coolingDemand),
        backgroundColor: "rgba(53, 162, 235, 0.6)",
      },
    ],
  };

  return (
    <>
      <h1 className="text-xl font-semibold text-gray-700 mb-4">
        Isıtma ve Soğutma Talebi Grafiği
      </h1>
      <h2 className="flex justify-center text-green-700">
        Isıtma ve Soğutma İhtiyacı
      </h2>
      <Bar data={chartData} />
    </>
  );
};

export default HeatingAndCoolingDemandChart;
