"use client";

import React, { useState } from 'react';
import NewButton from '../buttons/newButton';
import GetInTouchPopupForm from '../Forms/getInTouch';
import { useRouter } from 'next/navigation';

const TalentCompanyCards: React.FC = () => {
  const [isGetInTouchFormOpen, setIsGetInTouchFormOpen] = useState(false);
  const [formButtonText, setFormButtonText] = useState('BOOK A CALL');
  const router = useRouter();
  
  const openGetInTouchForm = (buttonType: string) => {
    setFormButtonText(buttonType);
    setIsGetInTouchFormOpen(true);
  };

  const closeGetInTouchForm = () => {
    setIsGetInTouchFormOpen(false);
  };
  
  const career = () => {
    router.push('/careers');
  };

  return (
    <div className="flex flex-col md:flex-row md:gap-20 lg:gap-28 p-6 bg-black min-h-screen justify-center items-center font-[Satoshi]">
      {/* Talent Card */}
      <div className="bg-[#1c1c1e] text-white rounded-2xl p-6 w-full max-w-sm border border-[#2e2e2e] shadow-md font-[Satoshi] h-[480px] sm:h-[500px] md:h-[450px] lg:h-[420px] flex flex-col mb-8 md:mb-0">
        <div className="mb-6">
          <h3 className="text-sm font-semibold uppercase text-gray-400 mb-2">I'm Talented</h3>
          <h2 className="text-2xl lg:text-3xl font-bold mb-16">Join Our Pool</h2>
          <NewButton onClick={career} text="See Current Openings At Stack" textColor='#420492' fullWidth />
          <p className="text-xl text-gray-400 mb-auto mt-6">
          No open role that fits? Drop your CV and we'll keep you in mind.
        </p>
        </div>

        <div className="flex flex-col gap-3 mt-6">
          <NewButton 
            text="Upload CV"
            className='py-3 sm:py-6' 
            fullWidth 
            onClick={() => openGetInTouchForm('upload')}
          />
        </div>
      </div>

      {/* Company Card */}
      <div className="bg-[#1c1c1e] text-white rounded-2xl p-6 w-full max-w-sm border border-[#2e2e2e] shadow-md font-[Satoshi] h-[480px] sm:h-[500px] md:h-[450px] lg:h-[420px] flex flex-col">
        <div className="mb-6">
          <h3 className="text-sm font-semibold uppercase text-gray-400 mb-2">I'm a Company</h3>
          <h2 className="text-2xl lg:text-3xl font-bold mb-4">Looking to Hire?</h2>
        </div>
        
        <div className="mb-8">
          <p className="text-md text-gray-400 mb-4">
            Let's find you the right talent — fast, smart, and on point.
          </p>
          <p className="text-md text-gray-400">
            Fill in a few details and we'll get in touch within 24 hours.
          </p>
        </div>

        <div className="flex flex-col gap-3 mt-auto">
          <NewButton 
            text="Book A Discovery Call" 
            onClick={() => openGetInTouchForm('Book A Discovery Call')}
            fullWidth 
            className="py-3 sm:py-8"
          />
        </div>
      </div>
      
      <GetInTouchPopupForm 
        isOpen={isGetInTouchFormOpen} 
        onClose={closeGetInTouchForm} 
        buttonText={formButtonText}
      />
    </div>
  );
};

export default TalentCompanyCards;