"use client";
import React from 'react';

interface FlipCardProps {
  frontText: string;
  backText: string;
  width?: string;
  height?: string;
  className?: string;
  textColor?: string;
  textSize?: string;
  backTextSize?: string;
  frontWeight?: string; 
}

const FlipCard: React.FC<FlipCardProps> = ({
  frontText,
  backText,
  width = 'w-[280px]',
  height = 'h-[180px]',
  className = '',
  textColor = 'white',
  textSize = 'text-[clamp(1rem,1vw,1.2rem)]',
  backTextSize,
  frontWeight = 'font-semibold', // Default to semi-bold for front text
}) => {
  // Process text to replace \n with <br /> for proper line breaks
  const processText = (text: string) => {
    return text.split('\n').map((line, i) => (
      <React.Fragment key={i}>
        {i > 0 && <br />}
        {line}
      </React.Fragment>
    ));
  };

  return (
    <div className={`[perspective:1000px] ${width} ${height} ${className}`}>
      <div className={`relative w-full h-full transition-transform duration-1000 ease-in-out [transform-style:preserve-3d] hover:[transform:rotateY(180deg)]`}>
        
        {/* Front Side - Added font weight */}
        <div className={`absolute inset-0 bg-[#2B2B2B] rounded-xl [backface-visibility:hidden] flex items-center justify-center px-4 text-center ${textSize} ${frontWeight} font-[Satoshi]`}
             style={{ color: textColor }}>
          {processText(frontText)}
        </div>

        {/* Back Side - No change to font weight */}
        <div className={`absolute inset-0 bg-[#2B2B2B] rounded-xl [transform:rotateY(180deg)] [backface-visibility:hidden] flex items-center justify-center px-4 text-center ${backTextSize || textSize} font-[Satoshi]`}
             style={{ color: textColor }}>
          {processText(backText)}
        </div>
      </div>
    </div>
  );
};

export default FlipCard;