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
    <section className="w-full bg-white py-20 px-4 sm:px-6 font-[Satoshi]">
      <div className="w-full flex justify-center">
        <div className="w-full max-w-[90%] sm:max-w-[85%] md:max-w-[80%] text-center">
          <h2 className="font-bold text-3xl sm:text-4xl md:text-5xl mb-10 font-[Satoshi]">
            Ready To Launch AI That Works?
          </h2>
          
          <p className="text-lg sm:text-2xl md:text-3xl mb-12 max-w-[700px] mx-auto font-[Satoshi]">
            Let's Turn Your Data Into Business Results.
          </p>
          
          <div className="flex flex-col sm:flex-row justify-center items-center gap-4 sm:gap-8">
            <NewButton 
              text="Book A Strategy Session" 
              size="md"
              className="min-w-[220px] sm:min-w-[240px] py-3 whitespace-nowrap font-[Satoshi]"
              bgColor="#D3B6FB"
              textColor="black"
            />
            <NewButton 
              text="Download Use Case Brochure" 
              size="md"
              className="min-w-[220px] sm:min-w-[240px] py-3 whitespace-nowrap font-[Satoshi]"
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