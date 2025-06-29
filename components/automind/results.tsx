'use client';

import Image from 'next/image';
import React from 'react';

const resultsData = [
  {
    title: 'CREDIT CARD FRAUD DETECTION',
    description: (
      <>
        Reduced false positives by <strong className="text-base sm:text-xl md:text-2xl text-[#D3B6FB] group-hover:text-[#D3B6FB]">73%</strong> for a Nigerian bank using AutoMind's real-time scoring models
      </>
    ),
  },
  {
    title: 'ENERGY DEMAND FORECASTING',
    description: (
      <>
        Delivered <strong className="text-base sm:text-xl md:text-2xl text-[#D3B6FB] group-hover:text-[#D3B6FB]">85%</strong> accuracy for a utilities firm, enhancing grid efficiency
      </>
    ),
  },
  {
    title: 'CPG PROMO OPTIMIZATION',
    description: (
      <>
        Achieved <strong className="text-base sm:text-xl md:text-2xl text-[#D3B6FB] group-hover:text-[#D3B6FB]">85%</strong> accuracy on ROI modeling, enabling smarter budget decisions with regulatory explainability
      </>
    ),
  },
];

const RealResults: React.FC = () => {
  return (
    <section className="bg-white w-full px-4 py-16 font-[Satoshi]">
      <h2 className="text-center text-[#8843FF] font-bold text-2xl md:text-5xl mb-12">
        REAL RESULTS
      </h2>

      {/* Added container with max-width and mx-auto for centering */}
      <div className="w-full sm:w-[85%] max-w-6xl mx-auto">
        <div className="space-y-8">
          {resultsData.map((item, index) => (
            <div
              key={index}
              className="grid grid-cols-[1fr_1fr_1fr] sm:grid-cols-[1fr_1.2fr_1fr] items-center gap-2 sm:gap-4"
            >
              {/* Left: Title box */}
              <div className="border border-[#8843FF] text-[#8843FF] px-2 sm:px-4 py-2 sm:py-3 text-center rounded-md font-semibold text-[10px] sm:text-sm md:text-base">
                {item.title}
              </div>

              <div className="flex justify-center w-full">
                <div className="w-full flex justify-center">
                  <Image
                    src="/arrow-right-purple.png" 
                    alt="arrow"
                    width={5000}
                    height={6000}
                    className="w-full max-w-[80px] sm:max-w-[160px] md:max-w-[220px] h-auto"
                  />
                </div>
              </div>

              {/* Right: Description card with hover effects */}
              <div className="bg-[#2A2A2A] text-white px-2 sm:px-4 py-2 sm:py-3 rounded-md text-[10px] sm:text-sm md:text-base group transition-all duration-300 hover:shadow-[4px_4px_4px_-1px_#D3B6FB] sm:hover:shadow-[7px_7px_7px_-1px_#D3B6FB]">
                <span className="transition-all duration-300 transform block group-hover:-translate-y-1 sm:group-hover:-translate-y-2 group-hover:text-[#D3B6FB]">
                  {item.description}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default RealResults;