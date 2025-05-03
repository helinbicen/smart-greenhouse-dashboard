"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";
import { useTimeTheme } from "@/context/TimeThemeContext";
import { ThemeCategory } from "@/types/theme";

const Header = () => {
  const pathname = usePathname();
  const theme = useTimeTheme();

  const isActive = (path: string) =>
    pathname === path
      ? "text-green-600 font-semibold bg-green-200"
      : "text-green-600 font-semibold";

  return (
    <header
      className={`w-full shadow-md fixed top-0 left-0 z-50 ${
        theme === ThemeCategory.NIGHT
          ? "bg-gray-900 text-white"
          : "bg-yellow-100 text-gray-800"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
        <Link href="/">
          <span className="text-2xl font-bold text-green-700">🌱 EcoPulse</span>
        </Link>
        <img
          src={
            theme === ThemeCategory.NIGHT
              ? "/assets/Moon.gif"
              : "/assets/Sun.gif"
          }
          alt="Günün vakti"
          width={40}
          height={40}
        />
        <nav className="space-x-6">
          <Link href="/dashboard">
            <span
              className={`hover:text-green-700 bg-green-100 p-3 rounded-lg transition ${isActive(
                "/dashboard"
              )}`}
            >
              Takip Paneli
            </span>
          </Link>
        </nav>
      </div>
    </header>
  );
};

export default Header;
