import React from "react";
import Image from "next/image";

interface IconCardProps {
  width: string;      
  height: string;     
  title: React.ReactNode;  
  imgSrc: string;
  titleClassName?: string;
  titleSize?: string;    
  iconSize?: string;     
}

const IconCard: React.FC<IconCardProps> = ({ 
  width, 
  height, 
  title, 
  imgSrc,
  titleClassName = "",
  titleSize = "",      
  iconSize = ""        
}) => {
  const isSmall = height.includes("h-20") || height.includes("h-24");
  
  const textSizeClass = titleSize || (isSmall ? 'text-xs sm:text-sm leading-tight' : 'text-sm sm:text-base leading-normal');
  
  const iconSizeClass = iconSize || (isSmall ? 'w-5 h-5' : 'w-6 h-6');
  
  return (
    <div
      className={`rounded-xl bg-[#2A2A2A] ${isSmall ? 'py-3 px-3' : 'py-4 px-5'} 
      flex flex-col ${width} ${height}
      transition-all duration-300 group
      hover:shadow-[7px_7px_7px_-1px_#9747FF]`}
    >
      <div className="flex flex-col space-y-0">
        <div className={`${iconSizeClass} transition-all duration-300 transform group-hover:-translate-y-1`}>
          <Image
            src={imgSrc}
            alt="icon"
            width={iconSize ? 56 : (isSmall ? 20 : 24)}
            height={iconSize ? 56 : (isSmall ? 20 : 24)}
            className="object-contain"
          />
        </div>
        <div className={`text-white font-satoshi mt-1 ${titleClassName || textSizeClass}
          transition-all duration-300 transform group-hover:-translate-y-1
          group-hover:text-[#B49BFF]`}>
          {title}
        </div>
      </div>
    </div>
  );
};

export default IconCard;