import React from "react";
import styles from "./top.module.css"; 

const TopComponent: React.FC = () => {
  return (
    <div
      className="relative w-full flex flex-col justify-center items-start font-[Satoshi] overflow-hidden"
      style={{ height: "120vh" }} 
    >
      {/* Background image */}
      <div 
        className={`absolute inset-0 z-0 ${styles.bgImageZoom}`}
        style={{ 
          backgroundImage: `url('/data-ai.png')`,
          backgroundSize: "cover",
          backgroundPosition: "center 25%",
          transformOrigin: "center center"
        }}
      ></div>
      
      {/* Gradient overlay - reduced coverage to not conflict with blur */}
      <div className="absolute inset-0 bottom-[15vh] bg-gradient-to-r from-black/70 via-black/40 to-transparent z-10"></div>
      
      {/* Blur element with higher z-index and positive positioning */}
      <div className="absolute w-full bottom-0 h-[15vh] bg-black blur-md z-20"></div>
      
      {/* Text content */}
      <div className="px-6 sm:px-8 max-w-4xl ml-0 sm:ml-6 md:ml-10 lg:ml-16 z-30 relative">
        {/* Main Heading */}
        <h1 className="text-white text-5xl sm:text-6xl lg:text-[4.5rem] font-bold leading-tight">
          Smart Data <br />Engineering Suite
        </h1>

        {/* Subheading */}
        <p className="mt-4 sm:mt-6 text-white text-lg sm:text-xl md:text-2xl font-[400]">
          In Seconds Build <span className="font-bold">Smart.</span> Scale <span className="font-bold">Fast.</span> Trust Your <span className="font-bold">Data.</span>
        </p>
      </div>
      
      <div className="absolute bottom-0 left-0 right-0 mb-8 sm:mb-10 md:mb-12 z-40">
        <h4 className="text-center text-white text-xl sm:text-2xl md:text-3xl font-semibold">
          Industry Applications
        </h4>
      </div>
    </div>
  );
};

export default TopComponent;