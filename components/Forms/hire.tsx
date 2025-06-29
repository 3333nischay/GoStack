"use client";

import React from 'react';
import NewButton from '../buttons/newButton';

interface HirePopupFormProps {
  isOpen: boolean;
  onClose: () => void;
}

const HirePopupForm: React.FC<HirePopupFormProps> = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <div 
      className="fixed inset-0 backdrop-blur-md bg-black/40 flex items-center justify-center z-50 px-4 overflow-y-auto"
      onClick={(e) => {
        // Close when clicking outside the form
        if (e.target === e.currentTarget) onClose();
      }}
    >
      <div className="bg-white rounded-2xl w-full max-w-2xl p-6 sm:p-8 font-[Satoshi] relative my-6 max-h-[90vh] overflow-y-auto">
        {/* Close button - Made more visible */}
        <button 
          onClick={onClose}
          className="absolute top-4 right-4 text-black bg-[#D3B6FB] hover:bg-[#c5a2fc] rounded-full p-2 z-10 shadow-md transition-colors duration-200"
          aria-label="Close form"
        >
          <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>
        
        {/* Header */}
        <h2 className="text-xl sm:text-2xl font-semibold text-center mb-2 pr-10">
          I'M A <span className="font-bold">COMPANY</span> | LOOKING TO <span className="font-bold">HIRE?</span>
        </h2>
        <p className="text-center text-gray-700 text-sm sm:text-base mb-6">
          <span className="font-semibold">Fill</span> in a few details and <br className="sm:hidden" />
          we'll get in <span className="font-semibold">touch</span> within <span className="font-bold">24 hours</span>.
        </p>

        {/* Form */}
        <form className="flex flex-col gap-4 text-sm sm:text-base" onSubmit={(e) => e.preventDefault()}>
          {['First name', 'Company Name', 'Email', 'What are you looking for?', 'Timeline'].map((label) => (
            <div key={label} className="flex flex-col">
              <label className="mb-1 font-medium text-black">{label}</label>
              <input
                type="text"
                placeholder=""
                className="bg-[#D3B6FB] text-black px-4 py-2 rounded-md outline-none placeholder:text-gray-600"
              />
            </div>
          ))}

          {/* Submit Button */}
          <div className="pt-2 pb-2">
            <NewButton text="LET'S TALK" fullWidth />
          </div>
        </form>
      </div>
    </div>
  );
};

export default HirePopupForm;