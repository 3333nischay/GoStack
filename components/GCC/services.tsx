"use client";
import React from "react";
import NewButton from "../buttons/newButton";
import { useState } from "react";
import GetInTouchPopupForm from "../Forms/getInTouch";

const cards = [
  "GCC STRATEGY & SETUP",
  "BUILD-OPERATE-TRANSFER (BOT)",
  "AI-ENABLED OPERATIONS",
  "TALENT PODS DEPLOYMENT",
  "COMPLIANCE & GOVERNANCE",
  "CULTURE & ALIGNMENT",
];

const GccServicesSection = () => {
  const [isFormOpen, setIsFormOpen] = useState(false);
  const openGetInTouchForm = () => {
    setIsFormOpen(true);
  };
  const closeGetInTouchForm = () => {
    setIsFormOpen(false);
  };
  return (
    <>
    <section className="w-full px-6 py-16 text-center font-[Satoshi]">
      {/* Heading */}
      <h2 className="text-2xl sm:text-3xl md:text-5xl font-medium text-black">
        Let's{" "}
        <span className="text-[#9747FF] font-semibold">Build</span> Your{" "}
        <span className="text-[#9747FF] font-semibold">GCC</span> in India —{" "}
        <span className="text-[#9747FF] font-semibold">The Right Way</span>
      </h2>

      {/* Buttons container with different text for mobile/desktop */}
      <div className="flex flex-nowrap justify-center gap-2 md:gap-12 mt-6 pb-4 px-2">
        <NewButton 
          text={
            <span>
              <span className="inline sm:hidden">Schedule</span>
              <span className="hidden sm:inline">Schedule a Call</span>
            </span>
          }
          className="py-1 px-2 text-xs sm:text-sm md:text-base whitespace-nowrap md:py-2 md:px-4" 
          onClick={openGetInTouchForm}
        />
        <NewButton 
          text={
            <span>
              <span className="inline sm:hidden">Download</span>
              <span className="hidden sm:inline">Download Blueprint</span>
            </span>
          }
          className="py-1 px-2 text-xs sm:text-sm md:text-base whitespace-nowrap md:py-2 md:px-4" 
        />
      </div>

      {/* Subheading */}
      <h3 className="text-2xl sm:text-4xl font-semibold mt-12">
        <span className="text-[#9747FF]">GCC</span> Services Summary
      </h3>

      {/* Cards Grid - now using 75% of the page width with increased height */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 mt-10 w-full sm:w-[90%] md:w-[75%] mx-auto">
        {cards.map((card, index) => (
          <div
            key={index}
            className="bg-[#2B2B2B] text-[#D6C9FD] text-center p-6 rounded-xl text-base sm:text-lg font-medium min-h-[160px] flex items-center justify-center"
          >
            {card}
          </div>
        ))}
      </div>
    </section>
    <GetInTouchPopupForm
      isOpen={isFormOpen}
      onClose={closeGetInTouchForm} 
      buttonText="BOOK A CALL"
      />
    </>
  );
};

export default GccServicesSection;