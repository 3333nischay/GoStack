"use client";
import React from "react";
import ButtonCard from "../cards/buttonCard";
import { useState } from "react";
import GetInTouchPopupForm from "../Forms/getInTouch";
import { useRouter } from "next/navigation"; 

const TopComponent: React.FC = () => {
  const [isFormOpen, setIsFormOpen] = useState(false);
  const openGetInTouchForm = () => {
    setIsFormOpen(true);
  }
  const closeGetInTouchForm = () => {
    setIsFormOpen(false);
  };
  const router = useRouter();
  const career = () => {
    router.push("/careers");
  }
  return (
    <>
    <div
      className="relative w-full min-h-[150vh] sm:min-h-[165vh] bg-cover bg-center bg-no-repeat flex flex-col items-center justify-center px-2 sm:px-8 py-8 sm:py-16 font-[Satoshi]"
      style={{ backgroundImage: `url('/GCC.png')` }}
    >
      <div className="text-center text-white mb-8 sm:mb-12 md:mb-24 md:mt-32 font-[Satoshi]">
        <h4 className="text-xs sm:text-sm md:text-base text-[#D3B6FB] tracking-widest font-medium font-[Satoshi]">STACK</h4>
        <h1 className="text-2xl sm:text-4xl md:text-6xl font-bold text-[#F0E6FF] mt-1 sm:mt-2 font-[Satoshi]">GCC Hub India</h1>
      </div>

      <div className="w-full flex flex-row items-center justify-center gap-4 xs:gap-6 sm:gap-10 md:gap-16 px-1 xs:px-2 sm:px-4 font-[Satoshi]">
        <div className="w-[150px] xs:w-[180px] sm:w-[220px] md:w-[380px] font-[Satoshi]">
          <ButtonCard
            heading="Looking To Set Up Or Scale A GCC In India?"
            buttonText="Book A Startegic Consult"
            buttonWidth="w-fit"
            buttonHeight="h-8 sm:h-14"
            buttonTextSize="text-[9px] xs:text-[10px] sm:text-xs md:text-sm"
            headingClassName="text-white text-[10px] xs:text-xs sm:text-sm md:text-base font-[Satoshi]"
            buttonClassName="font-[Satoshi]"
            cardWidth="w-full"
            className="py-2 sm:py-3 shadow-[#CAADF1] font-[Satoshi]"
            onClick={openGetInTouchForm}
          />
        </div>
        <div className="w-[150px] xs:w-[180px] sm:w-[220px] md:w-[380px] font-[Satoshi]">
          <ButtonCard
            heading="India-Based Talent Ready For Global Brands?"
            buttonText="Join Talent Network"
            buttonWidth="w-fit"
            buttonHeight="h-8 sm:h-14"
            buttonTextSize="text-[9px] xs:text-[10px] sm:text-xs md:text-sm"
            headingClassName="text-white text-[10px] xs:text-xs sm:text-sm md:text-base font-[Satoshi]"
            buttonClassName="font-[Satoshi]"
            cardWidth="w-full"
            className="py-2 sm:py-3 shadow-[#CAADF1] font-[Satoshi]"
            onClick={career}
          />
        </div>
      </div>
    </div>
    <GetInTouchPopupForm
      isOpen={isFormOpen} 
      onClose={closeGetInTouchForm}
      buttonText="Book a Strategic Consult"
    />
    </>
  );
};

export default TopComponent;