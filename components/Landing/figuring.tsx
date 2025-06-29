import {useState} from "react";
import NewButton from "../buttons/newButton";
import GetInTouchPopupForm from "../Forms/getInTouch";
const StillFiguring = () => {
  const [isFormOpen, setIsFormOpen] = useState(false);

  const openForm = () => {
    setIsFormOpen(true);
  }

  const closeForm = () => {
    setIsFormOpen(false);
  }
  return (
    <>
    <section className="bg-white text-black py-16 px-4 w-full font-[Satoshi] text-center">
      <h2 className="text-2xl sm:text-4xl md:text-5xl font-normal mb-6 leading-snug font-[Satoshi]">
        Still <span className="text-[#9747FF] font-semibold font-[Satoshi]">figuring</span> things out?
      </h2>

    <div className="text-base sm:text-lg md:text-xl font-normal mb-10 leading-relaxed max-w-4xl mx-auto font-[Satoshi]">
      <p className="inline font-[Satoshi]">
        Let's make sense of it <span className="font-bold font-[Satoshi]">together</span>
      </p>
      <p className="block mt-1 sm:mt-2 font-[Satoshi]">
        <span className="text-[#9747FF] font-bold font-[Satoshi]">–</span>{" "}
        <span className="font-bold font-[Satoshi]">explore our services</span> or{" "}
        <span className="font-bold font-[Satoshi]">chat with someone who gets it.</span>
      </p>
    </div>

<div className="flex flex-row justify-center items-center gap-5 sm:gap-12 w-full mx-auto max-w-[95%] sm:max-w-none font-[Satoshi]">
  <NewButton
    text="Discovery Call"
    bgColor="#CAADF1"
    textColor="#000000"
    size="sm"
    className="flex-1 sm:flex-none text-[8px] xs:text-[10px] sm:text-sm whitespace-nowrap px-0 sm:px-6 py-1.5 sm:py-3 max-w-[38%] sm:max-w-none before:sm:content-['Book_A_'] before:content-[''] font-[Satoshi]"
    onClick={openForm}
  />
  <NewButton
    text="Platform Demo" //connect to calendly api
    bgColor="#CAADF1"
    textColor="#000000"
    size="sm"
    className="flex-1 sm:flex-none text-[8px] xs:text-[10px] sm:text-sm whitespace-nowrap px-0 sm:px-6 py-1.5 sm:py-3 max-w-[38%] sm:max-w-none before:sm:content-['Book_A_'] before:content-[''] font-[Satoshi]"
  />
</div>
    </section>
    <GetInTouchPopupForm
      isOpen={isFormOpen}
      onClose={closeForm} 
      buttonText="Book A Discovery Call"
      />
    </>
  );
};

export default StillFiguring;