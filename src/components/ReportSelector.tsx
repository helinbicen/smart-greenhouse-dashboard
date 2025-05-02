"use client";
import React, { useState, useEffect } from "react";
import useFetchData from "@/hooks/useFetchData";
import {
  mockDailyData,
  mockMonthlyData,
  mockWeeklyData,
} from "@/data/sensorData";
import { SensorData } from "@/types/sensor";
import TemperatureAndMoistureChart from "./TemperatureMoistureChart";
import HeatingAndCoolingDemandChart from "./HeatingCoolingChart";
import { Loader } from "react-feather";
import * as XLSX from "xlsx";

const ReportSelector = () => {
  const [timeframe, setTimeframe] = useState("daily");
  const [reportData, setReportData] = useState<SensorData[] | null>(null);
  const { data, loading, error } = useFetchData(
    `report?timeframe=${timeframe}`
  );

  useEffect(() => {
    if (timeframe === "weekly") {
      setReportData(mockWeeklyData);
    }
    if (timeframe === "monthly") {
      setReportData(mockMonthlyData);
    } else {
      setReportData(mockDailyData);
    }
    // Line below will be used when BE is integrated.
    // setReportData(data ? data : mockDailyData);
  }, [data, timeframe]);

  const handleTimeframeChange = (
    event: React.ChangeEvent<HTMLSelectElement>
  ) => {
    setTimeframe(event.target.value);
    setReportData(null);
  };

  const handleDownloadExcel = () => {
    if (!reportData) return;

    const ws = XLSX.utils.json_to_sheet(reportData);
    const wb = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(wb, ws, "Rapor");

    XLSX.writeFile(wb, `${timeframe}_rapor.xlsx`);
  };

  return (
    <div className="w-full h-screen p-6 bg-gray-50">
      <h1 className="text-center text-3xl font-semibold mb-8 text-black">
        Veri Raporu
      </h1>

      <div className="mb-6 flex justify-center items-center space-x-4 text-black">
        <label htmlFor="timeframe" className="text-lg text-black">
          Rapor Zaman Dilimi:
        </label>
        <select
          id="timeframe"
          onChange={handleTimeframeChange}
          value={timeframe}
          className="p-3 text-lg border rounded-lg shadow-md focus:outline-none focus:ring-2 focus:ring-blue-400"
        >
          <option value="daily">Günlük</option>
          <option value="weekly">Haftalık</option>
          <option value="monthly">Aylık</option>
        </select>
      </div>

      {loading && (
        <div className="flex justify-center items-center">
          <Loader className="animate-spin text-blue-500" size={40} />
          <span className="ml-4 text-lg">Veriler yükleniyor...</span>
        </div>
      )}
      {error && (
        <div className="flex justify-center items-center">
          <span className="text-red-500 text-lg">Hata: {error}</span>
        </div>
      )}

      {reportData && (
        <div className="mt-6">
          <h2 className="text-center text-2xl font-semibold mb-8 text-gray-800">
            Veriler ({timeframe})
          </h2>
          <div className="mb-6 text-center">
            <button
              onClick={handleDownloadExcel}
              className="py-2 px-4 bg-green-500 text-white rounded-lg shadow-md cursor-pointer"
            >
              Excel Olarak İndir
            </button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <TemperatureAndMoistureChart data={reportData} />
            </div>

            <div className="bg-white p-6 rounded-lg shadow-lg">
              <HeatingAndCoolingDemandChart data={reportData} />
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default ReportSelector;
