"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";

const Header = () => {
  const pathname = usePathname();

  const isActive = (path: string) =>
    pathname === path ? "text-green-700 font-semibold" : "text-gray-600";

  return (
    <header className="w-full bg-white shadow-md fixed top-0 left-0 z-50">
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
        <Link href="/">
          <span className="text-2xl font-bold text-green-700">🌱 EcoPulse</span>
        </Link>
        <nav className="space-x-6">
          <Link href="/cotton">
            <span className={`hover:text-green-700 transition ${isActive("/dashboard")}`}>
              Takip Paneli
            </span>
          </Link>
        </nav>
      </div>
    </header>
  );
};

export default Header;
