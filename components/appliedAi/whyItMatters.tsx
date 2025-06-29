"use client";
import React from "react";
import NormalCard from "../cards/normalCard";

const WhyItMatters = () => {
  const cards = [
    {
      heading: "Domain-Specific AI,",
      subtext: "not one-size-fits-all"
    },
    {
      heading: "Faster Time to Value",
      subtext: "with prebuilt components"
    },
    {
      heading: "Explainable ML,",
      subtext: "trusted by business"
    },
    {
      heading: "Scalable, maintainable",
      subtext: "models"
    },
    {
      heading: "KPI-Aligned Insights",
      subtext: ""
    }
  ];

  return (
    <section className="w-full bg-black py-16 px-4 sm:px-8 font-[Satoshi]">
      <div className="w-full flex justify-center">
        <div className="w-full max-w-[80%]">
          <div className="hidden md:grid md:grid-cols-3 gap-6 lg:gap-8">
            {/* First row */}
            
            <NormalCard 
              width="w-[80%]"
              height="h-[110px]"
              heading={cards[0].heading}
              text={cards[0].subtext}
              textSize="text-sm opacity-80"
              headingSize="text-base"
              className="font-[Satoshi]"
            />
            <NormalCard 
              width="w-[80%]"
              height="h-[110px]"
              heading={cards[1].heading}
              text={cards[1].subtext}
              textSize="text-sm opacity-80"
              headingSize="text-base"
              className="font-[Satoshi]"
            />
            <NormalCard 
              width="w-[80%]"
              height="h-[110px]"
              heading={cards[2].heading}
              text={cards[2].subtext}
              textSize="text-sm opacity-80"
              headingSize="text-base"
              className="font-[Satoshi]"
            />
            
            <div className="col-span-3 h-8 md:h-10 lg:h-0"></div>
            
            {/* Second row - 2 cards and title */}
            <NormalCard 
              width="w-[80%]"
              height="h-[110px]"
              heading={cards[3].heading}
              text={cards[3].subtext}
              textSize="text-sm opacity-80"
              headingSize="text-base"
              className="font-[Satoshi]"
            />
            <NormalCard 
              width="w-[80%]"
              height="h-[110px]"
              heading={cards[4].heading}
              text={cards[4].subtext}
              textSize="text-sm opacity-80"
              headingSize="text-base"
              className="font-[Satoshi]"
            />
            <div className="flex items-center">
              <h2 className="font-[Satoshi] text-white text-4xl sm:text-5xl font-bold">
                WHY IT <br />
                <span className="text-[#D3B6FB]">MATTERS</span>
              </h2>
            </div>
          </div>

          {/* Mobile layout - stacked cards with title first */}
          <div className="md:hidden">
            <div className="mb-8">
              <h2 className="font-[Satoshi] text-white text-4xl sm:text-5xl font-bold">
                WHY IT <br />
                <span className="text-[#D3B6FB]">MATTERS</span>
              </h2>
            </div>
            <div className="grid grid-cols-1 gap-4">
              {cards.map((card, index) => (
                <NormalCard
                  key={index}
                  width="w-full"
                  height="h-[110px]"
                  heading={card.heading}
                  text={card.subtext}
                  textSize="text-sm opacity-80"
                  headingSize="text-base"
                  className="font-[Satoshi]"
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyItMatters;