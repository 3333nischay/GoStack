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
              <span>Real-time regulatory dashboards to monitor capital adequacy and risk exposure.</span>
            </li>
            <li className="relative">
              <span className="absolute left-[-1.25rem] top-0">•</span>
              <span>Live analytics to track customer LTV, churn, and upsell opportunities.</span>
            </li>
          </ul>
        </>
      ),
      imgSrc: "/data-ai/hall.png",
    },
    {
      title: (
        <>
          <p className="text-white font-bold text-base sm:text-lg md:text-xl mb-3 sm:mb-4 md:mb-6">Retail & E-Commerce</p>
          <ul className="text-xs sm:text-sm text-white/80 space-y-1 sm:space-y-1.5 pl-4 sm:pl-5">
            <li className="relative">
              <span className="absolute left-[-1.25rem] top-0">•</span>
              <span>Omnichannel dashboards to track campaign performance across store, web, and app.</span>
            </li>
            <li className="relative">
              <span className="absolute left-[-1.25rem] top-0">•</span>
              <span>Inventory heatmaps and stockout alerts based on real-time geolocation insights.</span>
            </li>
          </ul>
        </>
      ),
      imgSrc: "/data-ai/shopping.png",
    },
    {
      title: (
        <>
          <p className="text-white font-bold text-base sm:text-lg md:text-xl mb-3 sm:mb-4 md:mb-6">Education & EdTech</p>
          <ul className="text-xs sm:text-sm text-white/80 space-y-1 sm:space-y-1.5 pl-4 sm:pl-5">
            <li className="relative">
              <span className="absolute left-[-1.25rem] top-0">•</span>
              <span>Engagement dashboards to monitor content usage, quiz scores, and attendance.</span>
            </li>
            <li className="relative">
              <span className="absolute left-[-1.25rem] top-0">•</span>
              <span>Curriculum analytics to compare performance across cohorts and instructors.</span>
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
              <span>Operational command centers for real-time visibility into patient flow and resource use.</span>
            </li>
            <li className="relative">
              <span className="absolute left-[-1.25rem] top-0">•</span>
              <span>Clinical outcome dashboards to assess treatment impact across patient segments.</span>
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