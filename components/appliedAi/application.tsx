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
              <span>Credit risk and propensity models to predict default and personalize credit offerings.</span>
            </li>
            <li className="relative">
              <span className="absolute left-[-1.25rem] top-0">•</span>
              <span>Real-time fraud detection using anomaly models across digital and offline channels.</span>
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
              <span>Demand forecasting and price optimization models based on elasticity and market trends.</span>
            </li>
            <li className="relative">
              <span className="absolute left-[-1.25rem] top-0">•</span>
              <span>CLTV and churn models to identify high-value users and drive retention strategies.</span>
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
              <span>Student success prediction models to flag dropouts and improve learning engagement.</span>
            </li>
            <li className="relative">
              <span className="absolute left-[-1.25rem] top-0">•</span>
              <span>Adaptive learning models to personalize content and pace based on learner profiles.</span>
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
              <span>NLP and vision-based models to extract insights from clinical notes, images, and lab data.</span>
            </li>
            <li className="relative">
              <span className="absolute left-[-1.25rem] top-0">•</span>
              <span>Predictive models to assess treatment efficacy and patient trial eligibility.</span>
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