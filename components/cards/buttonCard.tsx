"use client";

import React from "react";
import NewButton from "../buttons/newButton";

interface ButtonCardProps {
  heading: string;
  buttonText: string;
  onClick?: () => void;
  className?: string;
  headingClassName?: string;
  buttonClassName?: string;
  cardWidth?: string;
  cardHeight?: string;
  buttonTextSize?: string;
  headingSize?: string;
  gapSize?: string;
  buttonWidth?: string;
  buttonHeight?: string;
}

const ButtonCard: React.FC<ButtonCardProps> = ({
  heading,
  buttonText,
  onClick,
  className = "",
  headingClassName = "",
  buttonClassName = "",
  cardWidth = "w-full",
  cardHeight = "h-auto",
  buttonTextSize = "text-sm",
  headingSize = "text-lg",
  gapSize = "mb-6",
  buttonWidth = "w-full",
  buttonHeight = "h-12",
}) => {
  return (
    <div className={`rounded-xl flex flex-col justify-center items-center text-center px-4 sm:px-6 py-6 sm:py-8 bg-[#2A2A2A] transition-shadow hover:shadow-[6px_6px_10px_rgba(151,71,255,0.8)] ${cardWidth} ${cardHeight} ${className}`}>
      <h3 className={`text-[#F0E6FF] font-semibold font-[Satoshi] ${headingSize} ${gapSize} ${headingClassName}`}>
        {heading}
      </h3>
      <NewButton 
        text={buttonText}
        onClick={onClick}
        bgColor="#CAADF1"
        textColor="black"
        size="sm"
        className={`hover:bg-[#9747FF] hover:text-white font-[Satoshi] ${buttonWidth} ${buttonHeight} ${buttonTextSize} ${buttonClassName}`}
      />
    </div>
  );
};

export default ButtonCard;