'use client';

import Image from 'next/image';
import React, { useRef, useState } from 'react';
import CaseStudyCard from '../cards/caseStudy';

interface StackSuite {
  title: string;
  link: string;
  imageSrc?: string;
}

interface Props {
  cards: StackSuite[];
}

const StackSuiteSection: React.FC<Props> = ({ cards }) => {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [activeButton, setActiveButton] = useState<string | null>(null);

  const scroll = (direction: 'left' | 'right') => {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({
        left: direction === 'left' ? -400 : 400,
        behavior: 'smooth',
      });
    }
  };

  const handleButtonClick = (direction: 'left' | 'right') => {
    setActiveButton(direction);
    scroll(direction);
    
    // Reset after animation
    setTimeout(() => {
      setActiveButton(null);
    }, 300);
  };

  return (
    <div className="relative w-full overflow-hidden py-16 sm:py-20 md:py-24 lg:py-28 bg-black font-[Satoshi]">
      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between px-4 sm:px-6 md:px-12 lg:px-16 font-[Satoshi] mb-8 sm:mb-10 md:mb-12">
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-semibold text-white font-[Satoshi] mb-4 sm:mb-0"><span className='text-[#D3B6FB]'>STACK</span> Suite</h2>
        <div className="flex space-x-3 font-[Satoshi]">
          <button 
            onClick={() => handleButtonClick('left')} 
            className={`p-2 rounded-full transition-all duration-200 ${activeButton === 'left' ? 'bg-gray-700/50' : 'hover:bg-gray-800/30'}`}
          >
            <Image src="/left.png" alt="Scroll left" width={40} height={40} className="w-8 h-8 sm:w-10 sm:h-10" />
          </button>
          <button 
            onClick={() => handleButtonClick('right')} 
            className={`p-2 rounded-full transition-all duration-200 ${activeButton === 'right' ? 'bg-gray-700/50' : 'hover:bg-gray-800/30'}`}
          >
            <Image src="/right.png" alt="Scroll right" width={40} height={40} className="w-8 h-8 sm:w-10 sm:h-10" />
          </button>
        </div>
      </div>

      <div
        ref={scrollRef}
        className="flex space-x-4 sm:space-x-6 md:space-x-8 overflow-x-auto px-4 sm:px-6 md:px-12 lg:px-16 scroll-smooth font-[Satoshi] no-scrollbar"
        style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
      >
        {cards.map((card, idx) => (
          <div key={idx} className="flex-shrink-0 w-[280px] sm:w-[300px] md:w-[320px] lg:w-[340px] font-[Satoshi]">
            <CaseStudyCard {...card} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default StackSuiteSection;