'use client';

import React from 'react';
import NormalCard from '../cards/normalCard';

const PlatformHighlights: React.FC = () => {
  // Helper function to split text into heading and description
  const splitText = (text: string) => {
    const parts = text.split('\n');
    return {
      heading: parts[0],
      text: parts.slice(1).join('\n')
    };
  };

  return (
    <section className="bg-black text-white py-16 px-4 w-full font-[Satoshi]">
      <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 mt-24">
        PLATFORM HIGHLIGHTS
      </h2>

      <div className="flex flex-col items-center gap-y-6">
        {/* Top row - 2 cards centered */}
        <div className="flex flex-col sm:flex-row gap-6 justify-center">
          <NormalCard
            width="w-[280px] md:w-[300px]"
            height="h-[120px]"
            heading={splitText("Enterprise-Grade Compliance\nGDPR aligned, VAPT tested").heading}
            text={splitText("Enterprise-Grade Compliance\nGDPR aligned, VAPT tested").text}
            headingSize="text-lg md:text-xl"
            textSize="text-[10px] md:text-[11px]"
            headingClassName="font-bold mb-1"
          />
          <NormalCard
            width="w-[280px] md:w-[300px]"
            height="h-[120px]"
            heading={splitText("No DevOps Required\nEmpower analysts without MLOps dependency").heading}
            text={splitText("No DevOps Required\nEmpower analysts without MLOps dependency").text}
            headingSize="text-lg md:text-xl"
            textSize="text-[10px] md:text-[11px]"
            headingClassName="font-bold mb-1"
          />
        </div>

        {/* Bottom row - 3 cards spaced evenly */}
        <div className="flex flex-col sm:flex-row flex-wrap justify-center gap-6">
          <NormalCard
            width="w-[260px] md:w-[280px]"
            height="h-[120px]"
            heading={splitText("Rapid Prototyping\nIterate quickly with instant feedback").heading}
            text={splitText("Rapid Prototyping\nIterate quickly with instant feedback").text}
            headingSize="text-lg md:text-xl"
            textSize="text-[10px] md:text-[11px]"
            headingClassName="font-bold mb-1"
          />
          <NormalCard
            width="w-[260px] md:w-[280px]"
            height="h-[120px]"
            heading={splitText("Cloud-Optimized\nReady for Vercel, GCP, and PostHog").heading}
            text={splitText("Cloud-Optimized\nReady for Vercel, GCP, and PostHog").text}
            headingSize="text-lg md:text-xl"
            textSize="text-[10px] md:text-[11px]"
            headingClassName="font-bold mb-1"
          />
          <NormalCard
            width="w-[260px] md:w-[280px]"
            height="h-[120px]"
            heading={splitText("Python-Native + FastAPI\nEasy deployment in modern stacks").heading}
            text={splitText("Python-Native + FastAPI\nEasy deployment in modern stacks").text}
            headingSize="text-lg md:text-xl"
            textSize="text-[10px] md:text-[11px]"
            headingClassName="font-bold mb-1"
          />
        </div>
      </div>
    </section>
  );
};

export default PlatformHighlights;