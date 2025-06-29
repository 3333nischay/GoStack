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
          backgroundImage: `url('/engineering.png')`,
          backgroundSize: "cover",
          backgroundPosition: "center 25%",
          transformOrigin: "center center"
        }}
      ></div>
      
      {/* Blur element with higher z-index and positive positioning */}
      <div className="absolute w-full -bottom-18 h-[15vh] bg-black blur-md z-20"></div>
      
      <div className="px-6 sm:px-8 max-w-4xl ml-0 sm:ml-6 md:ml-10 lg:ml-16 z-30 relative">
        <h1 className="text-white text-5xl sm:text-6xl lg:text-[6rem] font-bold leading-tight font-[Satoshi]">
          Custom<br />Engineering Suite
        </h1>
      </div>
    </div>
  );
};

export default TopComponent;