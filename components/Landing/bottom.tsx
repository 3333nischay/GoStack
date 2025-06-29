'use client';

import React from 'react';
import { useState } from 'react';
import NewButton from '../buttons/newButton';
import GetInTouchPopupForm from "../Forms/getInTouch";

const FixBottlenecks: React.FC = () => {
  const [isFormOpen, setIsFormOpen] = useState(false);

  const openForm = () => {
    setIsFormOpen(true);
  }

  const closeForm = () => {
    setIsFormOpen(false);
  }
  return (
    <>
    <section className="w-full min-h-[80vh] sm:min-h-[90vh] md:min-h-screen flex items-center justify-center bg-black text-white px-4 py-8 sm:py-12 md:py-16 font-[Satoshi]">
      <div className="max-w-3xl text-center space-y-4 sm:space-y-5 md:space-y-6 lg:space-y-8 font-[Satoshi]">
        {/* Heading */}
        <h1 className="text-xl sm:text-3xl md:text-4xl lg:text-4xl font-light leading-snug text-white font-[Satoshi]">
          Let's fix the <span className="font-semibold text-[#D3B6FB] font-[Satoshi]">bottlenecks</span> in your <span className="font-semibold text-[#D3B6FB] font-[Satoshi]">business.</span>
        </h1>

        {/* Subheading */}
        <p className="text-sm sm:text-base md:text-lg lg:text-xl font-medium text-white font-[Satoshi] py-2 sm:py-3 leading-loose">
          We <span className="text-[#CAADF1] font-semibold font-[Satoshi]">embed</span>. We <span className="text-[#CAADF1] font-semibold font-[Satoshi]">build</span>. We ship <span className="text-[#CAADF1] font-semibold font-[Satoshi]">fast</span>.
          <br />
          But most importantly, we care about outcomes –<br className="hidden sm:inline" />
          not just <span className="text-[#D3B6FB] font-semibold font-[Satoshi]">deliverables</span>.
        </p>

        <div className="pt-3 sm:pt-4 md:pt-6 lg:pt-8 font-[Satoshi]">
          <NewButton
            text="Book A Discovery Call"
            bgColor="#D3B6FB"
            textColor="#000000"
            size="sm"
            className="text-xs sm:text-sm md:text-base lg:text-lg px-3 sm:px-4 md:px-6 py-1.5 sm:py-2 md:py-3 font-medium font-[Satoshi]"
            onClick={openForm}
          />
        </div>
      </div>
    </section>
    <GetInTouchPopupForm
      isOpen={isFormOpen}
      onClose={closeForm} 
      buttonText='BOOK A CALL'
      />
    </>
  );
};

export default FixBottlenecks;