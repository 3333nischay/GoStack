"use client";
import React from "react";
import NormalCard from "../cards/normalCard";

const KeyProofPoints: React.FC = () => {
  const topRow = [
    "95%+ Accuracy On Noisy Scans",
    "Go-Live In Under 2 Weeks",
    "5x Processing Speed Vs Manual",
  ];

  const bottomRow = [
    "Continual Model Learning",
    "API-Ready For Fast Integration",
  ];

  return (
    <section className="w-full px-4 sm:px-6 lg:px-12 py-12 bg-black flex flex-col items-center justify-center gap-12">
      {/* Heading */}
      <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold font-[Satoshi] text-white text-center">
        KEY PROOF POINTS
      </h2>

      {/* Top Row - Increased height */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 w-full max-w-5xl">
        {topRow.map((text, index) => (
          <NormalCard
            key={index}
            width="w-full"
            height="h-28 sm:h-32 md:h-36"
            text={text}
          />
        ))}
      </div>

      {/* Bottom Row: centered 2 items - Increased height */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 w-full max-w-3xl">
        {bottomRow.map((text, index) => (
          <NormalCard
            key={index}
            width="w-full"
            height="h-28 sm:h-32 md:h-36"
            text={text}
          />
        ))}
      </div>
    </section>
  );
};

export default KeyProofPoints;
