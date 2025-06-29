"use client";
import React, { useState, useEffect } from "react";
import IconFlipCard from "../cards/iconFlipping";

const useCases = [
  {
    title: "BFSI",
    backText: "Build credit scoring\nmodels, detect fraud, Or\npredict churn",
    icon: "/manLib.png",
    iconPosition: "top-4 right-4",
  },
  {
    title: "RETAIL",
    backText: "Forecast demand,\noptimize pricing,\npersonalize customer journeys",
    icon: "/starMan.png",
    iconPosition: "top-4 right-4",
  },
  {
    title: "HEALTHCARE",
    backText: "Detect risk early,\nforecast capacity,\nand streamline operations",
    icon: "/medic.png",
    iconPosition: "top-4 right-4",
  },
  {
    title: "UTILITIES",
    backText: "Predict maintenance,\nmonitor consumption,\nand prevent outages",
    icon: "/nutPeople.png",
    iconPosition: "top-4 right-4",
  },
];

const IndustryUseCases: React.FC = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    setIsMobile(window.innerWidth < 640);
    const handleResize = () => {
      setIsMobile(window.innerWidth < 640);
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <section className="py-16 px-4 sm:px-8 bg-black text-white font-[Satoshi] text-center">
      <h2 className="text-3xl sm:text-4xl md:text-5xl font-semibold mb-6 sm:mb-12">
        Industry Use Cases
      </h2>

      {/* Subheading */}
      <div className="mb-10">
        <p className="text-xl sm:text-2xl text-gray-300">
          Drive <span className="font-semibold text-white">real outcomes</span> across{" "}
          <span className="font-semibold text-white">high-impact industries</span>:
        </p>
      </div>

      {/* Desktop: All cards in one row */}
      <div className="hidden sm:flex justify-center items-center flex-wrap gap-16 max-w-7xl mx-auto">
        {useCases.map((useCase, index) => (
          <IconFlipCard
            key={index}
            frontText={useCase.title}
            backText={useCase.backText}
            iconSrc={useCase.icon}
            iconPosition={useCase.iconPosition}
            iconSize={40}
            textAlignment="center"
            className="shadow-md"
            width="w-[200px] md:w-[220px] lg:w-[240px]"
            height="h-[140px] md:h-[150px] lg:h-[160px]"
            textSize="text-base md:text-lg lg:text-xl font-semibold"
            backTextSize="text-sm md:text-base"
            textColor="white"
          />
        ))}
      </div>

      {/* Mobile: Vertically stacked cards */}
      <div className="flex flex-col items-center gap-6 sm:hidden">
        {useCases.map((useCase, index) => (
          <IconFlipCard
            key={index}
            frontText={useCase.title}
            backText={useCase.backText}
            iconSrc={useCase.icon}
            iconPosition={useCase.iconPosition}
            iconSize={32}
            textAlignment="center"
            className="shadow-md"
            width="w-[280px]"
            height="h-[140px]"
            textSize="text-lg font-semibold"
            backTextSize="text-sm"
            textColor="white"
          />
        ))}
      </div>
    </section>
  );
};

export default IndustryUseCases;