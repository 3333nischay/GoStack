"use client";
import React from "react";
import NormalCard from "../cards/normalCard";

const RealResults = () => {
  return (
    <section className="w-full bg-white py-16 px-4 sm:px-8">
      <h2 className="text-black font-Semibold text-3xl sm:text-5xl text-center mb-10">
        REAL RESULTS
      </h2>

      <div className="w-full flex justify-center">
        <div className="w-full max-w-[80%]">
          {/* Desktop layout (md and above) */}
          <div className="hidden md:block">
            {/* First row - 2 cards side by side */}
            <div className="flex gap-6 mb-6 justify-center">
              <NormalCard 
                width="w-1/2"
                height="h-[140px]"
                text="Reduced False Positives In Credit Card Fraud Detection"
                textSize="text-sm sm:text-base"
                backgroundColor="#2A2A2A"
                textColor="#F0E6FF"
              />
              <NormalCard 
                width="w-1/2"
                height="h-[140px]"
                text="Segmented Customers Using Clustering"
                textSize="text-sm sm:text-base"
                backgroundColor="#2A2A2A"
                textColor="#F0E6FF"
              />
            </div>
            
            {/* Second row - 1 centered card */}
            <div className="flex justify-center">
              <NormalCard 
                width="w-full"
                height="h-[140px]"
                text="Built A Promotional Mix Modeling Engine"
                textSize="text-sm sm:text-base"
                backgroundColor="#2A2A2A"
                textColor="#F0E6FF"
              />
            </div>
          </div>

          {/* Mobile layout - stacked cards */}
          <div className="grid grid-cols-1 gap-6 md:hidden">
            <NormalCard 
              width="w-full"
              height="h-[120px]"
              text="Reduced False Positives In Credit Card Fraud Detection"
              textSize="text-sm sm:text-base"
              backgroundColor="#2A2A2A"
              textColor="#F0E6FF"
            />
            <NormalCard 
              width="w-full"
              height="h-[120px]"
              text="Segmented Customers Using Clustering"
              textSize="text-sm sm:text-base"
              backgroundColor="#2A2A2A"
              textColor="#F0E6FF"
            />
            <NormalCard 
              width="w-full"
              height="h-[120px]"
              text="Built A Promotional Mix Modeling Engine"
              textSize="text-sm sm:text-base"
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