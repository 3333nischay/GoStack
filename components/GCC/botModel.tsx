import React from "react";

const GccSection: React.FC = () => {
  return (
    <div className="w-full px-4 py-10 md:py-16 font-[Satoshi] bg-white text-black text-center overflow-hidden">
    <h2 className="text-2xl md:text-5xl font-semibold mb-6 whitespace-nowrap -ml-18 md:-ml-20">
      END-TO-END GCC'S | END-TO-END GCC'S | END-TO-END GCC'S
    </h2>

      <h3 className="text-3xl md:text-6xl font-bold mt-12 mb-10">
        BUILT ON YOUR DNA.
      </h3>

      <p className="max-w-4xl mx-auto text-lg md:text-2xl text-gray-700 mb-16">
        We establish and scale your Global Capability Center (GCC) in India under a proven 
        Build-Operate-Transfer (BOT) model — fully managed until you're ready to take over.
      </p>

      {/* Cards - sizes unchanged */}
        <div className="flex flex-col md:flex-row justify-center items-center gap-8 md:gap-12 mb-16">
          <div className="bg-black text-white px-8 py-8 rounded-md w-full md:w-80 shadow-lg">
            <h4 className="text-xl font-semibold mb-3">BUILD</h4>
            <p className="text-base text-[#CAADF1]">Site selection, talent acquisition, legal & infra setup</p>
          </div>
        
          <div className="bg-black text-white px-8 py-8 rounded-md w-full md:w-80 shadow-lg">
            <h4 className="text-xl font-semibold mb-3">OPERATE</h4>
            <p className="text-base text-[#CAADF1]">Day-to-day operations, delivery, compliance, performance</p>
          </div>
        
          <div className="bg-black text-white px-8 py-8 rounded-md w-full md:w-80 shadow-lg">
            <h4 className="text-xl font-semibold mb-3">TRANSFER</h4>
            <p className="text-base text-[#CAADF1]">Seamless handover with embedded systems, teams, and IP</p>
          </div>
        </div>

      <p className="text-xl md:text-3xl font-semibold leading-relaxed">
        CUT 50% IN DELIVERY COSTS WHILE DOUBLING ROADMAP SPEED — <br />
        <span className="underline font-bold">WITHOUT LOSING CONTROL.</span>
      </p>
    </div>
  );
};

export default GccSection;