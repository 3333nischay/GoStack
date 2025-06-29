import React from "react";

interface NormalCardProps {
  width: string;
  height: string;
  text: string;
  heading?: string;
  backgroundColor?: string;
  textColor?: string;
  hoverColor?: string;
  textSize?: string;
  headingSize?: string;
  headingClassName?: string;
  className?: string;
}

const NormalCard: React.FC<NormalCardProps> = ({
  width,
  height,
  text,
  heading,
  backgroundColor = "#2A2A2A",
  textColor = "#F0E6FF",
  hoverColor = "#D3B6FB",
  textSize = "text-xl sm:text-2xl",
  headingSize = "text-xl sm:text-2xl",
  headingClassName = "font-bold",
  className = "",
}) => {
  return (
    <div
      className={`rounded-xl flex flex-col items-center justify-center text-center px-4 py-2 transition-all duration-300 hover:shadow-[7px_7px_7px_-1px_#D3B6FB] group ${width} ${height} ${className}`}
      style={{ backgroundColor }}
    >
      {heading ? (
        <>
          <h3
            className={`font-[Satoshi] transition-all duration-300 transform group-hover:-translate-y-1 ${headingSize} ${headingClassName}`}
            style={{ color: textColor }}
          >
            <span className="group-hover:text-[#D3B6FB]">{heading}</span>
          </h3>
          <p
            className={`font-[Satoshi] transition-all duration-300 transform group-hover:-translate-y-1 text-sm sm:text-base mt-1`}
            style={{ color: textColor }}
          >
            <span className="group-hover:text-[#D3B6FB]">{text}</span>
          </p>
        </>
      ) : (
        <p
          className={`font-[Satoshi] font-semibold transition-all duration-300 transform group-hover:-translate-y-2 ${textSize}`}
          style={{ color: textColor }}
        >
          <span className="group-hover:text-[#D3B6FB]">{text}</span>
        </p>
      )}
    </div>
  );
};

export default NormalCard;