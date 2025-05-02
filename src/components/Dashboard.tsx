import React from "react";
import TemperatureAndMoistureChart from "./TemperatureMoistureChart";
import HeatingAndCoolingDemandChart from "./HeatingCoolingChart";
import { mockSensorData } from "@/data/sensorData";

const Dashboard = () => {
  const data = mockSensorData;

  return (
    <div className="w-full h-screen flex items-center justify-center p-8">
      <div className="w-1/2 h-80">
        <TemperatureAndMoistureChart data={data} />
      </div>
      <div className="w-1/2 h-80">
        <HeatingAndCoolingDemandChart data={data} />
      </div>
    </div>
  );
};

export default Dashboard;
