"use client";
import React, { useEffect, useState } from "react";
import { Line } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import { SensorData } from "@/types/sensor";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

type TemperatureAndMoistureChartProps = {
  data?: SensorData | SensorData[];
};

const TemperatureAndMoistureChart: React.FC<
  TemperatureAndMoistureChartProps
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
        label: "Sıcaklık (°C)",
        data: history.map((item) => item.temperature),
        borderColor: "rgba(75, 192, 192, 1)",
        fill: false,
      },
      {
        label: "Nem (%)",
        data: history.map((item) => item.moisture),
        borderColor: "rgba(255, 99, 132, 1)",
        fill: false,
      },
    ],
  };

  return (
    <>
      <h1 className="flex justify-center text-green-700">Sıcaklık ve Nem</h1>
      <Line data={chartData} />
    </>
  );
};

export default TemperatureAndMoistureChart;
