"use client";
import React from "react";
import NormalCard from "../cards/normalCard";

const RealResults = () => {
  return (
    <section className="w-full bg-white py-16 px-4 sm:px-8">
      <h2 className="text-black font-semibold text-3xl sm:text-5xl text-center mb-10">
        REAL RESULTS
      </h2>

      <div className="w-full flex justify-center">
        <div className="w-full max-w-[80%]">
          {/* Desktop layout (md and above) */}
          <div className="flex flex-col sm:flex-row gap-10 sm:gap-20 justify-center">
            <NormalCard 
              width="w-full sm:w-[42%] md:w-[38%] lg:w-[34%]"
              height="h-[180px] sm:h-[200px]"
              text="Improved ICD/CPT Coding Accuracy"
              textSize="text-lg sm:text-xl"
              backgroundColor="#2A2A2A"
              textColor="#F0E6FF"
            />
            <NormalCard 
              width="w-full sm:w-[42%] md:w-[38%] lg:w-[34%]"
              height="h-[180px] sm:h-[200px]"
              text="Deployed Graph-Based AI"
              textSize="text-lg sm:text-xl"
              backgroundColor="#2A2A2A"
              textColor="#F0E6FF"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default RealResults;