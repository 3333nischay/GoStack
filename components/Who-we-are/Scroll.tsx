'use client';
import { useRef, useState, useEffect } from 'react';
import TeamMemberCard from '../cards/team';
import Image from 'next/image';

// Mock team data remains the same
const teamMembers = [
  {
    name: 'Sumair Khan',
    role: 'Co-founder & CEO',
    imageSrc: '/Sumair.png',
    linkedinUrl: 'https://linkedin.com',
  },
    {
    name: 'Srini Annamaraju',
    role: 'Founder',
    imageSrc: '/Srini.png',
    linkedinUrl: 'https://linkedin.com',
  },
  {
    name: 'Abhishek Goenka',
    role: 'Co-founder & CFO',
    imageSrc: '/Abhishek.png',
    linkedinUrl: 'https://linkedin.com',
  },
  {
    name: 'Kunal Yadav',
    role: 'CTO',
    imageSrc: '/Kunal.png',
    linkedinUrl: 'https://linkedin.com',
  },
];

export default function FlowingBanner() {
  // All state and handler functions remain unchanged
  const scrollRef = useRef<HTMLDivElement>(null);
  const [isMouseDown, setIsMouseDown] = useState(false);
  const [startX, setStartX] = useState(0);
  const [scrollLeftPosition, setScrollLeftPosition] = useState(0);

  // Scroll and mouse event handlers remain unchanged
  // ...

  // Scroll left by a fixed amount
  function scrollToLeft() {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({ left: -200, behavior: 'smooth' });
    }
  }

  // Scroll right by a fixed amount
  function scrollToRight() {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({ left: 200, behavior: 'smooth' });
    }
  }

  return (
    <section 
      className="w-full bg-black py-16 pb-8 overflow-hidden relative font-[Satoshi]"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        {/* Section title and arrow buttons at top */}
        <div className="flex justify-between items-center mb-8">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-semibold text-white font-[Satoshi]">Our Team</h2>
          
          <div className="flex items-center gap-0.5">
            <button 
              onClick={scrollToLeft}
              className="p-2 rounded-full hover:bg-gray-800 transition-colors"
              aria-label="Scroll left"
            >
              <Image 
                src="/left.png" 
                alt="Scroll left" 
                width={44} 
                height={44}
              />
            </button>
            
            <button 
              onClick={scrollToRight}
              className="p-2 rounded-full hover:bg-gray-800 transition-colors"
              aria-label="Scroll right"
            >
              <Image 
                src="/right.png" 
                alt="Scroll right" 
                width={44} 
                height={44}
              />
            </button>
          </div>
        </div>

        {/* Scrollable container with INCREASED gap */}
        <div
          ref={scrollRef}
          className="flex overflow-x-auto snap-x snap-mandatory gap-6 sm:gap-8 md:gap-10 pb-4"
          style={{ 
            scrollbarWidth: 'none', 
            msOverflowStyle: 'none',
            WebkitOverflowScrolling: 'touch',
          }}
        >
          <style jsx>{`
            div::-webkit-scrollbar {
              display: none;
            }
          `}</style>
          
          {teamMembers.map((member, i) => (
            <div key={i} className="min-w-[150px] sm:min-w-[180px] md:min-w-[200px] snap-start flex-shrink-0">
              <TeamMemberCard
                name={member.name}
                role={member.role}
                imageSrc={member.imageSrc}
                linkedinUrl={member.linkedinUrl}
                position="center"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}