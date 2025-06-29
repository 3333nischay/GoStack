"use client";
import React from "react";
import clsx from "clsx";

interface FancyButtonProps {
  text?: string;
  width?: string;
  height?: string;
  fontSize?: string;
  borderColor?: string;
  textColor?: string;
  className?: string;
  onClick?: () => void;
  hoverBgColor?: string;
  hoverTextColor?: string;
  hoverBorderColor?: string;
  hoverSideColor?: string;
}

export default function FancyButton({
  text = "See What We Do",
  width = "w-[200px]",
  height = "h-[60px]",
  fontSize = "text-base",
  borderColor = "#6545D4",
  textColor = "#6545D4",
  className = "",
  onClick,
  hoverBgColor = "#6545D4",
  hoverTextColor = "#FFFFFF",
  hoverBorderColor = "#000000",
  hoverSideColor = "#2b0080",
}: FancyButtonProps) {
  return (
    <div
      className={clsx(
        "relative group cursor-pointer",
        width,
        height,
        className
      )}
      onClick={onClick}
    >
      {/* Default Flat Button */}
      <div
        className={clsx(
          "absolute inset-0 font-mono flex items-center justify-center z-20 transition-all duration-300 ease-in-out group-hover:opacity-0",
          fontSize
        )}
        style={{ border: `1px solid ${borderColor}`, color: textColor }}
      >
        {text}
      </div>

      {/* Fancy 3D Hover Button */}
      <div
        className={clsx(
          "absolute inset-0 opacity-0 group-hover:opacity-100",
          "transition-all duration-300 ease-in-out transform group-hover:translate-y-1.5 z-10"
        )}
      >
        {/* Front Face */}
        <div
  className={clsx(
    "absolute inset-0 font-mono flex items-center justify-center",
    fontSize
  )}
  style={{ 
    borderWidth: "0 0 1px 1px",  // Only bottom and left borders
    borderStyle: "solid",
    borderColor: hoverBorderColor, 
    backgroundColor: hoverBgColor, 
    color: hoverTextColor 
  }}
>
  {text}
</div>

        {/* Top Face */}
        <div 
          className="absolute -top-[8px] left-0 w-full h-[8px] border transform -skew-x-[45deg] origin-bottom-left" 
          style={{ 
            borderColor: hoverBorderColor, 
            backgroundColor: hoverSideColor 
          }}
        />

        {/* Right Face */}
        <div 
          className="absolute top-0 -right-[8px] h-full w-[8px] border transform -skew-y-[45deg] origin-top-left" 
          style={{ 
            borderColor: hoverBorderColor, 
            backgroundColor: hoverSideColor 
          }}
        />
      </div>
    </div>
  );
}