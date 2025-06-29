"use client";

import React from "react";
import FlipCard from "../cards/flippingCard";

const WhyGoAINative = () => {
  const cardContent = [
    {
      frontText: "MVP IN\nWEEKS, NOT\nMONTHS",
      backText: "We Ship Industry-Grade MVPs in Under 3 Weeks, Not Months or Years."
    },
    {
      frontText: "AI-FIRST\nTHINKING\nBAKED IN",
      backText: "From GPT, LangChain, And Vector DBs To Whisper And Agents — AI Isn't An After-Thought, It's Our Foundation."
    },
    {
      frontText: "INFRA THAT\nWON'T BREAK\nAT SCALE",
      backText: "Designed From Day 1 To Handle Traffic, Complex Algorithms, And Ready For Scale."
    },
    {
      frontText: "DESIGN THAT\nTELLS YOUR\nSTORY",
      backText: "UX Flows Crafted For Design Sense, Feel, and Delight — Not Just Dev Handoffs."
    }
  ];

  return (
    <section className="bg-white py-16 px-4 text-center font-[Satoshi]">
      <h2 className="text-2xl sm:text-4xl md:text-5xl font-bold mb-12 text-black">
        WHY GO AI-NATIVE WITH STACK?
      </h2>

      <div className="flex flex-wrap justify-center gap-6">
        {cardContent.map((card, i) => (
          <FlipCard
            key={i}
            frontText={card.frontText}
            backText={card.backText}
            textColor="#B49BFF"
            className="w-[240px] h-[140px]"
            textSize="text-[clamp(1.5rem,1.3vw,1.5rem)]"
            frontWeight="font-medium"
            backTextSize="text-md sm:text-md"
          />
        ))}
      </div>
    </section>
  );
};

export default WhyGoAINative;