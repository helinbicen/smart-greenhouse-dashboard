"use client";
import { useRouter } from "next/navigation";
import React from "react";

const Home = () => {
  const router = useRouter();

  const handleRedirect = () => {
    router.push("/cotton");
  };

  return (
    <main className="min-h-screen bg-gradient-to-br from-green-100 to-green-50 flex flex-col items-center justify-center text-center px-4">
      <h1 className="text-4xl md:text-5xl font-bold text-green-800 mb-4">
        🌱 Bitki Takip Paneline Hoş Geldiniz
      </h1>
      <p className="text-lg text-gray-700 mb-8 max-w-xl">
        Bu uygulama sayesinde bitkinizin sıcaklık, nem ve çevresel ihtiyaçlarını
        gerçek zamanlı olarak görüntüleyebilirsiniz.
      </p>
      <button
        onClick={handleRedirect}
        className="px-6 py-3 bg-green-600 text-white text-lg font-semibold rounded-xl shadow hover:bg-green-700 transition-all duration-200 cursor-pointer"
      >
        Takip Paneline Git
      </button>
    </main>
  );
};

export default Home;
