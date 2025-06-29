import React from "react";

interface DualTextCardProps {
  leftTextLine1?: string;
  leftTextLine2?: string;
  rightText: string;
  bgColor?: string;
  textColor?: string;
  height?: string;
  className?: string;
  textAlign?: string;
}

const DualTextCard: React.FC<DualTextCardProps> = ({
  leftTextLine1 = "",
  leftTextLine2 = "",
  rightText,
  bgColor = "#2A2A2A",
  textColor = "#F0E6FF",
  height = "",
  className = "",
  textAlign = "",
}) => {
  const alignClass = textAlign === "text-left" ? "text-left" : "text-center";
  
  return (
    <div
      className={`
        flex flex-row justify-between items-center
        rounded-xl px-4 sm:px-6 py-2 sm:py-3 w-full ${height} ${className}
        transition-all duration-300 group
        hover:shadow-[6px_6px_12px_rgba(151,71,255,0.8)]
      `}
      style={{ backgroundColor: bgColor, color: textColor }}
    >
      <div className={`${alignClass} flex-1 max-w-[60%] transition-colors duration-300`}>
        <p className="text-[20px] xs:text-lg sm:text-xl md:text-xl font-bold font-[Satoshi] leading-tight">
          <span className="group-hover:text-[rgba(151,71,255,1)]">{leftTextLine1}</span>
        </p>
        {leftTextLine2 && (
          <p className="text-[20px] xs:text-lg sm:text-xl md:text-xl font-bold font-[Satoshi] leading-tight mt-0.5 sm:mt-1">
            <span className="group-hover:text-[rgba(151,71,255,1)]">{leftTextLine2}</span>
          </p>
        )}
      </div>
      <p 
        className={`text-[14px] xs:text-[12px] sm:text-sm md:text-sm font-[Satoshi] tracking-wider ${alignClass} text-right transition-colors duration-300`}
        style={{ maxWidth: "40%" }}
      >
        <span className="group-hover:text-[rgba(151,71,255,1)]">
          {rightText.split(' ').map((word, index, array) => (
            <React.Fragment key={index}>
              {word}
              {index < array.length - 1 && (
                <span className="inline-block" style={{ marginRight: "0.25rem" }}>
                  &nbsp;
                </span>
              )}
            </React.Fragment>
          ))}
        </span>
      </p>
    </div>
  );
};

export default DualTextCard;