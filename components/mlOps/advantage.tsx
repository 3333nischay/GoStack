"use client";
import React from "react";
import Image from "next/image";

const PlatformAdvantage: React.FC = () => {
  return (
    <div className="bg-black text-white font-[Satoshi] py-10 sm:py-12 md:py-16 px-4 sm:px-6 flex flex-col items-center">
      <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-medium uppercase text-white mb-3 text-center">
        Platform <span className="text-[#D3B6FB] font-semibold">Advantage</span>
      </h2>

      <div className="bg-[#1a1a1a] mt-8 sm:mt-10 md:mt-12 px-4 sm:px-8 md:px-14 lg:px-20 
                      py-8 sm:py-10 md:py-12 lg:py-14 rounded-lg 
                      flex flex-row items-center gap-4 sm:gap-6 md:gap-12 
                      w-[90%] sm:w-[85%] md:w-[75%] lg:w-[70%] mx-auto">
        <div className="flex-1 min-w-0">
          <p className="text-white text-base sm:text-xl md:text-2xl lg:text-3xl font-medium mb-2 sm:mb-4 md:mb-6">
            Automind for no-code MLOps:
          </p>
          <ul className="text-white text-sm sm:text-lg md:text-xl lg:text-2xl list-disc list-inside space-y-1 sm:space-y-2 md:space-y-4">
            <li>Drift monitoring</li>
            <li>SHAP dashboards</li>
            <li>Auto retraining workflows</li>
          </ul>
        </div>
        <div className="flex-shrink-0 flex justify-center">
          <Image
            src="/mlOps/advantage.png" 
            alt="Flow Diagram"
            width={200}
            height={200}
            className="min-w-[80px] sm:min-w-[120px] md:min-w-[150px] lg:min-w-[180px]
                       w-[80px] sm:w-[120px] md:w-[150px] lg:w-[180px] h-auto"
          />
        </div>
      </div>
    </div>
  );
};

export default PlatformAdvantage;