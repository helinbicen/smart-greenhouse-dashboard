"use client";
import React from "react";
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
  data: SensorData[];
};

const TemperatureAndMoistureChart: React.FC<
  TemperatureAndMoistureChartProps
> = ({ data }) => {
  const chartData = {
    labels: data.map((item) => item.time),
    datasets: [
      {
        label: "Sıcaklık (°C)",
        data: data.map((item) => item.temperature),
        borderColor: "rgba(75, 192, 192, 1)",
        fill: false,
      },
      {
        label: "Nem (%)",
        data: data.map((item) => item.moisture),
        borderColor: "rgba(255, 99, 132, 1)",
        fill: false,
      },
    ],
  };

  return (
    <>
      <h1 className="flex justify-center">Sıcaklık ve Nem</h1>
      <Line data={chartData} />
    </>
  );
};

export default TemperatureAndMoistureChart;
