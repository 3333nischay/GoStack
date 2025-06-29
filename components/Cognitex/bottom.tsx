"use client";
import React from "react";
import { useState} from "react";
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
    <section className="w-full pt-8 px-4 sm:px-6 py-12 bg-black flex flex-col items-center text-center gap-8">
      {/* Heading */}
      <h2 className="text-[1.75rem] sm:text-6xl font-bold font-[Satoshi] text-[#CAADF1] leading-tight">
        Ready to Make Your Documents<br className="hidden sm:block" /> Work for You?
      </h2>

      {/* Subtext */}
      <p className="text-sm sm:text-3xl text-white font-[Satoshi]">
        Turn your document clutter into clarity.
      </p>

      {/* Buttons - Increased size and with custom className for length */}
      {/*calendly integration*/}
      <div className="flex flex-col sm:flex-row gap-4 sm:gap-40 mt-4 mb-24">
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
    <GetInTouchPopupForm isOpen={open} onClose={closeForm} buttonText="Talk to an Expert" />
    </>
  );
};

export default CallToAction;