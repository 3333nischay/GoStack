"use client";

import IconCard from "../cards/iconCard";
import { useState, useEffect } from "react";
import Image from "next/image";

const cardData1 = [
  {
    title: "Cognitex",
    imgSrc: "/icon1.png",
  },
  {
    title: "Insightful Analytics & Visualization Services",
    imgSrc: "/icon2.png",
  },
  {
    title: "Smart Data Engineering Suite",
    imgSrc: "/icon3.png",
  },
  {
    title: "Application Innovation Services",
    imgSrc: "/icon4.png",
  },
];
const cardData2 = [
  {
    title: "AutoMind",
    imgSrc: "/icon5.png",
  },
  {
    title: "Applied AI & Data Science Services",
    imgSrc: "/icon2.png",
  },
  {
    title: "Intelligent MLOps Services",
    imgSrc: "/icon6.png",
  },
  {
    title: "AI-Native Product Builds",
    imgSrc: "/icon7.png",
  },
  {
    title: "MVP-as-a-Service",
    imgSrc: "/icon8.png",
  }
];

const StackSection = () => {
  const [isFlipped, setIsFlipped] = useState(false);
  const [windowWidth, setWindowWidth] = useState(0);

  useEffect(() => {
    setWindowWidth(window.innerWidth || 1024);
    const handleResize = () => setWindowWidth(window.innerWidth);
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const toggleFlip = () => {
    setIsFlipped(!isFlipped);
  };


  const getTitleSize = () => {
    if (windowWidth < 640) return '3.8vw'; 
    if (windowWidth < 1024) return '3vw'; 
    if (windowWidth < 1536) return '2.5vw'; 
    return '2vw'; 
  };

  const getQuoteSize = () => {
    if (windowWidth < 640) return '3.6vw'; 
    if (windowWidth < 1024) return '2.8vw'; 
    if (windowWidth < 1536) return '2.2vw'; 
    return '1.8vw'; 
  };

  const getButtonTextSize = () => {
    if (windowWidth < 640) return '2.8vw';
    if (windowWidth < 1024) return '2.2vw';
    return '1.8vw';
  };

  const getSmallButtonTextSize = () => {
    if (windowWidth < 640) return '2.4vw';
    if (windowWidth < 1024) return '2vw';
    return '1.5vw';
  };

  const getCardContainerHeight = () => {
    const cardSet1Height = isFlipped ? '0vh' : 
      windowWidth < 640 
        ? `${cardData1.length * 22}vh` 
        : `${Math.ceil(cardData1.length/2) * 22}vh`;
    
    const cardSet2Height = !isFlipped ? '0vh' : 
      windowWidth < 640 
        ? `${cardData2.length * 22}vh` 
        : `${Math.ceil(cardData2.length/2) * 22}vh`;
    
    return isFlipped ? cardSet2Height : cardSet1Height;
  };

  return (
    <section id="what-we-do" className="w-full px-4 md:px-[3vw] py-[5vh] md:py-[8vh] pb-[8vh] md:pb-[6vh] lg:pb-[6vh] pt-[8vh] md:pt-[10vh] lg:pt-[16vh] text-white bg-black font-[Satoshi]">
      <div className="w-[92%] mx-auto lg:max-w-[85%] xl:max-w-[80%] font-[Satoshi]">
        <h2 className="text-center leading-tight mb-[5vh] font-bold font-[Satoshi]" style={{ 
          fontSize: windowWidth < 640 ? '5vw' : windowWidth < 1024 ? '4vw' : windowWidth < 1536 ? '3.2vw' : '2.8vw' 
        }}>
          Where are you <span className="text-[#D3B6FB] font-medium font-[Satoshi]">today?</span> We'll{" "}
          <span className="text-[#D3B6FB] font-medium font-[Satoshi]">meet</span> you there – and{" "}
          <span className="text-[#D3B6FB] font-medium font-[Satoshi]">build from it.</span>
        </h2>
        
        <div className="h-[10vh] sm:h-[12vh] relative overflow-hidden mb-[3vh] font-[Satoshi]">
          <p className={`text-center absolute w-full transition-all duration-500 ease-in-out ${
            isFlipped ? 'opacity-0 -translate-x-full' : 'opacity-100 translate-x-0'
          } font-[Satoshi]`} style={{ fontSize: getQuoteSize() }}>
            "I have a <span className="text-[#D3B6FB] font-medium font-[Satoshi]">problem</span> I need{" "}
            <span className="text-[#D3B6FB] font-medium font-[Satoshi]">solving</span>."
          </p>
          <p className={`text-center absolute w-full transition-all duration-500 ease-in-out ${
            isFlipped ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-full' 
          } font-[Satoshi]`} style={{ fontSize: getQuoteSize() }}>
            "We are{" "}<span className="text-[#D3B6FB] font-medium font-[Satoshi]">growing</span> fast - and I could use a bit of{" "}
            <span className="text-[#D3B6FB] font-medium font-[Satoshi]">supercharging</span>."
          </p>
        </div>

        <div className="flex flex-col md:flex-row gap-[5vh] md:gap-[3vw] lg:gap-[4vw] mb-[4vh] md:mb-[6vh] lg:mb-[8vh] font-[Satoshi]">
          <div className="flex flex-col gap-[3vh] w-full md:w-1/2 relative pl-[4vw] md:pl-[2vw] lg:pl-[1.5vw] font-[Satoshi]">
            <div className="absolute left-0 top-0 bottom-0 w-[0.3vw] max-w-[3px] min-w-[2px] bg-[#D3B6FB] h-full z-10"></div>

            <div className="flex flex-col gap-[2vh] sm:gap-[3vh] font-[Satoshi]">
              <div className="h-[8vh] sm:h-[10vh] overflow-hidden relative font-[Satoshi]">
                <div 
                  className={`absolute top-0 left-0 w-full transition-all duration-500 ease-in-out ${
                    isFlipped ? 'opacity-0 -translate-y-full' : 'opacity-100 translate-y-0'
                  } font-[Satoshi]`}
                >
                  <button 
                    className="border border-[#A35CFF] text-white rounded-full font-semibold w-fit py-[1vh] px-[3vw] sm:px-[2vw] text-center font-[Satoshi]"
                    style={{ fontSize: getButtonTextSize() }}
                  >
                    How we can help you solve:
                  </button>
                </div>
                <div 
                  className={`absolute top-0 left-0 w-full transition-all duration-500 ease-in-out ${
                    isFlipped ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-full'
                  } font-[Satoshi]`}
                >
                  <button 
                    className="border border-[#A35CFF] text-white rounded-full font-semibold w-fit py-[1vh] px-[3vw] sm:px-[2vw] text-center font-[Satoshi]"
                    style={{ 
                      fontSize: windowWidth < 640 ? '2.5vw' : windowWidth < 1024 ? '1.9vw' : '1.5vw' 
                    }}
                  >
                    Here's how we support your growth:
                  </button>
                </div>
              </div>
              
            <div className="h-[8vh] sm:h-[10vh] overflow-hidden relative font-[Satoshi]">
              <div 
                className={`absolute top-0 left-0 w-full transition-all duration-500 ease-in-out ${
                  isFlipped ? 'opacity-0 -translate-y-full' : 'opacity-100 translate-y-0'
                } font-[Satoshi]`}
              >
                <button 
                  className="border border-[#D3B6FB] text-white/50 rounded-full font-normal w-fit py-[1vh] px-[3vw] sm:px-[2vw] text-center font-[Satoshi]"
                  style={{ fontSize: getSmallButtonTextSize() }}
                >
                  Here's how we support your growth:
                </button>
              </div>
              <div 
                className={`absolute top-0 left-0 w-full transition-all duration-500 ease-in-out ${
                  isFlipped ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-full'
                } font-[Satoshi]`}
              >
                <button 
                  className="border border-[#D3B6FB] text-white/50 rounded-full font-normal w-fit py-[1vh] px-[3vw] sm:px-[2vw] text-center font-[Satoshi]"
                  style={{ fontSize: getSmallButtonTextSize() }}
                >
                  How we can help you solve:
                </button>
              </div>
            </div>
            </div>

            <div className="mt-[4vh] flex justify-center md:justify-start font-[Satoshi]">
              <button 
                onClick={toggleFlip}
                className="w-[12vw] h-[12vw] sm:w-[8vw] sm:h-[8vw] max-w-[60px] max-h-[60px] min-w-[40px] min-h-[40px] flex items-center justify-center transition-all duration-500 ease-in-out hover:scale-110 font-[Satoshi]"
              >
                <div
                  className={`relative w-full h-full transition-transform duration-700 ease-in-out ${
                    isFlipped ? 'rotate-180' : 'rotate-0'
                  }`}
                >
                  <Image
                    src="/arrow side.png" 
                    alt="Toggle view"
                    fill
                    sizes="(max-width: 640px) 40px, 60px"
                    className="transition-opacity hover:opacity-80 object-contain"
                  />
                </div>
              </button>
            </div>
            <span className="text-[#D3B6FB] mt-[2vh] font-medium text-[2.5vw] sm:text-[2vw] md:text-[1.5vw] lg:text-[1.2vw] max-text-[16px] min-text-[12px] font-[Satoshi]">STACK</span>
          </div>

        <div className="w-full md:w-1/2 mt-[2vh] md:mt-[7vh] mx-auto md:mx-0 relative overflow-hidden font-[Satoshi]" 
          style={{ 
            height: getCardContainerHeight(),
            minHeight: isFlipped 
              ? windowWidth < 640 ? `${cardData2.length * 110}px` : `${Math.ceil(cardData2.length/2) * 130}px`
              : windowWidth < 640 ? `${cardData1.length * 110}px` : `${Math.ceil(cardData1.length/2) * 130}px`,
            maxHeight: windowWidth < 640 ? '80vh' : 'none'
          }}
        >
          <div 
            className={`grid grid-cols-1 ${windowWidth < 640 ? '' : 'sm:grid-cols-2'} gap-x-[3vw] gap-y-[2vh] sm:gap-y-[3vh] absolute top-0 left-0 w-full transition-all duration-700 ease-in-out ${
              isFlipped ? 'opacity-0 -translate-x-full' : 'opacity-100 translate-x-0'
            } font-[Satoshi]`}
          >
            {cardData1.map((card, idx) => (
              <div key={`container1-${idx}`} className={windowWidth < 640 ? "w-[80%] mx-auto font-[Satoshi]" : "w-full font-[Satoshi]"}>
                <IconCard
                  key={`data1-${idx}`}
                  width="w-full"
                  height="h-[18vh] sm:h-[18vh] min-h-[100px]"
                  title={card.title}
                  imgSrc={card.imgSrc}
                  titleClassName="text-[3vw] sm:text-[2.2vw] md:text-[1.6vw] lg:text-[1.2vw] min-text-[12px] max-w-full break-words overflow-visible font-[Satoshi]"
                />
              </div>
            ))}
          </div>
        
          <div 
            className={`grid grid-cols-1 ${windowWidth < 640 ? '' : 'sm:grid-cols-2'} gap-x-[3vw] gap-y-[2vh] sm:gap-y-[3vh] absolute top-0 left-0 w-full transition-all duration-700 ease-in-out ${
              isFlipped ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-full'
            } font-[Satoshi]`}
          >
            {cardData2.map((card, idx) => (
              <div key={`container2-${idx}`} className={windowWidth < 640 ? "w-[80%] mx-auto font-[Satoshi]" : "w-full font-[Satoshi]"}>
                <IconCard
                  key={`data2-${idx}`}
                  width="w-full"
                  height="h-[18vh] sm:h-[18vh] min-h-[100px]"
                  title={card.title}
                  imgSrc={card.imgSrc}
                  titleClassName="text-[3vw] sm:text-[2.2vw] md:text-[1.6vw] lg:text-[1.2vw] min-text-[12px] max-w-full break-words overflow-visible font-[Satoshi]"
                />
              </div>
            ))}
          </div>
        </div>
        </div>
      </div>
    </section>
  );
};

export default StackSection;