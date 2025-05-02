"use client";
import React, { useState } from "react";
import TemperatureAndMoistureChart from "./TemperatureMoistureChart";
import HeatingAndCoolingDemandChart from "./HeatingCoolingChart";
import useFetchData from "@/hooks/useFetchData";
import ReportSelector from "./ReportSelector";
import { Loader } from "react-feather";
import RealtimeData from "./RealtimeData";

const Dashboard = () => {
  const { data, loading, error } = useFetchData("sensorData");
  const [viewType, setViewType] = useState<"historical" | "realTime">();

  if (loading) {
    return <Loader className="animate-spin text-blue-500" size={40} />;
  }

  if (error) {
    return <div className="text-center text-red-600 mt-10">Hata: {error}</div>;
  }

  if (!data) {
    return <div className="text-center mt-10">Veri bulunamadı.</div>;
  }

  return (
    <div className="min-h-screen bg-white p-6">
      <h1 className="text-3xl font-bold text-center mb-8 text-green-700 mt-16">
        🌿 Bitki İzleme Paneli
      </h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-2 gap-6 mb-10">
        <div
          className={`bg-green-50 p-6 rounded-lg shadow-md cursor-pointer transform transition-all duration-300 ${
            viewType === "historical"
              ? "bg-green-100 text-gray-800"
              : "bg-white text-gray-800"
          } hover:bg-green-200 hover:scale-105`}
          onClick={() => setViewType("historical")}
        >
          <h3 className="text-lg font-semibold mb-3">Geçmiş Veriler</h3>
          <p className="text-gray-600">
            Geçmiş verilere dayalı raporlara erişim sağlar.
          </p>
        </div>

        <div
          className={`bg-green-50 p-6 rounded-lg shadow-md cursor-pointer transform transition-all duration-300 ${
            viewType === "realTime"
              ? "bg-green-100 text-gray-800"
              : "bg-white text-gray-800"
          } hover:bg-green-200 hover:scale-105`}
          onClick={() => setViewType("realTime")}
        >
          <h3 className="text-lg font-semibold mb-3">Anlık Veriler</h3>
          <p className="text-gray-600">
            Gerçek zamanlı verilerle bitki ortamını izleyin.
          </p>
        </div>
      </div>

      {viewType === "historical" && <ReportSelector />}

      {viewType === "realTime" && <RealtimeData data={data} />}
    </div>
  );
};

export default Dashboard;
