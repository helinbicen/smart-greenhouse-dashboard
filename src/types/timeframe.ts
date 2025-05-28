export const TimeframeCategory = {
  DAILY: "daily",
  WEEKLY: "weekly",
  MONTHLY: "monthly",
  REALTIME: "realtime",
} as const;

export type Timeframe =
  (typeof TimeframeCategory)[keyof typeof TimeframeCategory];
