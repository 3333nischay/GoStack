import React from "react";
import styles from "./top.module.css"; 

const TopComponent: React.FC = () => {
  return (
    <div
      className="relative w-full flex flex-col justify-center items-start font-[Satoshi] overflow-hidden"
      style={{ height: "120vh" }} 
    >
      <div 
        className={`absolute inset-0 z-0 ${styles.bgImageZoom}`}
        style={{ 
          backgroundImage: `url('/appledAi.png')`,
          backgroundSize: "cover",
          backgroundPosition: "center 25%",
          transformOrigin: "center center"
        }}
      ></div>
      
      <div className="absolute w-full -bottom-18 h-[15vh] bg-black blur-md z-20"></div>
      
      <div className="px-6 sm:px-8 max-w-4xl ml-0 sm:ml-6 md:ml-10 lg:ml-16 z-30 relative">
        <h1 className="text-white text-5xl sm:text-6xl lg:text-[4.5rem] font-bold leading-tight">
          Applied AI & Data<br />Science Services
        </h1>

        <p className="mt-4 sm:mt-6 text-white text-lg sm:text-xl md:text-2xl font-[400]">
          From <span className="font-bold">Prediction</span> To <span className="font-bold">Impact</span>
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