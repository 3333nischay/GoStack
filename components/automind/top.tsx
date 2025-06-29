import React from "react";

const TopComponent: React.FC = () => {
  return (
    <div
      className="relative w-full min-h-[150vh] bg-cover bg-center bg-no-repeat flex items-center font-[Satoshi]"
      style={{ backgroundImage: `url('/automind.png')` }}
    >
      <div className="absolute w-full bottom-0 md:-bottom-10 lg:-bottom-2 h-[15vh] sm:h-[20vh] md:h-[25vh] bg-gradient-to-t from-black via-black/50 to-transparent z-10 hidden sm:block"></div>
      
      <div className="px-6 sm:px-8 max-w-4xl ml-0 sm:ml-6 md:ml-10 lg:ml-16 z-20 relative">
        <h1 className="text-white text-5xl sm:text-6xl lg:text-[6rem] font-bold leading-tight">
          AutoMind
        </h1>

        <p className="mt-6 sm:mt-8 text-white text-lg sm:text-xl md:text-3xl font-[400]">
          Build <span className="font-bold">Smarter.</span> Deploy <span className="font-bold">Faster.</span>
        </p>

        <p className="mt-8 sm:mt-10 text-white text-base sm:text-xl leading-relaxed font-normal max-w-2xl">
          AutoMind is Stack's no-code ML platform that lets teams build, deploy,<br />
          and monitor machine learning models — no engineering bottlenecks or<br />
          MLOps expertise required.
        </p>

        <p className="mt-4 text-white text-base sm:text-lg leading-relaxed font-normal max-w-2xl">
          Whether you're a data scientist or a business analyst, AutoMind takes<br />
          you from prototype to production — quickly, with explainability and<br />
          monitoring built right in.
        </p>
      </div>
    </div>
  );
};

export default TopComponent;