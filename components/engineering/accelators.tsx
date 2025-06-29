"use client";

import React from "react";
import NormalCard from "../cards/normalCard";
import FlipCard from "../cards/flippingCard";

const AcceleratorsSection = () => {
  return (
    <section className="bg-white text-black font-[Satoshi] px-4 py-20 text-center">
      <h2 className="text-4xl sm:text-5xl font-[Satoshi] font-medium mb-3">
        Our <span className="font-bold">Accelerators</span> In Action
      </h2>
      <p className="text-base sm:text-lg text-gray-700 mb-16">
        We don't reinvent the wheel every time. Our in-house platforms help you move faster:
      </p>

      <div className="max-w-7xl mx-auto flex flex-col items-center gap-10">
        {/* Normal Cards Row */}
        <div className="flex flex-col sm:flex-row justify-center gap-8 w-full">
          <NormalCard
            width="w-full sm:w-[400px] md:w-[460px]"
            height="h-[260px]"
            heading="Cognitex"
            text="For AI-powered document processing, OCR, language translation, and structured data extraction. Ideal for healthcare, BFSI, and retail use cases."
            headingSize="text-3xl sm:text-4xl"
            textSize="text-lg sm:text-xl"
          />
          <NormalCard
            width="w-full sm:w-[400px] md:w-[460px]"
            height="h-[260px]"
            heading="AutoMind"
            text="For MLOps, model monitoring, SHAP-based explainability, and no-code pipelines. Perfect for predictive use cases in education, finance, and logistics."
            headingSize="text-3xl sm:text-4xl"
            textSize="text-lg sm:text-xl"
          />
        </div>

        {/* Flip Cards First Row */}
        <div className="flex flex-col sm:flex-row justify-center gap-8 w-full">
          <FlipCard
            frontText="Streamlined Order Processing. Reducing Time By 40%"
            backText="Automated Order Processing For A Global Retailer, Reducing Processing Time By 40% And Increasing Throughput By 30%, Enabling Quicker Delivery And Higher Customer Satisfaction."
            width="w-full sm:w-[320px] md:w-[360px]"
            height="h-[160px] md:h-[180px]"
            textColor="white"
            textSize="text-lg sm:text-xl"
            backTextSize="text-sm sm:text-base"
          />
          <FlipCard
            frontText="Reduced Call Center Volume. By 50% With AI-Powered Chatbot"
            backText="Deployed A GenAI-Driven Chatbot For A Telecom Company, Handling 50% Of Common Customer Queries, Resulting In Faster Response Times, A 20% Boost In Customer Satisfaction, And 20% Reduction In Operational Costs."
            width="w-full sm:w-[320px] md:w-[360px]"
            height="h-[160px] md:h-[180px]"
            textColor="white"
            textSize="text-lg sm:text-xl"
            backTextSize="text-sm sm:text-base"
          />
        </div>

        {/* Flip Card Second Row */}
        <div className="flex justify-center w-full">
          <FlipCard
            frontText="Reduced Healthcare Resource. Wastage By 15%"
            backText="Developed A Predictive Dashboard For A Healthcare Provider That Reduced Resource Wastage By 15% And Improved Patient Care Through More Efficient Staff And Resource Allocation."
            width="w-full sm:w-[320px] md:w-[360px]"
            height="h-[160px] md:h-[180px]"
            textColor="white"
            textSize="text-lg sm:text-xl"
            backTextSize="text-sm sm:text-base"
          />
        </div>
      </div>
    </section>
  );
};

export default AcceleratorsSection;