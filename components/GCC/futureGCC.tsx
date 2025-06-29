"use client";
import React from "react";
import FlipCard from "../cards/flippingCard"; 

const FutureGCCSection: React.FC = () => {
  return (
    <section className="w-full bg-white text-black py-12 px-4 font-[Satoshi]">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-2xl sm:text-3xl md:text-5xl font-bold mb-6">
          WHAT A FUTURE-READY GCC LOOKS LIKE
        </h2>
        <p className="text-sm sm:text-base md:text-lg text-gray-700 max-w-2xl mx-auto mb-10">
          Modern GCCs Are No Longer Back Offices — They're Strategic Hubs That Drive
          Innovation, Own IP, And Accelerate Digital Transformation.
        </p>

        {/* Two rows with two columns grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 max-w-2xl mx-auto">
          {/* Row 1 */}
          <div className="flex justify-center">
            <FlipCard
              frontText="PRODUCT & TECH"
              backText="Co-build platforms, IP"
              width="w-[90%]"
              height="h-[120px] sm:h-[150px] md:h-[180px]"
              textColor="#D3B6FB"
              textSize="text-xl sm:text-2xl md:text-3xl"
              backTextSize="text-base sm:text-lg md:text-xl"
            />
          </div>
          
          <div className="flex justify-center">
            <FlipCard
              frontText="DATA & AI"
              backText="Deploy ML infra, insights, copilots"
              width="w-[90%]"
              height="h-[120px] sm:h-[150px] md:h-[180px]"
              textColor="#D3B6FB"
              textSize="text-xl sm:text-2xl md:text-3xl"
              backTextSize="text-base sm:text-lg md:text-xl"
            />
          </div>
          
          {/* Row 2 */}
          <div className="flex justify-center">
            <FlipCard
              frontText="OPS & FINANCE"
              backText="Automate repetitive workflows"
              width="w-[90%]"
              height="h-[120px] sm:h-[150px] md:h-[180px]"
              textColor="#D3B6FB"
              textSize="text-xl sm:text-2xl md:text-3xl"
              backTextSize="text-base sm:text-lg md:text-xl"
            />
          </div>
          
          <div className="flex justify-center">
            <FlipCard
              frontText="INFRA & SUPPORT"
              backText="AI-enhanced service delivery."
              width="w-[90%]"
              height="h-[120px] sm:h-[150px] md:h-[180px]"
              textColor="#D3B6FB"
              textSize="text-xl sm:text-2xl md:text-3xl"
              backTextSize="text-base sm:text-lg md:text-xl"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default FutureGCCSection;