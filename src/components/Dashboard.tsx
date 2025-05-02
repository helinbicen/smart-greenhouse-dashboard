"use client";
import React from "react";
import TemperatureAndMoistureChart from "./TemperatureMoistureChart";
import HeatingAndCoolingDemandChart from "./HeatingCoolingChart";
import useFetchData from "@/hooks/useFetchData";

const Dashboard = () => {
  const { data, loading, error } = useFetchData("sensorData");

  if (loading) {
    return (
      <div className="text-center text-lg mt-10">Veriler yükleniyor...</div>
    );
  }

  if (error) {
    return <div className="text-center text-red-600 mt-10">Hata: {error}</div>;
  }

  if (!data) {
    return <div className="text-center mt-10">Veri bulunamadı.</div>;
  }

  return (
    <div className="min-h-screen bg-white p-6">
      <h1 className="text-3xl font-bold text-center mb-8 text-green-700">
        🌿 Bitki İzleme Paneli
      </h1>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-10">
        <div className="bg-white rounded-2xl shadow p-6">
          <h2 className="text-xl font-semibold text-gray-800 mb-4">
            Anlık Veriler
          </h2>
          <div className="space-y-2 text-gray-700">
            <p>
              <strong>Sıcaklık:</strong> {data.temperature} °C
            </p>
            <p>
              <strong>Nem:</strong> {data.moisture} %
            </p>
            <p>
              <strong>Soğutma Talebi:</strong> {data.coolingDemand}
            </p>
            <p>
              <strong>Isıtma Talebi:</strong> {data.heatingDemand}
            </p>
          </div>
        </div>

        <div className="bg-white rounded-2xl shadow p-6">
          <h2 className="text-xl font-semibold text-gray-800 mb-4">Açıklama</h2>
          <p className="text-gray-600">
            Bu panel, bitki ortamının sıcaklık ve nem verilerini analiz eder.
            Aynı zamanda ısıtma ve soğutma taleplerini tahmin ederek görsel hale
            getirir.
          </p>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <div className="bg-white rounded-2xl shadow p-4">
          <TemperatureAndMoistureChart data={data} />
          {/* can also be tested with mockSensorData */}
        </div>
        <div className="bg-white rounded-2xl shadow p-4">
          <HeatingAndCoolingDemandChart data={data} />
          {/* can also be tested with mockSensorData */}
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
