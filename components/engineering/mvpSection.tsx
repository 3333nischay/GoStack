"use client";

import React from "react";

const MVPSection = () => {
  return (
    <section className="bg-white font-[Satoshi] px-4 py-12 sm:py-16 md:py-20 lg:py-24">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-start md:items-center text-black gap-6 sm:gap-8 md:gap-10">
        {/* Left Side */}
        <div className="text-left w-full md:w-auto mb-6 md:mb-0">
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-semibold leading-tight">
            <span className="text-[#9747FF] font-bold">MVP</span>{" "}
            <span className="font-normal">as a </span>
            <br className="hidden sm:block" />
            <span className="font-normal sm:block">Service</span>
          </h2>
        </div>

        {/* Right Side */}
        <div className="text-left md:text-right max-w-full md:max-w-xl">
          <p className="font-semibold mb-3 sm:mb-4 text-xl sm:text-2xl">
            Validate fast. Build smart. Launch with confidence.
          </p>
          <p className="mb-3 sm:mb-4 text-lg sm:text-xl">
            Built for founders, product heads & bold ideas.
          </p>
          <p className="text-base sm:text-lg">
            Whether you're testing a new AI product or need a working PoC to
            impress investors, we help you go from idea to MVP—in weeks, not
            months.
          </p>
        </div>
      </div>
    </section>
  );
};

export default MVPSection;