import { SensorData } from "@/types/sensor";
import { Timeframe, TimeframeCategory } from "@/types/timeframe";

export const formatChartLabels = (
  history: SensorData[],
  timeframe: Timeframe
): string[] => {
  return history.map((item) => {
    const dateObj = new Date(`${item.date} ${item.time}`);
    switch (timeframe) {
      case TimeframeCategory.REALTIME:
      case TimeframeCategory.DAILY:
        return dateObj.toLocaleTimeString("tr-TR", {
          hour: "2-digit",
          minute: "2-digit",
        });
      case TimeframeCategory.WEEKLY:
      case TimeframeCategory.MONTHLY:
        return dateObj.toLocaleDateString("tr-TR", {
          day: "2-digit",
          month: "short",
        });
      default:
        return ""; // fallback
    }
  });
};
