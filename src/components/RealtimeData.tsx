"use client";

import { SensorData } from "@/types/sensor";
import React from "react";
import TemperatureAndMoistureChart from "./TemperatureMoistureChart";
import HeatingAndCoolingDemandChart from "./HeatingCoolingChart";
import PlantMoodIndicator from "./PlantMoodIndicator";
import { TimeframeCategory } from "@/types/timeframe";

type RealtimeDataProps = {
  data?: SensorData | SensorData[];
};

const RealtimeData: React.FC<RealtimeDataProps> = ({ data }) => {
  return (
    <div className="bg-white rounded-2xl shadow p-6">
      <h2 className="text-xl font-semibold text-gray-800 mb-6">
        Anlık Veriler
      </h2>

      <PlantMoodIndicator data={data} />

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="bg-white rounded-2xl shadow p-4">
          <TemperatureAndMoistureChart
            data={data}
            timeframe={TimeframeCategory.REALTIME}
          />
          {/* can also be tested with mockDailyData */}
        </div>
        <div className="bg-white rounded-2xl shadow p-4">
          <HeatingAndCoolingDemandChart
            data={data}
            timeframe={TimeframeCategory.REALTIME}
          />
          {/* can also be tested with mockDailyData */}
        </div>
      </div>
    </div>
  );
};

export default RealtimeData;
