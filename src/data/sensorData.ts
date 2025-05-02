import {
  MoistureCategory,
  SensorData,
  TemperatureCategory,
} from "@/types/sensor";

export const mockSensorData: SensorData[] = [
  {
    date: "05 May 2025",
    time: "01:00",
    moisture: 65,
    temperature: 22,
    pumperOn: true,
    heaterOn: true,
    coolerOn: false,
    temperatureCategory: TemperatureCategory.MEDIUM,
    moistureCategory: MoistureCategory.OPTIMAL,
    heatingDemand: 8,
    coolingDemand: 0,
    moistureTemperatureRatio: 2.95,
  },
  {
    date: "05 May 2025",
    time: "02:00",
    moisture: 72,
    temperature: 25,
    pumperOn: false,
    heaterOn: true,
    coolerOn: false,
    temperatureCategory: TemperatureCategory.HIGH,
    moistureCategory: MoistureCategory.WET,
    heatingDemand: 5,
    coolingDemand: 0,
    moistureTemperatureRatio: 2.88,
  },
  {
    date: "05 May 2025",
    time: "03:00",
    moisture: 58,
    temperature: 20,
    pumperOn: false,
    heaterOn: true,
    coolerOn: false,
    temperatureCategory: TemperatureCategory.LOW,
    moistureCategory: MoistureCategory.DRY,
    heatingDemand: 10,
    coolingDemand: 0,
    moistureTemperatureRatio: 2.9,
  },
  {
    date: "05 May 2025",
    time: "04:00",
    moisture: 65,
    temperature: 45,
    pumperOn: true,
    heaterOn: false,
    coolerOn: true,
    temperatureCategory: TemperatureCategory.LOW,
    moistureCategory: MoistureCategory.OPTIMAL,
    heatingDemand: 0,
    coolingDemand: 15,
    moistureTemperatureRatio: 1.44,
  },
  {
    date: "05 May 2025",
    time: "05:00",
    moisture: 68,
    temperature: 35,
    pumperOn: true,
    heaterOn: false,
    coolerOn: true,
    temperatureCategory: TemperatureCategory.MEDIUM,
    moistureCategory: MoistureCategory.OPTIMAL,
    heatingDemand: 0,
    coolingDemand: 5,
    moistureTemperatureRatio: 1.94,
  },
  {
    date: "05 May 2025",
    time: "06:00",
    moisture: 60,
    temperature: 30,
    pumperOn: true,
    heaterOn: false,
    coolerOn: false,
    temperatureCategory: TemperatureCategory.MEDIUM,
    moistureCategory: MoistureCategory.OPTIMAL,
    heatingDemand: 0,
    coolingDemand: 0,
    moistureTemperatureRatio: 2,
  },
];

export const generateMockData = (): SensorData => {
  const now = new Date();
  const date = now.toString();
  const time = now.getHours().toString();
  const temperature = Math.random() * (30 - 15) + 15;
  const moisture = Math.random() * (100 - 20) + 20;

  const temperatureCategory =
    temperature < 18 ? "low" : temperature < 25 ? "medium" : "high";
  const moistureCategory =
    moisture < 30 ? "dry" : moisture < 70 ? "optimal" : "wet";

  return {
    date,
    time,
    moisture,
    temperature,
    pumperOn: Math.random() < 0.5, // %50 olasılıkla true
    heaterOn: Math.random() < 0.5, // %50 olasılıkla true
    coolerOn: Math.random() < 0.5, // %50 olasılıkla true
    temperatureCategory,
    moistureCategory,
    heatingDemand: Math.random() * 100,
    coolingDemand: Math.random() * 100,
    moistureTemperatureRatio: moisture / temperature,
  };
};
