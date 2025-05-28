import { SensorData } from "@/types/sensor";

export const getTimeRangeType = (history: SensorData[]) => {
  if (history.length < 2) return "hour";

  const timestamps = history.map((item) =>
    new Date(`${item.date} ${item.time}`).getTime()
  );
  const interval = (timestamps[timestamps.length - 1] - timestamps[0]) / 1000;

  if (interval <= 60 * 60 * 6) return "hour";
  if (interval <= 60 * 60 * 24 * 2) return "day";
  if (interval <= 60 * 60 * 24 * 10) return "week";
  return "month";
};

export const formatLabel = (date: string, time: string, type: string) => {
  const dateObj = new Date(`${date} ${time}`);
  if (type === "hour" || type === "day") {
    return dateObj.toLocaleTimeString("tr-TR", {
      hour: "2-digit",
      minute: "2-digit",
    });
  } else {
    return dateObj.toLocaleDateString("tr-TR", {
      day: "2-digit",
      month: "short",
    });
  }
};
