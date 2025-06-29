"use client";
import clsx from "clsx";
import React from "react";

export default function HoverButton({
  text = "Let's Fix It",
  width = "w-[230px]",
  height = "h-[64px]",
  className = "",
  fontSize = "text-base",
  bgColor = "bg-[#f2eaff]",
  shadowColor = "bg-violet-800",
  hoverBgColor = "bg-[#f2eaff]",
  borderColor = "border-violet-800",
  textColor = "text-black"
}) {
  return (
    <div
      className={clsx(
        "relative group cursor-pointer",
        width,
        height,
        className
      )}
    >
      {/* Default Button - will vanish on hover */}
      <div className="absolute inset-0 transition-opacity duration-300 group-hover:opacity-0">
        <button
          className={clsx(
            "relative inline-flex items-center justify-center w-full h-full px-6 py-2.5 font-mono font-normal border rounded-full",
            fontSize,
            bgColor,
            borderColor,
            textColor
          )}
        >
          {text}
        </button>
      </div>

      {/* Hover Button */}
      <div
        className={clsx(
          "absolute inset-0 opacity-0 group-hover:opacity-100",
          "transition-all duration-300 ease-in-out transform group-hover:translate-y-1.5 group-hover:scale-105 z-10"
        )}
      >
        <div className="flex justify-start items-end relative w-full h-full">
          <div className="relative inline-block w-full h-full">
            {/* Customizable shadow cap */}
            <span className={clsx("absolute -top-1.5 -right-2 w-full h-full rounded-full z-0", shadowColor)}></span>

            {/* Hover Foreground Button */}
            <button
              className={clsx(
                "relative inline-flex items-center justify-center w-full h-full px-6 py-2.5 font-mono font-normal border rounded-full z-10",
                fontSize,
                hoverBgColor,
                borderColor,
                textColor
              )}
            >
              {text}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}