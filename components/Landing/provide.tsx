"use client";

import React from "react";
import { useState } from "react";
import ButtonCard from "../cards/buttonCard";
import HirePopupForm from "../Forms/hire";
import { useRouter } from "next/navigation";

const CardSection: React.FC = () => {
  const [isFormOpen, setIsFormOpen] = useState(false);
  const router = useRouter();

  const openForm = () => {
    setIsFormOpen(true);
  };

  const closeForm = () => {
    setIsFormOpen(false);
  };

  const navigateToCareers = () => {
    router.push('/careers');
  };

  return (
    <>
    <section className="w-full px-4 py-12 sm:py-16 md:py-20 bg-white text-black text-center font-[Satoshi]">
      <h2 className="text-2xl sm:text-3xl md:text-4xl font-[400] mb-10 font-[Satoshi]">
        Think of us as your{" "}
        <span className="text-[#9747FF] font-semibold font-[Satoshi]">extended agile team</span> –<br />
        powered by <span className="text-[#9747FF] font-semibold font-[Satoshi]">smart tech</span> and even{" "}
        <span className="text-[#9747FF] font-semibold font-[Satoshi]">smarter people</span>.
      </h2>

      <div className="mt-10 grid grid-cols-1 md:grid-cols-2 gap-8 sm:gap-12 lg:gap-16 w-[90%] sm:w-[85%] md:w-[90%] lg:w-[80%] mx-auto font-[Satoshi]">
        <ButtonCard
          heading="Looking For Elite Engineering Firepower?"
          buttonText="Start Here"
          onClick={openForm}
          className="h-auto min-h-[14rem] sm:min-h-[16rem] md:min-h-[18rem] font-[Satoshi] hover:shadow-[10px_10px_5px_rgba(202,173,241,0.9)]"
          headingClassName="text-lg sm:text-xl md:text-2xl lg:text-3xl mb-4 sm:mb-6 md:mb-8 font-[Satoshi]"
          buttonClassName="text-xs sm:text-sm md:text-base px-3 py-1.5 sm:px-4 sm:py-2 md:px-5 md:py-2.5 font-[Satoshi]"
        />
        {/* Link to Careers page */}
        <ButtonCard
          heading="An Engineer Into Clean Code, And Smart Builds?"
          buttonText="Slide Into The Talent Pool"
          onClick={navigateToCareers}
          className="h-auto min-h-[14rem] sm:min-h-[16rem] md:min-h-[18rem] font-[Satoshi] hover:shadow-[10px_10px_5px_rgba(202,173,241,0.9)]"
          headingClassName="text-lg sm:text-xl md:text-2xl lg:text-3xl mb-4 sm:mb-6 md:mb-8 font-[Satoshi]"
          buttonClassName="text-xs sm:text-sm md:text-base px-3 py-1.5 sm:px-4 sm:py-2 md:px-5 md:py-2.5 font-[Satoshi]"
        />
      </div>
    </section>
    
    <HirePopupForm isOpen={isFormOpen} onClose={closeForm} />
    </>
  );
};

export default CardSection;