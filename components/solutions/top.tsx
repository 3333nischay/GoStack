import React from "react";
import styles from "./top.module.css"; 
import NormalCard from "../cards/normalCard";

const TopComponent: React.FC = () => {
  const cards = [
    {
      text: "Teams That Embed, Align, And Deliver"
    },
    {
      text: "Tools That Automate, Optimize, And Think"
    },
    {
      text: "Systems That Scale — Without The Chaos"
    }
  ];

  return (
    <div
      className="relative w-full flex flex-col justify-between items-start font-[Satoshi] overflow-hidden"
      style={{ height: "120vh" }} 
    >
      <div 
        className={`absolute inset-0 z-0 ${styles.bgImageZoom}`}
        style={{ 
          backgroundImage: `url('/solutions.png')`,
          backgroundSize: "cover",
          backgroundPosition: "center 25%",
          transformOrigin: "center center"
        }}
      ></div>
      
      <div className="absolute w-full -bottom-18 h-[15vh] bg-black blur-md z-20"></div>
      
      {/* Top content container with responsive spacing */}
      <div className="px-6 sm:px-8 md:px-12 w-full max-w-7xl mx-auto z-30 relative mt-16 sm:mt-20 md:mt-40">
        <h1 className="text-white text-2xl sm:text-3xl md:text-4xl lg:text-6xl font-[400] leading-tight font-[Satoshi] mb-2 sm:mb-3 md:mb-2">
          We turn <span className="font-bold">complexity</span> into <span className="font-bold">clarity</span> -
        </h1>
        <h2 className="text-white text-lg sm:text-xl md:text-3xl font-[400] mb-8 sm:mb-12 md:mb-16 lg:mb-2">
          with <span className="font-bold">systems that think</span>.
        </h2>
      </div>
      
      {/* Cards container with responsive vertical positioning */}
      <div className="px-6 sm:px-8 md:px-12 w-full max-w-7xl mx-auto z-30 mt-0 sm:mt-4 md:mt-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-3 sm:gap-4 md:gap-6">
          {cards.map((card, index) => (
            <NormalCard
              key={index}
              width="w-full"
              height="h-20 sm:h-24 md:h-28"
              text={card.text}
              backgroundColor="#2A2A2A"
              textColor="#F0E6FF"
              textSize="text-sm sm:text-base md:text-lg"
              className="z-30"
            />
          ))}
        </div>
      </div>

      {/* Bottom text with responsive spacing */}
      <div className="w-full mb-6 sm:mb-8 md:mb-10 lg:mb-12 z-40">
        <h4 className="text-center text-white text-lg sm:text-xl md:text-2xl lg:text-3xl px-4">
          No Matter Where You're <span className="font-bold">Starting</span>, There's a <span className="font-bold text-[#9747FF]">STACK</span> For That.
        </h4>
      </div>
    </div>
  );
};

export default TopComponent;