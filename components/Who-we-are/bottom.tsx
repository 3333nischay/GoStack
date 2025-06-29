"use client";
import React from "react";
import NewButton from "../buttons/newButton";
import { useState } from "react";
import GetInTouchPopupForm from "../Forms/getInTouch"; 
import { useRouter } from "next/navigation"; // Changed from "next/router" to "next/navigation"

const CallToActionSection = () => {
  const [isFormOpen, setIsFormOpen] = useState(false);
  const openGetInTouchForm = () => {
    setIsFormOpen(true);
  };
  const closeGetInTouchForm = () => {
    setIsFormOpen(false);
  };

  const router = useRouter();

  const career = () => {
    router.push("/careers");
  }

  return (
    <>
    <section className="bg-black text-[#D3B6FB] font-[Satoshi] w-full px-4 py-10 sm:py-12 md:py-16">
      <div className="max-w-4xl mx-auto text-center space-y-6 sm:space-y-8">
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-[#F0E6FF] leading-tight">
          Sound Like Your Kind Of People?
        </h2>

        <p className="text-base sm:text-lg md:text-xl font-medium leading-relaxed max-w-3xl mx-auto px-2">
          If You Believe In Scaling With Clarity, Designing With Empathy,
          And Solving Problems With Elegant, Efficient Systems — <br className="hidden sm:block" />
          We Should Talk.
        </p>

        {/* Buttons - Always in row layout */}
        <div className="flex flex-row justify-center items-center gap-4 sm:gap-12 md:gap-18 pt-2 sm:pt-4">
          <NewButton
            text="Click To Connect"
            textColor="black"
            size="sm"
            className="text-[9px] sm:text-sm md:text-base py-2 px-3 sm:px-4 md:px-6"
            onClick={openGetInTouchForm}
          />
          <NewButton
            text="Slide Into Our Talent Pool"
            textColor="black"
            size="sm"
            className="text-[9px] sm:text-sm md:text-base py-2 px-3 sm:px-4 md:px-6"
            onClick={career}
          />
        </div>
      </div>
    </section>
    <GetInTouchPopupForm
      isOpen={isFormOpen}
      onClose={closeGetInTouchForm}
      />
    </>
  );
};

export default CallToActionSection;