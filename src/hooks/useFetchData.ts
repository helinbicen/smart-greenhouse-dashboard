"use client";

import { useState, useEffect } from "react";
import axios from "axios";
import { SensorData } from "@/types/sensor";
import { generateMockData, mockSensorData } from "@/data/sensorData";

const useFetchData = (endpoint: string) => {
  const [data, setData] = useState<SensorData | null>(null);
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);
  const apiUrl = process.env.API_URL;

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      setError(null);

      try {
        if (apiUrl) {
          const response = await axios.get(`${apiUrl}/${endpoint}`);
          setData(response.data);
        } else {
          const mockData = generateMockData(); // TODO: Will be removed after backend integration
          setData(mockData);
          // setData(mockSensorData)
          {
            /**  // Can be used for stabilized appearance */
          }
        }
      } catch (err: any) {
        setError(err.message || "Veri alınırken bir hata oluştu.");
      } finally {
        setLoading(false);
      }
    };
    fetchData();

    const interval = setInterval(() => {
      fetchData();
    }, 1000); // TODO: Set to 1 minute for logic control

    return () => clearInterval(interval);
  }, [endpoint, apiUrl]);

  return { data, loading, error };
};

export default useFetchData;
