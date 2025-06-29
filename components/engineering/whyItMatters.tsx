"use client";

import React from "react";
import NormalCard from "../cards/normalCard";

const WhyItMatters = () => {
  const cardData = [
    {
      heading: "Faster Time-to-Market",
      text: "Deliver features and products faster with modular, agile development.",
    },
    {
      heading: "Reduced Tech Debt",
      text: "Modern codebases are easier to maintain and scale.",
    },
    {
      heading: "Improved Performance",
      text: "Cloud-native and microservice-driven apps are built for scale.",
    },
    {
      heading: "AI-Driven Efficiency",
      text: "Add predictive, proactive, and automated capabilities with ease.",
    },
    {
      heading: "Connected Ecosystems",
      text: "Build APIs and integrations that make your app extensible by design.",
    },
  ];

  return (
    <section className="w-full px-4 py-20 font-[Satoshi] bg-black">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-3xl sm:text-6xl font-semibold text-white mb-12">
          WHY <span className="text-[#D3B6FB]">IT MATTERS?</span>
        </h2>

        <div className="flex flex-wrap justify-center gap-6">
          {cardData.map((item, idx) => (
            <NormalCard
              key={idx}
              width="w-[260px] sm:w-[280px]"
              height="h-[140px] sm:h-[160px]"
              heading={item.heading}
              text={item.text}
              backgroundColor="#2A2A2A"
              textColor="#F0E6FF"
              className="flex-shrink-0"
              headingSize="text-base sm:text-lg"
              textSize="text-sm sm:text-base"
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyItMatters;
