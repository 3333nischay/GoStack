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
          <h2 className="font-bold text-2xl sm:text-3xl mb-6 font-[Satoshi]">
            Ready To Take Control Of Your Data?
          </h2>
          
          <p className="text-sm sm:text-base mb-8 max-w-[600px] mx-auto font-[Satoshi]">
            Let's Build Data Pipelines That Don't Just Move Data, But Move Your Business Forward.
          </p>
          
          <div className="flex justify-center items-center gap-3 sm:gap-8">
            <NewButton 
              text="Book a Discovery Call" 
              size="sm"
              className="min-w-[140px] sm:min-w-[160px] md:min-w-[180px] py-2.5 whitespace-nowrap font-[Satoshi]"
              bgColor="#D3B6FB"
              textColor="black"
              onClick={openForm}
            />
            <NewButton 
              text="Download Our Brochure" 
              size="sm"
              className="min-w-[160px] sm:min-w-[180px] md:min-w-[200px] py-2.5 whitespace-nowrap font-[Satoshi]"
              bgColor="#D3B6FB"
              textColor="black"
            />
          </div>
        </div>
      </div>
    </section>
    <GetInTouchPopupForm isOpen={open} onClose={closeForm} buttonText="BOOK A CALL"/>
    </>
  );
};

export default CallToAction;