export const TemperatureCategory = {
  LOW: "LOW",
  MEDIUM: "MEDIUM",
  HIGH: "HIGH",
} as const;

export const MoistureCategory = {
  DRY: "DRY",
  OPTIMAL: "OPTIMAL",
  WET: "WET",
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
