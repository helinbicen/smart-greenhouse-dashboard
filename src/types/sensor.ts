export const TemperatureCategory = {
  LOW: "low",
  MEDIUM: "medium",
  HIGH: "high",
} as const;

export const MoistureCategory = {
  DRY: "dry",
  OPTIMAL: "optimal",
  WET: "wet",
} as const;

export type SensorData = {
  date: string;
  time: string;
  moisture: number;
  temperature: number;
  pumperOn: boolean;
  heaterOn: boolean;
  coolerOn: boolean;
  temperatureCategory: (typeof TemperatureCategory)[keyof typeof TemperatureCategory];
  moistureCategory: (typeof MoistureCategory)[keyof typeof MoistureCategory];
  heatingDemand: number;
  coolingDemand: number;
  moistureTemperatureRatio: number;
};
