"use client";
import React, { useState, useEffect } from "react";
import IconFlipCard from "../cards/iconFlipping";

type TextAlignment = "top" | "center" | "bottom";

interface UseCase {
  title: string;
  backText: string;
  icon: string;
  iconPosition: string;
  textAlignment?: TextAlignment;
  iconSize?: number;
}

const useCases: UseCase[] = [
  {
    title: "BFSI",
    backText: "Automate KYC, loan forms, and compliance document processing",
    icon: "/doc.png",
    iconPosition: "top-4 right-4",
    textAlignment: "center"
  },
  {
    title: "RETAIL",
    backText: "Streamline invoice processing and product cataloging",
    icon: "/hut.png",
    iconPosition: "top-4 right-4",
    textAlignment: "center"
  },
  {
    title: "HEALTHCARE",
    backText: "Extract insights from diagnostics and patient forms",
    icon: "/medic.png",
    iconPosition: "top-4 right-4",
    textAlignment: "center",
  },
  {
    title: "EDUCATION",
    backText: "Digitize records and auto-grade assignments",
    icon: "/hat.png",
    iconPosition: "top-4 right-4",
    textAlignment: "center"
  },
  {
    title: "UTILITIES",
    backText: "Parse regulatory and customer communication at scale",
    icon: "/nutPeople.png",
    iconPosition: "top-4 right-4",
    textAlignment: "center",
  },
  {
    title: "PUBLIC SECTOR",
    backText: "Process regional-language governance and citizen documents",
    icon: "/idcard.png",
    iconPosition: "top-4 right-4",
    textAlignment: "center"
  },
];

const IndustryUseCases: React.FC = () => {
  const [isMobile, setIsMobile] = useState(false);
  
  useEffect(() => {
    setIsMobile(window.innerWidth < 640);
    
    const handleResize = () => {
      setIsMobile(window.innerWidth < 640);
    };
    
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <section className="py-12 sm:py-16 md:py-20 px-4 sm:px-6 md:px-10 bg-white text-center font-[Satoshi]">
      <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-semibold mb-4 sm:mb-6">
        Industry Use Cases
      </h2>
      <p className="text-base sm:text-lg md:text-lg lg:text-xl mb-10 sm:mb-16 text-gray-600 max-w-2xl mx-auto">
        Built for sectors where document overload hampers productivity:
      </p>
      <div className="w-full sm:w-[95%] md:w-[90%] lg:w-4/5 mx-auto">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 sm:gap-6 md:gap-8 justify-items-center">
          {useCases.map((useCase, idx) => (
            <IconFlipCard
              key={idx}
              frontText={useCase.title}
              backText={useCase.backText}
              iconSrc={useCase.icon}
              iconPosition={useCase.iconPosition}
              iconSize={useCase.iconSize || (isMobile ? 40 : 50)}
              textAlignment={useCase.textAlignment || "center"}
              className="shadow-lg mb-4 sm:mb-0"
              width="w-full"
              height="h-[160px] sm:h-[180px]"
              textSize="text-[1.25rem] sm:text-[1.5rem] font-bold"
              backTextSize="text-[1rem] sm:text-[1.2rem]"
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default IndustryUseCases;