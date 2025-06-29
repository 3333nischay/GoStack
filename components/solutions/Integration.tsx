"use client";

import React from "react";
import NormalCard from "../cards/normalCard";

const IntegratedSystemSection = () => {
  return (
    <section className="w-full px-4 py-20 font-[Satoshi] bg-white">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-[400] text-black">
          More than <span className="font-semibold">services</span> or <span className="font-semibold">solutions</span> — a <span className="font-semibold">system.</span>
        </h2>

        <p className="mt-6 font-[400] text-base sm:text-lg md:text-xl text-[#222] max-w-4xl mx-auto">
          Every <span className="font-semibold">Stack solution</span> is designed to integrate with your business, your people, and your pace. We don't just ship deliverables, <span className="font-semibold">we ship momentum.</span>
        </p>

        <div className="mt-16 flex flex-wrap justify-center gap-6">
          {[
            "Embedded Agile Teams",
            "Strategy → Design → Build → Evolve",
            "Outcome-First Execution",
          ].map((text, idx) => (
            <NormalCard
              key={idx}
              text={text}
              width="w-[320px] sm:w-[350px]" 
              height="h-[90px] sm:h-[100px]" 
              textSize="text-base sm:text-lg"
              textColor="#F0E6FF"
              backgroundColor="#2A2A2A"
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default IntegratedSystemSection;