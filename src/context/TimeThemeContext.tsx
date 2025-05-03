"use client";

import Header from "@/components/Header";
import { ThemeCategory } from "@/types/theme";
import { createContext, useContext, useEffect, useState } from "react";

type TimeTheme = "day" | "night";

const TimeThemeContext = createContext<TimeTheme>("day");

export const useTimeTheme = () => useContext(TimeThemeContext);

export const TimeThemeProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const [theme, setTheme] = useState<TimeTheme>(ThemeCategory.DAY);

  useEffect(() => {
    const hour = new Date().getHours();
    setTheme(hour < 6 || hour >= 18 ? ThemeCategory.NIGHT : ThemeCategory.DAY);
  }, []);

  return (
    <TimeThemeContext.Provider value={theme}>
      {children}
    </TimeThemeContext.Provider>
  );
};
