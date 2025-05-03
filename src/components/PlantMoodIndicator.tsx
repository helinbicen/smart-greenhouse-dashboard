import {
  MoistureCategory,
  SensorData,
  TemperatureCategory,
} from "@/types/sensor";
import React from "react";

type PlantMoodIndicatorProps = {
  data?: SensorData | SensorData[];
};

const PlantMoodIndicator: React.FC<PlantMoodIndicatorProps> = ({ data }) => {
  const latest = Array.isArray(data) ? data[data.length - 1] : data;

  const isHappyPlant =
    latest?.temperatureCategory === TemperatureCategory.MEDIUM &&
    latest?.moistureCategory === MoistureCategory.OPTIMAL;

  const getIssueMessage = () => {
    const issues: string[] = [];

    if (latest?.temperatureCategory !== TemperatureCategory.MEDIUM) {
      issues.push("Sıcaklık optimal değil");
    }
    if (latest?.moistureCategory !== MoistureCategory.OPTIMAL) {
      issues.push("Nem düzeyi ideal değil");
    }

    return issues.join(" ve ");
  };

  return (
    <div className="flex items-center justify-center gap-6 mb-8 flex-col">
      <img
        src={isHappyPlant ? "/assets/HappyPlant.gif" : "/assets/SadPlant.gif"}
        alt="Bitki durumu"
        width={100}
        height={100}
      />
      <div className="text-center h-20">
        <p className="text-2xl font-bold text-gray-800">
          {isHappyPlant ? "Bitki şu anda mutlu 🌱" : "Bitki streste 😟"}
        </p>
        {!isHappyPlant && (
          <p className="text-base text-gray-600 mt-2">{getIssueMessage()}</p>
        )}
      </div>
    </div>
  );
};

export default PlantMoodIndicator;
