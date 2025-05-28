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
import { formatChartLabels } from "@/helpers/chartFormatter";
import { Timeframe, TimeframeCategory } from "@/types/timeframe";

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
  timeframe: Timeframe;
};

const TemperatureAndMoistureChart: React.FC<
  TemperatureAndMoistureChartProps
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
      <h1 className="text-xl font-semibold text-gray-700 mb-4">
        Sıcaklık ve Nem Grafiği
      </h1>
      <h2 className="flex justify-center text-green-700">Sıcaklık ve Nem</h2>
      <Line data={chartData} />
    </>
  );
};

export default TemperatureAndMoistureChart;
