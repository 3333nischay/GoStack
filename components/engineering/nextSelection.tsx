"use client";

import React from "react";
import NewButton from "../buttons/newButton";
import { useState } from "react";
import GetInTouchPopupForm from "../Forms/getInTouch";

const NextStepSection = () => {
  const [isFormOpen, setIsFormOpen] = useState(false);
  const handleOpenForm = () => {
    setIsFormOpen(true);
  }
  const handleCloseForm = () => {
    setIsFormOpen(false);
  };
  return (
    <>
    <section className="bg-black text-white font-[Satoshi] px-4 py-20 gap-40 text-center">
      <h2 className="text-2xl sm:text-6xl font-semibold text-[#B49BFF] mb-6">
        Your Next Step
      </h2>
      <p className="text-sm sm:text-3xl text-white mb-8">
        Whether you're early-stage or ready to scale, we’ll help you:
      </p>

      <div className="flex flex-wrap justify-center gap-4 sm:gap-6">
        <NewButton
          text="Book A Discovery Session"
          size="md"
          className="min-w-[220px]"
          onClick={handleOpenForm}
        />
      </div>
    </section>
    <GetInTouchPopupForm
      isOpen={isFormOpen}
      onClose={handleCloseForm}
      buttonText="BOOK A CALL" />
    </>
  );
};

export default NextStepSection;
