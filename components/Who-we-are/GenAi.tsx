'use client';

import Image from 'next/image';
import ButtonCard from '../cards/buttonCard';
import { useState } from 'react';
import GetInTouchPopupForm from '../Forms/getInTouch';

export default function Tools() {
  const [isFormOpen, setIsFormOpen] = useState(false);
    const openGetInTouchForm = () => {
      setIsFormOpen(true);
    };
    const closeGetInTouchForm = () => {
      setIsFormOpen(false);
    };
  return (
    <>
    <section className="relative w-full py-16 sm:py-20 md:py-24 lg:py-16 mb-6 sm:mb-20 bg-white font-[Satoshi] overflow-hidden pl-[3vw]">
      {/* Main Content */}
      <div className="relative z-10 flex flex-row items-start justify-between gap-4 max-w-screen-2xl mx-auto px-3 sm:px-4 md:px-6 h-full">
        {/* Left - Text */}
        <div className="flex-1 space-y-6 min-w-0 -mt-[8vw] md:mt-[2vw] lg:mt-[6vw] medium-screen-margin">
          <h1 className="text-[#000000] text-[3vw] leading-tight font-bold whitespace-nowrap">
            EMBEDDED. AGILE.<br />UNREASONABLY EFFICIENT.
          </h1>

          <p className="text-[#000000] text-[1.6vw] lg:text-[1.5vw] leading-snug whitespace-nowrap">
            WE DON'T SHOW UP WITH PITCH DECKS. WE SHOW UP WITH CLARITY. <br />
            GO STACK EMBEDS WITH YOUR TEAM TO DESIGN, BUILD, AND EVOLVE — FAST. <br />
            WE TURN CHAOS INTO CLEAN LOGIC, AND IDEAS INTO THOUGHTFUL INTERFACES. <br />
            NO FLUFF. NO BLOCKERS. JUST SMART SYSTEMS, INTUITIVE UX, AND CLEAR COMMUNICATION.
          </p>

          <p className="text-[#000000] text-[2vw]">
            Need a <span className="font-bold">GenAI MVP</span> in <span className="font-bold">4 weeks?</span>
          </p>

          <p className="text-[#000000] text-[2vw] lg:text-[1.3vw] whitespace-nowrap mb-16">
            A product rebuilt with <span className="font-bold">INTELLIGENCE</span> and <span className="font-bold">DESIGN ELEGANCE?</span><br />
            We go from <em>idea to impact</em> — <span className="font-semibold">embedded, aligned, and ahead of the curve.</span>
          </p>
        </div>
        <div className="flex-none relative w-[22vw] h-[22vw] md:w-[18vw] md:h-[18vw] lg:w-[24vw] lg:h-[24vw] -mt-[11vw] -mr-[0.4vw] md:-mt-[2vw] md:mr-[1vw] lg:-mt-[2vw] lg:mr-[1vw] medium-image-margin">
          <Image
            src="/Tools.png"
            alt="Banner Image"
            fill
            className="object-contain object-center"
            priority
          />
        </div>
      </div>
      
<div className="absolute right-[6vw] bottom-[6vw] sm:bottom-[8vw] md:bottom-[0vw] flex items-center justify-center">
  {/* ButtonCard component */}
  <div className="w-[120px] xs:w-[140px] sm:w-[180px] md:w-[220px] lg:w-[280px] text-center mobile-card-container">
    <h2 className="text-[#000000] text-[2vw] sm:text-[1.8vw] lg:text-[1.5vw] font-semibold uppercase tracking-wide whitespace-nowrap">
      Our only rule?
    </h2>
    <ButtonCard
      heading="Stack it clean. Ship it smart."
      buttonText="CONNECT"
      cardWidth="w-full"
      cardHeight="sm:h-auto"
      className="shadow-md hover:shadow-lg border border-gray-100 py-2 sm:py-3 h-20 sm:h-auto"
      headingClassName="text-white text-[6.5px] sm:text-[10px] md:text-sm lg:text-base whitespace-normal"
      buttonClassName="bg-[#D3B6FB] text-[#6545D4] px-1"
      buttonWidth="w-[60px] xs:w-[70px] sm:w-[90px] md:w-[100px]"
      buttonHeight="h-[18px] xs:h-[20px] sm:h-[22px] md:h-[24px] lg:h-[28px]"
      buttonTextSize="text-[6px] sm:text-[9px] md:text-[10px]"
      gapSize="mb-4 sm:mb-6"
      onClick={openGetInTouchForm}
    />
  </div>
</div>
      
      {/* Responsive adjustments remain the same */}
      <style jsx>{`
        @media (min-width: 425px) and (max-width: 767px) {
          .medium-screen-margin {
            margin-top: 2vw !important;
          }
          .medium-image-margin {
            margin-top: -5vw !important;
            margin-right: -2vw !important;
            width: 27vw !important;
            height: 27vw !important;
          }
        }
      `}</style>
    </section>
    <GetInTouchPopupForm
      isOpen={isFormOpen}
      onClose={closeGetInTouchForm} />
    </>
  );
}