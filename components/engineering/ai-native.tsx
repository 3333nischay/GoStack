"use client";

import React from "react";

const HeroSection = () => {
  return (
    <section className="bg-black text-white font-[Satoshi] px-4 py-16 sm:py-24 text-center">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-3xl sm:text-5xl font-bold mb-4">
          AI-Native Product Builds
        </h1>
        <h2 className="text-lg sm:text-2xl font-semibold text-gray-300 mb-8">
          Smart. Fast. Scalable.
        </h2>
        <p className="text-sm sm:text-xl leading-relaxed text-gray-400 mb-6">
          You’re not just building a product — you’re building the future. At Stack,
          we help you ship AI-powered products that aren’t just flashy demos —
          they’re investor-ready, user-loved, and built to scale.
        </p>
        <p className="text-sm sm:text-xl leading-relaxed text-gray-400 mb-6">
          We’re not your average dev shop. We’re a product team that eats, sleeps,
          and builds AI.
        </p>
        <p className="text-sm sm:text-xl leading-relaxed text-gray-400">
          If you’ve got a bold idea — we’ve got the team to bring it to life.
        </p>
      </div>
    </section>
  );
};

export default HeroSection;
