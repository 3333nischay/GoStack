"use client";
import React from "react";
import IconCard from "../cards/iconCard";

const FeatureCards = () => {
  const cardData = [
    {
      title: (
        <>
          <p className="text-white font-bold text-base sm:text-lg md:text-xl mb-2">Fintech & Banking</p>
          <ul className="text-xs sm:text-sm text-white/80 space-y-2 pl-3">
            <li className="relative">
              <span className="absolute left-[-1rem] top-0">•</span>
              <span>AI-powered KYC, compliance, and risk</span>
            </li>
            <li className="relative">
              <span className="absolute left-[-1rem] top-0">•</span>
              <span>Event-driven platforms for real-time trading and payments</span>
            </li>
          </ul>
        </>
      ),
      imgSrc: "/data-ai/hall.png",  
    },
    {
      title: (
        <>
          <p className="text-white font-bold text-base sm:text-lg md:text-xl mb-2">Retail & E-Commerce</p>
          <ul className="text-xs sm:text-sm text-white/80 space-y-2 pl-3">
            <li className="relative">
              <span className="absolute left-[-1rem] top-0">•</span>
              <span>Scalable LMS platforms with AI tutoring</span>
            </li>
            <li className="relative">
              <span className="absolute left-[-1rem] top-0">•</span>
              <span>Student success dashboards and analytics</span>
            </li>
          </ul>
        </>
      ),
      imgSrc: "/data-ai/shopping.png",  
    },
    {
      title: (
        <>
          <p className="text-white font-bold text-base sm:text-lg md:text-xl mb-2">Education & EdTech</p>
          <ul className="text-xs sm:text-sm text-white/80 space-y-2 pl-3">
            <li className="relative">
              <span className="absolute left-[-1rem] top-0">•</span>
              <span>Student risk identification through analysis of LMS, exam, and attendance data</span>
            </li>
            <li className="relative">
              <span className="absolute left-[-1rem] top-0">•</span>
              <span>AI-powered learning path suggestions based on behavioral and performance insights</span>
            </li>
          </ul>
        </>
      ),
      imgSrc: "/data-ai/blcks.png",  
    },
    {
      title: (
        <>
          <p className="text-white font-bold text-base sm:text-lg md:text-xl mb-2">Healthcare & Life Sciences</p>
          <ul className="text-xs sm:text-sm text-white/80 space-y-2 pl-3">
            <li className="relative">
              <span className="absolute left-[-1rem] top-0">•</span>
              <span>Interoperable patient portals, EMR modernisation</span>
            </li>
            <li className="relative">
              <span className="absolute left-[-1rem] top-0">•</span>
              <span>AI-driven care plans, readmission risk predictions</span>
            </li>
          </ul>
        </>
      ),
      imgSrc: "/data-ai/plant.png",  
    },
  ];

  return (
    <div className="w-full bg-white px-4 sm:px-6 md:px-8 py-10 sm:py-14 md:py-16 flex flex-col items-center font-[Satoshi]">
      {/* Section heading */}
      <h2 className="text-3xl sm:text-4xl md:text-5xl font-normal mb-10 sm:mb-14 text-center">
        <span className="text-black">Built</span> for Modern Business, 
        <span className="text-[#9747FF] font-semibold"> Across Industries</span>
      </h2>
      
      <div className="w-[80%]">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
          {cardData.map((card, index) => (
            <IconCard
              key={index}
              width="w-full"
              height="h-auto min-h-[12rem] sm:min-h-[14rem] md:min-h-[13rem]"
              imgSrc={card.imgSrc}
              title={card.title}
              iconSize="w-6 h-6"
              titleClassName="mt-4"
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default FeatureCards;