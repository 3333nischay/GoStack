"use client";
import React from "react";
import NewButton from "../buttons/newButton";
import { useState } from "react";
import GetInTouchPopupForm from "../Forms/getInTouch";

const AiNativeIndia: React.FC = () => {
  const [isFormOpen, setIsFormOpen] = useState(false);
  const openGetInTouchForm = () => {
    setIsFormOpen(true);
  }
  const closeGetInTouchForm = () => {
    setIsFormOpen(false);
  };
  return (
    <>
    <div className="w-full min-h-screen relative overflow-hidden flex items-center justify-center text-white font-[Satoshi]">
       <div className="absolute inset-0 bg-[linear-gradient(to_bottom,#4311A7_0%,#2D0B70_20%,black_35%,black_65%,#2D0B70_80%,#4311A7_100%)] opacity-90"></div>
      <div className="relative z-10 px-6 py-32 text-center max-w-6xl md:mt-24">
        <div className="-mb-28 md:-mt-80 md:-mb-72 flex justify-center">
          <img 
            src="/text-unscreen.gif" 
            alt="India-Powered. AI-Native." 
            className="w-full max-w-[740%] xs:max-w-[600%] sm:max-w-[560%] md:max-w-[520%] lg:max-w-[480%] h-auto 
                      my-16 xs:my-24 sm:my-32 md:my-40 lg:my-48"
          />
        </div>
        
        <h2 className="text-xl sm:text-2xl md:text-3xl font-[400] text-white mb-16">
          BUILD YOUR <span className="font-bold">GLOBAL CAPABILITY CENTER</span> WITH <span className="font-bold">STACK</span>
        </h2>
        
        <p className="text-lg sm:text-xl md:text-2xl text-white leading-relaxed max-w-3xl mx-auto mb-14">
          From Setup To Scale, Stack Helps UK & European Companies Build<br/> Intelligent, Future-Ready GCCs In India — Fast, Flexible, And AI-<br/>Native By Design.
        </p>
        <div className="flex flex-row gap-8 sm:gap-16 md:gap-20 justify-center">
          <NewButton 
            text="Start Your GCC Journey" 
            size="lg"
            className="w-auto text-xs sm:text-sm md:text-lg"
            onClick={openGetInTouchForm}
          />
        </div>
      </div>
    </div>
    <GetInTouchPopupForm
      isOpen={isFormOpen}
      onClose={closeGetInTouchForm} 
      buttonText="Start Your GCC journey"
      />
    </>
  );
};

export default AiNativeIndia;