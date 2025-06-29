"use client";
import React from "react";
import IconCard from "../cards/iconCard";

const FeatureCards = () => {
  // Card data remains the same
  const cardData = [
    {
      title: (
        <>
          <p className="text-white font-bold text-base sm:text-lg md:text-xl mb-3 sm:mb-4 md:mb-6">Fintech & Banking</p>
          <ul className="text-xs sm:text-sm text-white/80 space-y-1 sm:space-y-1.5 pl-4 sm:pl-5">
            <li className="relative">
              <span className="absolute left-[-1.25rem] top-0">•</span>
              <span>Real-time fraud detection by streaming and analyzing live transaction data.</span>
            </li>
            <li className="relative">
              <span className="absolute left-[-1.25rem] top-0">•</span>
              <span>AI-driven credit scoring by unifying banking, credit, and behavioral data.</span>
            </li>
          </ul>
        </>
      ),
      imgSrc: "/data-ai/hall.png",
    },
    // Other card data remains unchanged
    {
      title: (
        <>
          <p className="text-white font-bold text-base sm:text-lg md:text-xl mb-3 sm:mb-4 md:mb-6">Retail & E-Commerce</p>
          <ul className="text-xs sm:text-sm text-white/80 space-y-1 sm:space-y-1.5 pl-4 sm:pl-5">
            <li className="relative">
              <span className="absolute left-[-1.25rem] top-0">•</span>
              <span>Predictive demand forecasting using time-series models on sales and inventory data.</span>
            </li>
            <li className="relative">
              <span className="absolute left-[-1.25rem] top-0">•</span>
              <span>Hyper-personalized marketing by integrating POS, CRM, and online behavior data.</span>
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
              <span>Student risk identification through analysis of LMS, exam, and attendance data.</span>
            </li>
            <li className="relative">
              <span className="absolute left-[-1.25rem] top-0">•</span>
              <span>AI-powered learning path suggestions based on behavioral and performance insights.</span>
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
              <span>Real-time clinical insights through analytics on occupancy, treatment, and cost data.</span>
            </li>
            <li className="relative">
              <span className="absolute left-[-1.25rem] top-0">•</span>
              <span>Secure, compliant data pipelines for seamless integration across healthcare systems.</span>
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