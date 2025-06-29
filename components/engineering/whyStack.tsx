"use client";

import React from "react";
import NormalCard from "../cards/normalCard";

const WhyChooseStackSection = () => {
  return (
    <section className="bg-black text-white px-4 py-20 font-[Satoshi]">
      <div className="max-w-6xl mx-auto">
        <div className="text-right mb-16">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-[400] text-white leading-snug">
            Why Startups & Tech Teams Choose
          </h2>
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-[#D3B6FB] mt-1">
            STACK?
          </h1>
        </div>
        
        <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 justify-center">
          <NormalCard
            width="w-full"
            height="h-[240px] sm:h-[230px]"
            heading="AI-FIRST THINKING"
            text="Your MVP won't just look smart. It'll be smart. We embed AI-native features like copilots, chatbots, and predictive layers from Day 1."
            headingSize="text-xl sm:text-2xl"
            textSize="text-base sm:text-lg"
          />
          <NormalCard
            width="w-full"
            height="h-[240px] sm:h-[230px]"
            heading="BUILT TO SCALE"
            text="Every MVP is designed with a scale-up path in mind—modular, cloud-native, and integration-ready."
            headingSize="text-xl sm:text-2xl"
            textSize="text-base sm:text-lg"
          />
          <NormalCard
            width="w-full"
            height="h-[240px] sm:h-[230px]"
            heading="FAST-TRACK TO DEMO DAY"
            text="We ship early and iterate fast. Most MVPs go live in under 4–6 weeks, ready to demo, pilot, or pitch."
            headingSize="text-xl sm:text-2xl"
            textSize="text-base sm:text-lg"
          />
        </div>
      </div>
    </section>
  );
};

export default WhyChooseStackSection;