import React from "react";

const TopComponent: React.FC = () => {
  return (
    <div
      className="relative w-full min-h-[150vh] bg-cover bg-center bg-no-repeat flex items-center font-[Satoshi]"
      style={{ backgroundImage: `url('/cognitex.png')` }}
    >
      <div className="absolute w-full bottom-0 md:-bottom-10 lg:-bottom-16 h-[15vh] sm:h-[20vh] md:h-[20vh] bg-gradient-to-t from-white via-white/99 to-transparent z-10 hidden sm:block"></div>
      <div className="px-6 sm:px-8 max-w-4xl ml-0 sm:ml-6 md:ml-10 lg:ml-16 z-20">
        <h1 className="text-white text-5xl sm:text-6xl lg:text-[6rem] font-bold leading-tight">
          Cognitex
        </h1>

        <p className="mt-6 sm:mt-8 text-white text-lg sm:text-xl md:text-3xl font-[400]">
          From <span className="font-bold">Documents To Decisions</span> — In Seconds
        </p>

        <p className="mt-8 sm:mt-10 text-white text-base sm:text-xl leading-relaxed font-normal max-w-2xl">
          Cognitex is Stack's AI-powered document processing platform, <br />
          designed to help enterprises extract insights, automate workflows, and <br />
          minimize manual effort across high-volume, high-stakes documents.
        </p>
      </div>
    </div>
  );
};

export default TopComponent;