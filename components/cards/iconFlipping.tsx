"use client";
import React from 'react';
import Image from 'next/image';

interface IconFlipCardProps {
  frontText: string;
  backText: string;
  width?: string;
  height?: string;
  className?: string;
  textColor?: string;
  textSize?: string;
  backTextSize?: string;
  iconSrc?: string;
  iconPosition?: string;
  iconSize?: number;
  textAlignment?: 'top' | 'center' | 'bottom';
}

const IconFlipCard: React.FC<IconFlipCardProps> = ({
  frontText,
  backText,
  width = 'w-[280px]',
  height = 'h-[180px]',
  className = '',
  textColor = 'white',
  textSize = 'text-[clamp(1rem,1vw,1.2rem)]',
  backTextSize,
  iconSrc,
  iconPosition = 'top-4 left-4',
  iconSize = 32,
  textAlignment = 'center',
}) => {
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

        {/* Front Side with positioned text based on textAlignment */}
        <div className={`absolute w-full h-full bg-[#2B2B2B] rounded-xl [backface-visibility:hidden] flex flex-col px-4 ${textSize} font-[Satoshi]`}
             style={{ color: textColor }}>
          {/* Icon */}
          {iconSrc && (
            <div className={`absolute ${iconPosition}`}>
              <Image
                src={iconSrc}
                alt="icon"
                width={iconSize}
                height={iconSize}
              />
            </div>
          )}
          
          {/* Text positioning */}
          {textAlignment === "top" ? (
            <div className="mt-6 text-center">{processText(frontText)}</div>
          ) : textAlignment === "bottom" ? (
            <div className="mt-auto mb-6 text-center">{processText(frontText)}</div>
          ) : (
            <div className="flex items-center justify-center h-full text-center">{processText(frontText)}</div>
          )}
        </div>

        {/* Back Side */}
        <div className={`absolute w-full h-full bg-[#2B2B2B] rounded-xl [transform:rotateY(180deg)] [backface-visibility:hidden] flex items-center justify-center px-4 text-center ${backTextSize || textSize} font-[Satoshi]`}
             style={{ color: textColor }}>
          {processText(backText)}
        </div>
      </div>
    </div>
  );
};

export default IconFlipCard;