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
          <div className="hidden md:block">
            <div className="flex gap-6 mb-6 justify-center">
              <NormalCard 
                width="w-1/2"
                height="h-[140px]"
                text="Centralized 2.5M+ Patient Records By Unifying Fragmented Healthcare Data Systems With Master Data Management"
                textSize="text-sm sm:text-base"
                backgroundColor="#2A2A2A"
                textColor="#F0E6FF"
              />
              <NormalCard 
                width="w-1/2"
                height="h-[140px]"
                text="Built A Modern Data Lake On AWS To Reduce Churn And Drive Real-Time Marketing Insights Through Unified KPIs"
                textSize="text-sm sm:text-base"
                backgroundColor="#2A2A2A"
                textColor="#F0E6FF"
              />
            </div>
            
            <div className="flex justify-center">
              <NormalCard 
                width="w-full"
                height="h-[140px]"
                text="Automated Integration Of Academic Data Across 17 Departments To Enable Insights And Cut Operational Costs By 30%"
                textSize="text-sm sm:text-base"
                backgroundColor="#2A2A2A"
                textColor="#F0E6FF"
              />
            </div>
          </div>

          <div className="grid grid-cols-1 gap-6 md:hidden">
            <NormalCard 
              width="w-full"
              height="h-[120px]"
              text="Centralized 2.5M+ Patient Records By Unifying Fragmented Healthcare Data Systems With Master Data Management"
              textSize="text-sm sm:text-base"
              backgroundColor="#2A2A2A"
              textColor="#F0E6FF"
            />
            <NormalCard 
              width="w-full"
              height="h-[120px]"
              text="Built A Modern Data Lake On AWS To Reduce Churn And Drive Real-Time Marketing Insights Through Unified KPIs"
              textSize="text-sm sm:text-base"
              backgroundColor="#2A2A2A"
              textColor="#F0E6FF"
            />
            <NormalCard 
              width="w-full"
              height="h-[120px]"
              text="Automated Integration Of Academic Data Across 17 Departments To Enable Insights And Cut Operational Costs By 30%"
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