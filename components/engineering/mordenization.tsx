"use client";

import React from "react";
import IconFlipCard from "../cards/iconFlipping";

const WhyStackForModernisation = () => {
  const cards = [
    { 
      icon: "/engineering/3B.png", 
      frontText: "CLOUD-NATIVE\nFIRST",
      backText: "Architected For Scalability, Resilience, And Performance"
    },
    { 
      icon: "/engineering/1E.png", 
      frontText: "AI BY DESIGN",
      backText: "Infused With Machine Learning, Not Bolted On"
    },
    { 
      icon: "/engineering/2E.png", 
      frontText: "SYSTEM-\nAGNOSTIC\nINTEGRATION",
      backText: "Built To Plug Into Your Existing Tech Stack"
    },
    { 
      icon: "/engineering/3E.png", 
      frontText: "REUSABLE\nACCELERATORS",
      backText: "Reduce Development Time With Our Proven Tools"
    },
    { 
      icon: "/engineering/4E.png", 
      frontText: "EXPERT TEAMS",
      backText: "Backed By Architects, Engineers, And A Collective Wealth Of Domain Experience"
    },
  ];

  return (
    <section className="w-full px-4 py-20 bg-black font-[Satoshi]">
      <div className="max-w-6xl mx-auto text-center">
        {/* Heading */}
        <h2 className="text-3xl sm:text-4xl font-semibold text-white mb-12">
          Why <span className="text-[#D3B6FB]">STACK</span> For Application Modernisation
        </h2>

        {/* Cards */}
        <div className="flex flex-wrap justify-center gap-10">
          {cards.map((card, idx) => (
            <IconFlipCard
              key={idx}
              frontText={card.frontText}
              backText={card.backText}
              iconSrc={card.icon}
              textColor="#F0E6FF"
              width="w-[260px] sm:w-[280px]"
              height="h-[160px] sm:h-[180px]"
              textSize="text-base sm:text-lg font-bold"
              backTextSize="text-sm sm:text-base"
              textAlignment="center"
              iconPosition="top-4 left-4"
              iconSize={32}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyStackForModernisation;