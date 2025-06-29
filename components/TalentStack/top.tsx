import React from "react";

const TopComponent: React.FC = () => {
  return (
    <div
      className="relative w-full min-h-[150vh] bg-cover bg-center bg-no-repeat flex items-end font-[Satoshi]"
      style={{ backgroundImage: `url('/TalentStack.png')` }}
    >
      {/* Gradient Overlay */}
      <div className="absolute w-full bottom-0 md:-bottom-10 lg:-bottom-2 h-[15vh] sm:h-[20vh] md:h-[25vh] bg-gradient-to-t from-black via-black/50 to-transparent z-5 hidden sm:block"></div>
      
      {/* Content Block */}
      <div className="px-6 sm:px-8 max-w-4xl ml-0 sm:ml-6 md:ml-10 lg:ml-16 mb-20 sm:mb-24 md:mb-28 lg:mb-32 z-20 relative">
        
        {/* Main Heading */}
        <h1 className="text-white text-5xl sm:text-6xl lg:text-[4.5rem] font-bold leading-tight">
          <span className="font-[400]">Find the </span>Right People.<br/><span className="font-[400]">Or</span> Join Them.
        </h1>

        {/* Subheading */}
        <p className="mt-6 sm:mt-8 text-white text-lg sm:text-xl md:text-2xl font-[400]">
          Are you a <span className="font-bold">talented professional</span> looking to<br />join<span className="font-bold"> Stack</span> or our <span className="font-bold">extended talent pool</span>?
        </p>

        {/* Description */}
        <p className="mt-8 sm:mt-10 text-white text-base sm:text-lg leading-relaxed font-[400] max-w-2xl">
          Or are you a <span className="font-bold">business</span> looking to find your <span className="font-bold">next great hire</span>?
        </p>
      </div>
    </div>
  );
};

export default TopComponent;