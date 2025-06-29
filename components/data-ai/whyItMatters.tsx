"use client";
import React from "react";
import NormalCard from "../cards/normalCard";

const WhyItMatters = () => {
  const cards = [
    {
      text: "Real-time, reliable data for faster decisions"
    },
    {
      text: "Reduced costs through automation and cloud migration"
    },
    {
      text: "Analytics-ready pipelines for BI and AI"
    },
    {
      text: "Scalable, cloud-native architecture by design"
    },
    {
      text: "Solid foundation for advanced AI use"
    }
  ];

  return (
    <section className="w-full bg-black py-16 px-4 sm:px-8 font-[Satoshi]">
      <div className="w-full flex justify-center">
        <div className="w-full max-w-[80%]">
          <div className="hidden md:grid md:grid-cols-3 gap-6 lg:gap-8">
            {/* First row */}
            {/* Text in first column */}
            <div className="flex items-center">
              <h2 className="font-[Satoshi] text-white text-4xl sm:text-5xl font-bold">
                WHY IT <br />
                <span className="text-[#D3B6FB]">MATTERS</span>
              </h2>
            </div>
            
            <NormalCard 
              width="w-[80%]"
              height="h-[110px]"
              text={cards[0].text}
              textSize="text-base"
              className="font-[Satoshi]"
            />
            <NormalCard 
              width="w-[80%]"
              height="h-[110px]"
              text={cards[1].text}
              textSize="text-base"
              className="font-[Satoshi]"
            />
            
            <div className="col-span-3 h-8 md:h-10 lg:h-0"></div>
            
            {/* Second row - 3 cards across all columns */}
            <NormalCard 
              width="w-[80%]"
              height="h-[110px]"
              text={cards[2].text}
              textSize="text-base"
              className="font-[Satoshi]"
            />
            <NormalCard 
              width="w-[80%]"
              height="h-[110px]"
              text={cards[3].text}
              textSize="text-base"
              className="font-[Satoshi]"
            />
            <NormalCard 
              width="w-[80%]"
              height="h-[110px]"
              text={cards[4].text}
              textSize="text-base"
              className="font-[Satoshi]"
            />
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
                  text={card.text}
                  textSize="text-base"
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