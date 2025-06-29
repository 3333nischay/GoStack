"use client";
import React from "react";
import IconCard from "../cards/iconCard";

const RealResults = () => {
  const cardData = [
    {
      title: (
        <>
          <p className="text-white font-bold text-base sm:text-lg md:text-xl mb-2">Modernised Investment Platform for Hyper-Growth Scaling</p>
          <p className="text-xs sm:text-sm text-white/80 mt-3">
            Reengineered a legacy trading platform to a cloud-native, microservices-based solution with AI-driven compliance and customer onboarding. Enabled a 3x faster launch cadence and reduced manual review effort by 70%.
          </p>
        </>
      ),
      imgSrc: "/data-ai/blcks.png",  
    },
    {
      title: (
        <>
          <p className="text-white font-bold text-base sm:text-lg md:text-xl mb-2">Future-Proofed Salesforce Org to Improve Service Ops and Enable AI Adoption</p>
          <p className="text-xs sm:text-sm text-white/80 mt-3">
            Conducted a deep health check of Amplify Capital's Salesforce platform, identifying and resolving core inefficiencies in case management, omni-channel routing, and UI design—eliminating 97% Apex dependencies, reclaiming storage, and enabling a scalable, AI-ready ecosystem.
          </p>
        </>
      ),
      imgSrc: "/data-ai/plant.png",  
    },
  ];

  return (
    <div className="w-full bg-black px-4 sm:px-6 md:px-8 py-10 sm:py-14 md:py-16 flex flex-col items-center font-[Satoshi]">
      {/* Section heading */}
      <h2 className="text-3xl sm:text-4xl md:text-5xl font-normal mb-10 sm:mb-14 text-center">
        <span className="text-[#9747FF] font-semibold">Real Results</span>
        <span className="text-white"> We've Delivered</span>
      </h2>
      
      <div className="w-[80%]">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 sm:gap-8 md:gap-10">
          {cardData.map((card, index) => (
            <IconCard
              key={index}
              width="w-full"
              height="h-auto min-h-[16rem] sm:min-h-[16rem] md:min-h-[17rem]"
              imgSrc={card.imgSrc}
              title={card.title}
              iconSize="w-8 h-8"
              titleClassName="mt-6"
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default RealResults;