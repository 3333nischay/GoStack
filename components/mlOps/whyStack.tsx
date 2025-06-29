"use client";
import React from "react";
import NormalCard from "../cards/normalCard";

const WhyStack = () => {
  const cards = [
    {
      text: "30+ cross-platform MLOps engineers"
    },
    {
      text: "Pre-built Accelerators that cut dev time"
    },
    {
      text: "Seamless collaboration with data science teams"
    }
  ];

  return (
    <section className="w-full bg-black py-16 px-4 sm:px-8">
      <h2 className="text-center font-[Satoshi] mb-12">
        <span className="text-white text-3xl sm:text-4xl font-semibold">WHY </span>
        <span className="text-[#D3B6FB] text-3xl sm:text-5xl font-bold">STACK</span>
        <span className="text-white text-3xl sm:text-4xl font-semibold">?</span>
      </h2>

      <div className="w-full flex justify-center">
        <div className="w-full max-w-[90%] lg:max-w-[85%]">
          {/* Desktop layout (md and above) - single row */}
          <div className="hidden md:flex justify-center gap-8 lg:gap-16">
            {cards.map((card, index) => (
              <NormalCard
                key={index}
                width="w-[30%]" 
                height="h-[120px]"
                text={card.text}
                textSize="text-sm lg:text-lg"
                backgroundColor="#2A2A2A"
                textColor="#F0E6FF"
              />
            ))}
          </div>

          {/* Mobile layout - stacked cards */}
          <div className="grid grid-cols-1 gap-6 md:hidden">
            {cards.map((card, index) => (
              <NormalCard
                key={index}
                width="w-full"
                height="h-[100px]"
                text={card.text}
                textSize="text-base"
                backgroundColor="#2A2A2A"
                textColor="#F0E6FF"
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyStack;