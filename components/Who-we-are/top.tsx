import React from "react";

const TopComponent: React.FC = () => {
  return (
    <div
      className="relative w-full min-h-[165vh] bg-cover bg-center bg-no-repeat flex items-center pb-16 font-[Satoshi]"
      style={{ backgroundImage: `url('/who-we-are.png')` }}
    >
      {/* Bottom blur element - positioned absolutely to stay at bottom on all screens */}
      <div className="absolute w-full md:-bottom-7 lg:-bottom-10 h-[5vh] sm:h-[10vh] bg-black blur-md z-10"></div>
      
      <div className="px-6 sm:px-10 max-w-4xl font-[Satoshi] mx-auto sm:mx-0 sm:-ml[10vw] md:ml-[3vw] lg:ml-[5vw] mt-[30vh] sm:mt-[35vh] md:mt-[40vh] z-20 relative">
        <h1 className="text-[#FFFFFF] text-[2.2rem] sm:text-3xl md:text-[2.6rem] lg:text-5xl font-semibold leading-snug font-[Satoshi]">
          We{" "}
          <span className="font-[800] text-[#D3B6FB] font-[Satoshi]">build</span> systems
          <br />
          that{" "}
          <span className="font-[800] text-[#D3B6FB] font-[Satoshi]">think—</span>
        </h1>
        
        <p className="mt-6 sm:mt-8 md:mt-10 text-[#FFFFFF] text-[1.5rem] sm:text-[1.8rem] md:text-[2rem] font-[400] font-[Satoshi]">
          so your{" "}
          <span className="text-[#D3B6FB] font-semibold font-[Satoshi]">teams</span> can{" "}
          <span className="text-[#D3B6FB] font-semibold font-[Satoshi]">think bigger</span>.
        </p>

        <p className="mt-2 sm:mt-3 text-[#FFFFFF] text-lg sm:text-xl leading-relaxed sm:leading-relaxed md:leading-loose font-semibold font-[Satoshi]">
          Design-led. Engineering-backed. From AI systems to automation to intuitive
          platforms. <br />
          We build scalable solutions that{" "}
          <strong className="font-semibold font-[Satoshi]">just work</strong>.
        </p>
      </div>
    </div>
  );
};

export default TopComponent;