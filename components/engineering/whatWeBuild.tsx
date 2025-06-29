"use client";

import React from "react";
import IconCard from "../cards/iconCard";

const WhatWeBuild = () => {
  const cards = [
    {
      title: "GPT-Native Copilots",
      img: "/engineering/1A.png",
    },
    {
      title: "Predictive Dashboards &\nRecommendation Engines",
      img: "/engineering/2A.png",
    },
    {
      title: "GenAI-Powered\nSupport Bots",
      img: "/engineering/3A.png",
    },
    {
      title: "AI-Enabled Workflows For\nFinance, Healthcare, Retail &\nEdtech",
      img: "/engineering/4A.png",
    },
    {
      title: "Chatbots With Memory,\nPersonality & Compliance\nBuilt In",
      img: "/engineering/5A.png",
    },
  ];

  return (
    <section className="bg-black text-white font-[Satoshi] px-4 py-24 text-center">
      <h2 className="text-4xl sm:text-5xl lg:text-6xl font-semibold mb-16">
        What We <span className="text-[#D3B6FB] font-bold">Build</span>
      </h2>

      <div className="max-w-7xl mx-auto flex flex-wrap justify-center gap-8">
        {/* First Row - 3 cards */}
        <div className="w-full flex flex-col sm:flex-row justify-center gap-8">
          {cards.slice(0, 3).map((card, index) => (
            <IconCard
              key={index}
              width="w-full sm:w-[280px] md:w-[320px]"
              height="h-[160px] md:h-[180px]"
              title={card.title.split("\n").map((line, i) => (
                <React.Fragment key={i}>
                  {i > 0 && <br />}
                  {line}
                </React.Fragment>
              ))}
              imgSrc={card.img}
              titleSize="text-lg sm:text-xl md:text-2xl"
              iconSize="w-8 h-8 sm:w-10 sm:h-10"
            />
          ))}
        </div>

        <div className="w-full flex flex-col sm:flex-row justify-center gap-8 mt-8">
          {cards.slice(3).map((card, index) => (
            <IconCard
              key={index}
              width="w-full sm:w-[320px] md:w-[380px]"
              height="h-[180px] md:h-[200px]"
              title={card.title.split("\n").map((line, i) => (
                <React.Fragment key={i}>
                  {i > 0 && <br />}
                  {line}
                </React.Fragment>
              ))}
              imgSrc={card.img}
              titleSize="text-lg sm:text-xl md:text-2xl"
              iconSize="w-8 h-8 sm:w-10 sm:h-10"
            />
          ))}
        </div>
      </div>

      <p className="text-base sm:text-lg lg:text-xl text-white mt-16 opacity-80 font-medium">
        And if it doesn't exist yet? We'll build it.
      </p>
    </section>
  );
};

export default WhatWeBuild;