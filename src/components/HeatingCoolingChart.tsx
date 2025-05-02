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
};

const HeatingAndCoolingDemandChart: React.FC<
  HeatingAndCoolingDemandChartProps
> = ({ data }) => {
  const [history, setHistory] = useState<SensorData[]>([]);

  useEffect(() => {
    if (!data) return;

    const newEntries = Array.isArray(data) ? data : [data];

    setHistory((prev) => [...prev, ...newEntries]);
  }, [data]);

  const chartData = {
    labels: history.map((item) => item.time),
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
      <h1 className="flex justify-center text-green-700">
        Isıtma ve Soğutma İhtiyacı
      </h1>
      <Bar data={chartData} />
    </>
  );
};

export default HeatingAndCoolingDemandChart;
