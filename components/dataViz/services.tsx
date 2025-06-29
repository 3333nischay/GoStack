"use client";
import React from "react";
import FlipCard from "../cards/flippingCard";

const services = [
  "BI & Dashboard\nDevelopment",
  "Self-Service\nAnalytics\nFrameworks",
  "Embedded &\nOperational\nAnalytics",
  "Data Modeling &\nMetric Layer Design",
  "Data Storytelling &\nDesign Thinking"
];

const backtext = [
  "Fast, Intuitive Dashboards\nFor Business Insights",
  "Governed Tools For\nBusiness User Access",
  "Real-Time Analytics Inside\nBusiness Systems",
  "Reusable Metrics With\nClear Data Logic",
  "Visuals That Drive\nDecisions With Context"
];

const CoreServices = () => {
  return (
    <section className="w-full bg-white py-16 px-4 sm:px-8">
      <h2 className="text-black font-semibold text-xl sm:text-4xl text-center mb-12">
        Our Core Services
      </h2>

      <div className="w-full flex justify-center">
        <div className="w-full max-w-[80%]"> 
          <div className="block">
            {/* Mobile layout (below md) */}
            <div className="md:hidden flex flex-wrap gap-x-8 gap-y-10 justify-center">
              {services.map((text, idx) => (
                <FlipCard
                  key={idx}
                  frontText={text}
                  backText={backtext[idx]}
                  width="w-[220px] sm:w-[230px]"
                  height="h-[130px] sm:h-[140px]"
                  textColor="white"
                  textSize="text-[clamp(0.9rem,1.3vw,1.5rem)]"
                  backTextSize="text-[clamp(0.85rem,0.9vw,1rem)]"
                  className="flex-shrink-0"
                />
              ))}
            </div>
            
            <div className="hidden md:block">
              {/* First row - 3 cards */}
              <div className="flex justify-center gap-x-8 gap-y-10 mb-10">
                {services.slice(0, 3).map((text, idx) => (
                  <FlipCard
                    key={idx}
                    frontText={text}
                    backText={backtext[idx]}
                    width="w-[240px]"
                    height="h-[150px]"
                    textColor="white"
                    textSize="text-[clamp(0.9rem,1.3vw,1.5rem)]"
                    backTextSize="text-[clamp(0.85rem,0.9vw,1rem)]"
                    className="flex-shrink-0"
                  />
                ))}
              </div>
              
              {/* Second row - 2 cards centered */}
              <div className="flex justify-center gap-x-8">
                {services.slice(3, 5).map((text, idx) => (
                  <FlipCard
                    key={idx + 3}
                    frontText={text}
                    backText={backtext[idx + 3]}
                    width="w-[240px]"
                    height="h-[150px]"
                    textColor="white"
                    textSize="text-[clamp(0.9rem,1.3vw,1.5rem)]"
                    backTextSize="text-[clamp(0.85rem,0.9vw,1rem)]"
                    className="flex-shrink-0"
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CoreServices;