"use client";
import React from "react";
import IconCard from "../cards/iconCard";

const FeatureCards = () => {
  const cardData = [
    {
      title: (
        <>
          <p className="text-white font-bold text-base sm:text-lg md:text-xl mb-3 sm:mb-4 md:mb-6">Fintech & Banking</p>
          <ul className="text-xs sm:text-sm text-white/80 space-y-1 sm:space-y-1.5 pl-4 sm:pl-5">
            <li className="relative">
              <span className="absolute left-[-1.25rem] top-0">•</span>
              <span>Real-time model governance for regulatory-compliant AI in fraud and credit scoring.</span>
            </li>
            <li className="relative">
              <span className="absolute left-[-1.25rem] top-0">•</span>
              <span>CI/CD pipelines for faster deployment of risk analytics and personalization engines.</span>
            </li>
          </ul>
        </>
      ),
      imgSrc: "/data-ai/hall.png",
    },
    {
      title: (
        <>
          <p className="text-white font-bold text-base sm:text-lg md:text-xl mb-3 sm:mb-4 md:mb-6">Retail & Consumer Tech</p>
          <ul className="text-xs sm:text-sm text-white/80 space-y-1 sm:space-y-1.5 pl-4 sm:pl-5">
            <li className="relative">
              <span className="absolute left-[-1.25rem] top-0">•</span>
              <span>Automated model refresh for demand, pricing, and inventory optimization.</span>
            </li>
            <li className="relative">
              <span className="absolute left-[-1.25rem] top-0">•</span>
              <span>Performance tracking of recommendation models across channels and customer segments.</span>
            </li>
          </ul>
        </>
      ),
      imgSrc: "/data-ai/shopping.png",
    },
    {
      title: (
        <>
          <p className="text-white font-bold text-base sm:text-lg md:text-xl mb-3 sm:mb-4 md:mb-6">EdTech & Online Learning</p>
          <ul className="text-xs sm:text-sm text-white/80 space-y-1 sm:space-y-1.5 pl-4 sm:pl-5">
            <li className="relative">
              <span className="absolute left-[-1.25rem] top-0">•</span>
              <span>Scalable pipelines for continuous learning model updates based on user interaction data.</span>
            </li>
            <li className="relative">
              <span className="absolute left-[-1.25rem] top-0">•</span>
              <span>Centralized registry and monitoring for models powering adaptive assessments.</span>
            </li>
          </ul>
        </>
      ),
      imgSrc: "/data-ai/blcks.png",
    },
    {
      title: (
        <>
          <p className="text-white font-bold text-base sm:text-lg md:text-xl mb-3 sm:mb-4 md:mb-6">Healthcare & Life Sciences</p>
          <ul className="text-xs sm:text-sm text-white/80 space-y-1 sm:space-y-1.5 pl-4 sm:pl-5">
            <li className="relative">
              <span className="absolute left-[-1.25rem] top-0">•</span>
              <span>ML observability for clinical decision models to ensure safety and accuracy.</span>
            </li>
            <li className="relative">
              <span className="absolute left-[-1.25rem] top-0">•</span>
              <span>End-to-end audit trails for AI models used in diagnostics and treatment forecasting.</span>
            </li>
          </ul>
        </>
      ),
      imgSrc: "/data-ai/plant.png",
    },
  ];

  return (
    <div className="w-full bg-black px-4 sm:px-6 md:px-8 py-6 sm:py-8 md:py-10 flex justify-center">
      <div className="w-full max-w-[95%] sm:max-w-[90%] md:max-w-[85%] lg:max-w-[80%]">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-5 md:gap-6 lg:gap-8">
          {cardData.map((card, index) => (
            <IconCard
              key={index}
              width="w-full"
              height="h-auto min-h-[14rem] sm:min-h-[16rem] md:min-h-[14rem]"
              imgSrc={card.imgSrc}
              title={card.title}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default FeatureCards;