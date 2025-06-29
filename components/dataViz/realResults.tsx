"use client";
import React from "react";
import NormalCard from "../cards/normalCard";

const RealResults = () => {
  return (
    <section className="w-full bg-white py-16 px-4 sm:px-8">
      <h2 className="text-black font-Semibold text-3xl sm:text-5xl text-center mb-10">
        <span className="font-normal">REAL </span>
        <span className="font-bold">RESULTS</span>
      </h2>

      <div className="w-full flex justify-center">
        <div className="w-full max-w-[80%]">
          {/* Desktop layout (md and above) */}
          <div className="hidden md:flex flex-col">
            {/* First row - 2 cards side by side */}
            <div className="flex gap-10 mb-8 justify-center">
              <NormalCard 
                width="w-[340px]"
                height="h-[180px]"
                text="Built An AI-Powered Analytics Platform"
                textSize="text-sm sm:text-base"
                backgroundColor="#2A2A2A"
                textColor="#F0E6FF"
              />
              <NormalCard 
                width="w-[340px]"
                height="h-[180px]"
                text="Replaced Excel-Based Investment Tracking"
                textSize="text-sm sm:text-base"
                backgroundColor="#2A2A2A"
                textColor="#F0E6FF"
              />
            </div>
            
            {/* Second row - 1 centered card */}
            <div className="flex justify-center">
              <NormalCard 
                width="w-[340px]"
                height="h-[180px]"
                text="Delivered Real-Time COVID-19 Dashboards"
                textSize="text-sm sm:text-base"
                backgroundColor="#2A2A2A"
                textColor="#F0E6FF"
              />
            </div>
            
            {/* BI Tools We Use section */}
            <div className="mt-36 mb-2 text-center">
              <h3 className="text-black font-semibold text-2xl sm:text-5xl">
                BI Tools We Use
              </h3>
            </div>
            
            <div className="text-center mt-4">
              <p className="text-lg sm:text-3xl font-[400] tracking-wider">
                POWER BI, TABLEAU, LOOKER, QLIK, SUPERSET,<br />
                DBT, SIGMA, METABASE
              </p>
            </div>
          </div>

          {/* Mobile layout - stacked cards */}
          <div className="flex flex-col md:hidden">
            <div className="grid grid-cols-1 gap-6 mb-10">
              <NormalCard 
                width="w-full"
                height="h-[110px]"
                text="Built An AI-Powered Analytics Platform"
                textSize="text-sm sm:text-base"
                backgroundColor="#2A2A2A"
                textColor="#F0E6FF"
              />
              <NormalCard 
                width="w-full"
                height="h-[110px]"
                text="Replaced Excel-Based Investment Tracking"
                textSize="text-sm sm:text-base"
                backgroundColor="#2A2A2A"
                textColor="#F0E6FF"
              />
              <NormalCard 
                width="w-full"
                height="h-[110px]"
                text="Delivered Real-Time COVID-19 Dashboards"
                textSize="text-sm sm:text-base"
                backgroundColor="#2A2A2A"
                textColor="#F0E6FF"
              />
            </div>
            
            {/* BI Tools We Use section - mobile */}
            <div className="mt-8 mb-2 text-center">
              <h3 className="text-black font-semibold text-xl sm:text-2xl">
                BI Tools We Use
              </h3>
            </div>
            
            <div className="text-center">
              <p className="text-md font-[400] tracking-wider">
                POWER BI, TABLEAU, LOOKER,<br />
                QLIK, SUPERSET, DBT,<br />
                SIGMA, METABASE
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default RealResults;