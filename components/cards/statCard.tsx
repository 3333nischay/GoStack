import React from "react";

interface StatCardProps {
  width: string;
  height: string;
  headingText: string;
  subText: string;
  backgroundColor?: string;
  headingColor?: string;
  subTextColor?: string;
  headingClassName?: string;
  subTextClassName?: string;
  textAlign?: string;
}

const StatCard: React.FC<StatCardProps> = ({
  width,
  height,
  headingText,
  subText,
  backgroundColor = "#2A2A2A",
  headingColor = "#F0E6FF",
  subTextColor = "#F0E6FF",
  headingClassName = "",
  subTextClassName = "",
  textAlign = "text-center",
}) => {
  const isSmall = height.includes("h-20") || height.includes("h-24");

  return (
    <div
      className={`rounded-xl flex flex-col justify-center px-4 py-2 transition-all duration-300 hover:shadow-[6px_6px_10px_rgba(151,71,255,0.8)] group ${width} ${height}`}
      style={{ backgroundColor }}
    >
      <h3
        className={`font-[Satoshi] font-bold transition-colors duration-300 ${
          isSmall ? "text-xl sm:text-2xl" : "text-3xl sm:text-4xl"
        } ${textAlign} ${headingClassName}`}
        style={{ color: headingColor }}
      >
        <span className="group-hover:text-[rgba(151,71,255,1)]">{headingText}</span>
      </h3>
      <p
        className={`font-[Satoshi] font-normal mt-4 sm:mt-6 transition-colors duration-300 ${
          isSmall ? "text-xs sm:text-sm" : "text-sm sm:text-base"
        } ${textAlign} ${subTextClassName}`}
        style={{ color: subTextColor }}
      >
        <span className="group-hover:text-[rgba(151,71,255,1)]">{subText}</span>
      </p>
    </div>
  );
};

export default StatCard;