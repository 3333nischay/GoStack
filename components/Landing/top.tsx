import {useState} from "react";
import NewButton from "../buttons/newButton";
import GetInTouchPopupForm from "../Forms/getInTouch";
const HeroSection: React.FC = () => {
  const [isFormOpen, setIsFormOpen] = useState(false);

  const OpenForm =  ()=>{
    setIsFormOpen(true);
  }
  const CloseForm = () => {
    setIsFormOpen(false);
  };

  return (
    <>
    <div
      className="w-full min-h-[150vh] bg-cover bg-center bg-no-repeat flex items-center pb-20 font-[Satoshi]"
      style={{ backgroundImage: `url('/landing.png')` }}
    >
      <div className="px-6 sm:px-10 max-w-4xl font-[Satoshi] mx-auto sm:mx-0 sm:-ml[10vw] md:ml-[3vw] lg:ml-[5vw] mt-[30vh] sm:mt-[35vh] md:mt-[40vh]">
        <h1 className="text-white text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-semibold leading-tight font-[Satoshi] whitespace-nowrap overflow-hidden text-ellipsis">
          We <span className="text-[#D3B6FB]">build</span> systems that <span className="text-[#D3B6FB]">think</span>
        </h1>
        <p className="mt-6 sm:mt-8 md:mt-10 text-white text-base sm:text-lg md:text-xl lg:text-2xl leading-relaxed sm:leading-relaxed md:leading-loose font-[Satoshi]">
          Stacking design-led thinking and smart engineering to build systems that scale,
          from AI copilots to custom automation to intuitive platforms.
        </p>
        <p className="mt-2 sm:mt-3 text-white text-base sm:text-lg md:text-xl lg:text-2xl font-semibold font-[Satoshi]">
          your team{" "}
          <span className="text-[#D3B6FB] font-bold font-[Satoshi]">actually</span>{" "}
          enjoys using.
        </p>
        <div className="mt-6 sm:mt-8 md:mt-10 flex flex-row items-center justify-start gap-3 sm:gap-8 md:gap-12 font-[Satoshi]">
          <NewButton 
            text="Get in Touch" 
            size="sm" 
            onClick={OpenForm}
            className="whitespace-nowrap text-xs sm:text-sm md:text-base px-3 py-1.5 sm:px-5 sm:py-2 md:px-7 md:py-2.5 font-[Satoshi]"
            bgColor="#D3B6FB"
            textColor="#1A0B2E"
          />
          <NewButton 
            text="See What We Do" 
            size="sm" 
            className="whitespace-nowrap text-xs sm:text-sm md:text-base px-3 py-1.5 sm:px-5 sm:py-2 md:px-7 md:py-2.5 font-[Satoshi]"
            bgColor="#D3B6FB"
            textColor="#1A0B2E"
            onClick={() => {
              document.getElementById('what-we-do')?.scrollIntoView({
              behavior: 'smooth',
              block: 'start'
              });
            }}
          />
        </div>
      </div>
    </div>
    <GetInTouchPopupForm
      isOpen={isFormOpen}
      onClose={CloseForm}
      buttonText="Get In Touch"
    />
      </>
  );
};

export default HeroSection;