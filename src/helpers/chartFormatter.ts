import { SensorData } from "@/types/sensor";
import { Timeframe, TimeframeCategory } from "@/types/timeframe";
import dayjs from "dayjs";

export const formatChartLabels = (
  history: SensorData[],
  timeframe: Timeframe
): string[] => {
  return history.map((item) => {
    if (!item.date || !item.time) return "";

    const date = dayjs(`${item.date} ${item.time}`, 'YYYY-MM-DD HH:mm', true);
    if (!date.isValid()) return "";

    switch (timeframe) {
      case TimeframeCategory.REALTIME:
      case TimeframeCategory.DAILY:
        return date.format("HH:mm");

      case TimeframeCategory.WEEKLY:
      case TimeframeCategory.MONTHLY:
        return date.format("DD MMM");

      default:
        return "";
    }
  });
};
