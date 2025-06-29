"use client";
import { useState } from "react";
import React from "react";
import NewButton from "../buttons/newButton";
import GetInTouchPopupForm from "../Forms/getInTouch";

const CallToAction: React.FC = () => {
  const [open, setOpen] = useState(false);
  
    const openForm = () =>{
      setOpen(true);
    }
    const closeForm = () =>{
      setOpen(false);
    }
  return (
    <>
    <section className="w-full pt-8 px-4 sm:px-6 py-12 bg-white flex flex-col items-center text-center gap-8">
      <h2 className="text-[1.75rem] sm:text-6xl font-bold font-[Satoshi] text-[#9747FF] leading-tight">
        Ready to Make Your ML<br className="hidden sm:block" /> Effortless?
      </h2>

      <div className="text-sm sm:text-3xl text-black font-[Satoshi] font-[400]">
        Skip to the MLOps. <span className="font-[800]">Start making impact.</span>
      </div>
      {/* calendly integration */}
      <div className="flex flex-col sm:flex-row gap-4 sm:gap-40 mt-4 mb-2">
        <NewButton 
          text="Book A Demo" 
          bgColor="#CAADF1" 
          textColor="black" 
          size="lg"
          className="w-64 sm:w-72"
        />
        <NewButton 
          text="Talk To An Expert" 
          bgColor="#CAADF1" 
          textColor="black" 
          size="lg"
          className="w-64 sm:w-96"
          onClick={openForm}
        />
      </div>
    </section>
    <GetInTouchPopupForm isOpen={open} onClose={closeForm} buttonText="Talk to an Expert"/>
    </>
  );
};

export default CallToAction;