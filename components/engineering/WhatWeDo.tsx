"use client";

import React from "react";
import FlipCard from "../cards/flippingCard";

const WhatWeDo = () => {
  const cardData = [
    {
      frontText: "Custom Application\nDevelopment",
      backText: "Build Scalable, Cloud-Native Applications Tailored To Your Business Goals."
    },
    {
      frontText: "Technical\nArchitecture Review",
      backText: "Identify Bottlenecks, Improve Performance, And Future-Proof Your Stack."
    },
    {
      frontText: "Platform & Systems\nAssessment",
      backText: "Evaluate Your Existing CRM, ERP, Or Core Systems For Gaps And Opportunities."
    },
    {
      frontText: "API Integration &\nEcosystem Enablement",
      backText: "Connect Your App With Third-Party Platforms, Internal Tools, And Partner Systems."
    },
    {
      frontText: "Legacy System\nTransformation",
      backText: "Replatform Or Refactor Outdated Apps For The Cloud And Microservices."
    },
    {
      frontText: "AI Integration In\nApps",
      backText: "Infuse Intelligence Into Your Workflows — From Automation To Real-Time Insights."
    },
    {
      frontText: "Low-Code / No-\nCode Enablement",
      backText: "Empower Business Teams To Create And Iterate Faster With Guided Frameworks."
    }
  ];

  return (
    <section className="w-full px-4 py-4 font-[Satoshi] bg-white mb-10">
      <div className="max-w-6xl mx-auto text-center">

        <h2 className="text-2xl sm:text-4xl font-normal text-black">
          What We Do:{" "}
          <span className="font-bold">Full-Stack Modernisation,</span>{" "}
          <span className="font-bold text-[#9747FF]">Designed</span>{" "}
          <span className="font-bold">for Impact</span>
        </h2>

        <p className="mt-4 text-base sm:text-lg text-gray-700 font-normal">
          From greenfield builds to legacy refactoring, we've got you covered.
        </p>

        <div className="mt-12 flex flex-wrap justify-center gap-12">
          {cardData.map((card, index) => (
            <FlipCard
              key={index}
              frontText={card.frontText}
              backText={card.backText}
              width="w-[220px] sm:w-[240px]"
              height="h-[130px]"
              textSize="text-[clamp(1.2rem,1vw,1.1rem)]"
              backTextSize="text-[0.95rem] leading-tight"
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhatWeDo;