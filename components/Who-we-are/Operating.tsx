"use client";
import React from 'react';
import FlipCard from '../cards/flippingCard';

const OperatingSystemSection: React.FC = () => {
  // First three cards in standard grid
  const topCards = [
    {
      front: "MOVE SMART.\nNOT JUST FAST.",
      back: "We focus on deliberate speed\nthat doesn't sacrifice quality.",
    },
    {
      front: "CO-CREATE,\nDON'T JUST CONSULT.",
      back: "We build with you,\nnot just for you.",
    },
    {
      front: "DESIGN FOR HUMANS.\nENGINEER FOR SCALE.",
      back: "Tech that feels natural,\nand scales naturally.",
    },
  ];

  // Bottom two cards in 2-column layout
  const bottomCards = [
    {
      front: "OUTCOME OVER OUTPUT",
      back: "Impact > effort.\nResults > activity.",
    },
    {
      front: "WORK LIKE ARTISTS.\nBUILD LIKE ENGINEERS.",
      back: "Creative in thought,\nprecise in execution.",
    },
  ];

  return (
    <section className="w-full py-12 sm:py-16 md:py-20 lg:py-24 px-4 sm:px-6 md:px-8 lg:px-12 font-[Satoshi]">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-start justify-center gap-6 md:gap-8 lg:gap-12">
        {/* Left: Title - REDUCED WIDTH FOR MOBILE */}
        <div className="flex flex-col items-start w-[85%] xs:w-[75%] sm:w-[60%] md:w-[30%] lg:w-[30%] relative mb-8 lg:mb-0">
          {/* Three lines stacked vertically */}
          <div className="absolute left-0 -top-5 sm:-top-8 md:-top-12 h-[120%] sm:h-[130%] md:h-[140%] w-[3px]">
            <div className="absolute top-0 w-full h-1/3 bg-[#777777]"></div>
            <div className="absolute top-1/3 w-full h-1/3 bg-[#6545D4]"></div>
            <div className="absolute top-2/3 w-full h-1/3 bg-[#777777]"></div>
          </div>
          <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-bold leading-tight text-black pl-5 md:pl-6 lg:pl-8">
            <span className="text-[#6545D4]">Our</span> <br />
            Operating <br className="hidden xs:block" /> System
          </h2>
        </div>

        {/* Right: Cards Grid with separate layouts - MAINTAINED GRID STRUCTURE */}
        <div className="w-full flex flex-col gap-4 sm:gap-5 md:gap-6 lg:gap-8">
          {/* Top row: cards in responsive grid - RESPONSIVE WIDTHS AND HEIGHTS */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3 sm:gap-4 md:gap-2 lg:gap-8">
            {topCards.map((card, index) => (
              <FlipCard
                key={index}
                frontText={card.front}
                backText={card.back}
                width="w-full" 
                height="h-[110px] xs:h-[90px] sm:h-[100px] md:h-[110px] lg:h-[150px] xl:h-[160px]"
                className="font-[Satoshi] mx-auto"
              />
            ))}
          </div>
          
          {/* Bottom row: 2 cards in 2-column grid - RESPONSIVE WIDTHS AND HEIGHTS */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4 md:gap-4 lg:gap-8">
            {bottomCards.map((card, index) => (
              <FlipCard
                key={index}
                frontText={card.front}
                backText={card.back}
                width="w-full"
                height="h-[110px] xs:h-[80px] sm:h-[90px] md:h-[90px] lg:h-[120px] xl:h-[130px]"
                className="font-[Satoshi] mx-auto"
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default OperatingSystemSection;