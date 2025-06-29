import React from "react";
import StatCard from "../cards/statCard";
import DualTextCard from "../cards/dualtextCard";

const ImpactStats: React.FC = () => {
  return (
    <section className="w-full px-4 sm:px-6 md:px-12 py-10 bg-black font-[Satoshi]">
      <div className="w-full md:w-[70%] lg:w-[60%] xl:w-[50%] mx-auto mb-10 font-[Satoshi]">
        <h2 className="text-4xl sm:text-4xl md:text-5xl font-[Satoshi] font-semibold mt-10 mb-20 text-center">
          <span className="text-[#D3B6FB] font-[Satoshi]">Impact</span>{" "}
          <span className="text-white font-[Satoshi]">Stats</span>
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-y-6 md:gap-y-8 gap-x-4 sm:gap-x-6 md:gap-x-10 lg:gap-x-16 xl:gap-x-24 font-[Satoshi]">
          <div className="w-full font-[Satoshi]">
            <StatCard
              width="w-full"
              height="h-32 sm:h-36 md:h-40"
              headingText="$250M+"
              subText="in client revenue unlocked through AI & automation"
              headingClassName="text-left font-bold font-[Satoshi]"
              subTextClassName="text-left mt-2 font-[Satoshi]"
            />
          </div>
          <div className="w-full font-[Satoshi]">
            <StatCard
              width="w-full"
              height="h-32 sm:h-36 md:h-40"
              headingText="72%"
              subText="faster time-to-market for data-led MVPs"
              headingClassName="text-left font-bold font-[Satoshi]"
              subTextClassName="text-left mt-2 font-[Satoshi]"
            />
          </div>
          <div className="w-full font-[Satoshi]">
            <StatCard
              width="w-full"
              height="h-32 sm:h-36 md:h-40"
              headingText="100%"
              subText="clean, scalable systems shipped"
              headingClassName="text-left font-bold font-[Satoshi]"
              subTextClassName="text-left mt-2 font-[Satoshi]"
            />
          </div>
          <div className="w-full font-[Satoshi]">
            <StatCard
              width="w-full"
              height="h-32 sm:h-36 md:h-40"
              headingText="96%"
              subText="of Stack clients expand scope within 6 months"
              headingClassName="text-left font-bold font-[Satoshi]"
              subTextClassName="text-left mt-2 font-[Satoshi]"
            />
          </div>
          {/* Bottom full-width dual-text card */}
          <div className="col-span-1 sm:col-span-2 mt-4 font-[Satoshi]">
            <DualTextCard
              leftTextLine1="3 Continents +"
              leftTextLine2="100+ Engineers."
              rightText="1 tightly synced team"
              textAlign="text-left"
              height="h-24 sm:h-28 md:h-32"
              className="py-4 font-[Satoshi]"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default ImpactStats;