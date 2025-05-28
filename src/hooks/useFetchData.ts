"use client";

import { useState, useEffect } from "react";
import axios from "axios";
import { SensorData } from "@/types/sensor";
import { generateMockData } from "@/data/sensorData";

const useFetchData = (endpoint: string, isReport: boolean = false) => {
  const [data, setData] = useState<SensorData | SensorData[] | null>(null);
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);
  const apiUrl = process.env.NEXT_PUBLIC_API_URL;

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      setError(null);

      try {
        if (apiUrl) {
          const response = await axios.get(`${apiUrl}/${endpoint}`);
          setData(response.data);
        } else {
          const mockData = generateMockData(); // TODO: Backend entegrasyonu sonrası kaldırılacak
          setData(mockData);
        }
      } catch (err: unknown) {
        if (err instanceof Error) {
          console.error(err.message);
        } else {
          setError("Veri alınırken bir hata oluştu.");
        }
      } finally {
        setLoading(false);
      }
    };

    fetchData();

    const interval = setInterval(() => {
      if (!isReport) {
        fetchData();
      } else {
        fetchData();
      }
    }, 3600);

    return () => clearInterval(interval);
  }, [endpoint, apiUrl, isReport]);

  return { data, loading, error };
};

export default useFetchData;
