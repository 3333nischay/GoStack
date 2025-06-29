"use client";
import React from "react";
import { useState } from "react";
import NewButton from "../buttons/newButton";
import GetInTouchPopupForm from "../Forms/getInTouch";

const CallToAction = () => {
  const [open, setOpen] = useState(false);
  const openForm = () => {
    setOpen(true);
  };
  const closeForm = () => {
    setOpen(false);
  };
  return (
    <>
    <section className="w-full bg-white py-14 px-4 sm:px-6 font-[Satoshi]">
      <div className="w-full flex justify-center">
        <div className="w-full max-w-[90%] sm:max-w-[85%] md:max-w-[80%] text-center">
          <h2 className="font-bold text-3xl sm:text-4xl md:text-5xl mb-8 font-[Satoshi]">
            Ready To Get Started?
          </h2>
          
          <p className="text-lg sm:text-xl md:text-2xl mb-10 max-w-[600px] mx-auto font-[Satoshi]">
            We Build Analytics That Deliver.
          </p>
          
          <div className="flex justify-center items-center gap-2 sm:gap-4 md:gap-8 overflow-x-auto pb-4 -mx-4 px-4 w-[calc(100%+2rem)]">
            <NewButton 
              text="Book A Discovery Call" 
              size="sm"
              className="min-w-min px-3 sm:px-4 py-2.5 whitespace-nowrap font-[Satoshi] flex-shrink-0"
              bgColor="#D3B6FB"
              textColor="black"
            />
            <NewButton 
              text="Download Our Brochure" 
              size="sm"
              className="min-w-min px-3 sm:px-4 py-2.5 whitespace-nowrap font-[Satoshi] flex-shrink-0"
              bgColor="#D3B6FB"
              textColor="black"
              onClick={openForm}
            />
          </div>
        </div>
      </div>
    </section>
    <GetInTouchPopupForm isOpen={open} onClose={closeForm} />
    </>
  );
};

export default CallToAction;