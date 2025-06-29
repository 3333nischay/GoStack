"use client";
import React from "react";
import NormalCard from "../cards/normalCard";
import StatCard from "../cards/statCard";

const PlatformHighlights: React.FC = () => {
  const firstRowItems = [
    "Low-Code Interface",
    "OpenAI, LangChain & Whisper Integrated",
    "Fine-Tuned Indic Language Models",
    "SOC2, ISO 27001, GDPR Compliant",
  ];
  
  const secondRowItems = [
    "Scalable Document Processing (1000s/hr)",
    "Continuous Learning via Feedback Loops",
    "Smart Language & Format Detection",
  ];

  return (
    <section className="w-full px-4 sm:px-6 lg:px-12 py-12 flex flex-col items-center justify-center gap-8 sm:gap-12">
      {/* Title */}
      <h2 className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-bold font-[Satoshi] text-center text-black mb-2">
        PLATFORM HIGHLIGHTS
      </h2>

      {/* First row of feature cards - Maintain structure until md */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6 w-full sm:w-[95%]">
        {firstRowItems.map((item, index) => (
          <NormalCard
            key={index}
            width="w-full"
            height="h-20 sm:h-24 md:h-28"
            text={item}
            textSize="text-base sm:text-lg md:text-sm lg:text-base"
          />
        ))}
      </div>

      {/* Second row of feature cards - Maintain structure until md */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-6 w-full sm:w-[90%] md:w-[80%]">
        {secondRowItems.map((item, index) => (
          <NormalCard
            key={index}
            width="w-full"
            height="h-20 sm:h-24 md:h-28"
            text={item}
            textSize="text-base sm:text-lg md:text-sm lg:text-base"
          />
        ))}
      </div>

      {/* Real Results Section - Consistent layout across screen sizes */}
      <div className="w-full mt-8 sm:mt-16 px-2 sm:px-6 lg:px-12">
        <div className="flex flex-row items-center justify-between w-full flex-wrap gap-y-8">
          {/* Left card - Reduced size between md and lg */}
          <div className="w-full sm:w-[30%] md:w-[28%] lg:w-[30%] order-1 sm:order-1">
            <StatCard
              width="w-full"
              height="h-28 sm:h-30 md:h-24 lg:h-32"
              headingText="90%+"
              subText="accuracy in order document automation"
              textAlign="text-left"
              headingClassName="md:text-2xl lg:text-3xl"
              subTextClassName="md:text-xs lg:text-sm"
            />
          </div>
          
          {/* Heading */}
          <h2 className="w-full sm:w-[30%] md:w-[36%] lg:w-[30%] text-2xl sm:text-3xl lg:text-4xl xl:text-5xl font-bold text-[rgba(151,71,255,1)] font-[Satoshi] tracking-wide text-center order-0 sm:order-2">
            REAL RESULTS
          </h2>
          
          {/* Right card - Reduced size between md and lg */}
          <div className="w-full sm:w-[30%] md:w-[28%] lg:w-[30%] order-2 sm:order-3">
            <StatCard
              width="w-full"
              height="h-28 sm:h-30 md:h-24 lg:h-32"
              headingText="70%"
              subText="faster access to content via GenAI-powered assistant"
              textAlign="text-left"
              headingClassName="md:text-2xl lg:text-3xl"
              subTextClassName="md:text-xs lg:text-sm"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default PlatformHighlights;