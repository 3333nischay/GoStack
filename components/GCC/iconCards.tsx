"use client";
import React from "react";
import IconCard from "../cards/iconCard";

const GCCSection: React.FC = () => {
  return (
    <section className="w-full bg-black text-white py-12 px-4 font-[Satoshi]">
      <div className="max-w-6xl mx-auto text-center">
        <h1 className="text-xl sm:text-6xl md:text-7xl font-bold mb-8 sm:mb-14">
          YOUR GCC, BUT SMARTER
        </h1>
        <p className="text-sm sm:text-2xl md:text-2xl text-gray-300 max-w-4xl mx-auto mb-2 md:mb-8">
          We Don't Just Build Capability Centers. We Build Intelligent, AI-Native GCCs That
          Scale Faster And Operate Leaner — Using Automation And Next-Gen Platforms.
        </p>

        <h2 className="text-lg sm:text-6xl font-semibold mt-10 sm:mt-20 mb-8">
          PLUG AND PLAY TALENT PODS
        </h2>
        <p className="text-xl sm:text-2xl text-white mb-10 font-medium uppercase">
          PRODUCT, DATA, AND AI TEAMS READY TO EMBED.
        </p>
        <p className="text-sm sm:text-2xl text-gray-400 max-w-3xl mx-auto mb-16">
          Skip hiring chaos. Stack's curated pods are ready to deploy — culturally aligned, agile-native, and mission-fit.
        </p>

                <div className="flex flex-row gap-4 sm:gap-20 justify-center items-start flex-nowrap overflow-x-auto">
          <IconCard
            width="w-[250px]"
            height="h-auto"
            imgSrc="/icon3.png"
            title={
              <div className="text-left text-xs sm:text-sm leading-relaxed">
                <p className="text-xs sm:text-lg font-bold mb-1 sm:mb-2">Product & Platform Pods:</p>
                <ul className="list-disc list-inside space-y-0.5 sm:space-y-1 text-xs sm:text-sm font-normal">
                  <li>Product Managers</li>
                  <li>Full Stack Engineers</li>
                  <li>UX/UI Designers</li>
                  <li>Platform Architects</li>
                </ul>
              </div>
            }
          />
        
          <IconCard
            width="w-[250px]"
            height="h-auto"
            imgSrc="/icon7.png"
            title={
              <div className="text-left text-xs sm:text-sm leading-relaxed">
                <p className="text-xs sm:text-lg font-bold mb-1 sm:mb-2">AI & Data Pods:</p>
                <ul className="list-disc list-inside space-y-0.5 sm:space-y-1 text-xs sm:text-sm font-normal">
                  <li>Data Scientists</li>
                  <li>ML Engineers</li>
                  <li>MLOps Specialists</li>
                  <li>Data Product Managers</li>
                </ul>
              </div>
            }
          />
        </div>
        <p className="text-[10px] sm:text-lg md:text-xl lg:text-xl xl:text-2xl text-gray-400 mt-16 font-medium italic whitespace-nowrap overflow-hidden max-w-full md:pl-0 md:text-center -ml-2">
          "DELIVERED AS PODS. EMBEDDED LIKE TEAMS. DESIGNED FOR GCC VELOCITY."
        </p>
      </div>
    </section>
  );
};

export default GCCSection;