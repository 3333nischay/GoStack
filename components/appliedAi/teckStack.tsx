"use client";
import React, { useEffect, useRef } from "react";

const TechStack = () => {
  const technologies = [
    "Python",
    "scikit-learn",
    "TensorFlow",
    "PyTorch",
    "Hugging Face",
    "spaCy",
    "OpenCV",
    "MLflow",
    "Vertex AI",
    "Databricks",
    "Snowflake"
  ];
  
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
    const scrollContainer = scrollContainerRef.current;
    if (!scrollContainer) return;
    
    const scrollContent = scrollContainer.firstChild as HTMLElement;
    if (!scrollContent) return;
    
    // Clone the content for seamless infinite scrolling
    const contentClone = scrollContent.cloneNode(true);
    scrollContainer.appendChild(contentClone);
    
    // For accessibility, pause scrolling on hover or focus
    const pauseScroll = () => scrollContainer.style.animationPlayState = 'paused';
    const resumeScroll = () => scrollContainer.style.animationPlayState = 'running';
    
    scrollContainer.addEventListener('mouseenter', pauseScroll);
    scrollContainer.addEventListener('mouseleave', resumeScroll);
    scrollContainer.addEventListener('focus', pauseScroll);
    scrollContainer.addEventListener('blur', resumeScroll);
    
    return () => {
      scrollContainer.removeEventListener('mouseenter', pauseScroll);
      scrollContainer.removeEventListener('mouseleave', resumeScroll);
      scrollContainer.removeEventListener('focus', pauseScroll);
      scrollContainer.removeEventListener('blur', resumeScroll);
    };
  }, []);

  return (
    <section className="w-full bg-white py-14 px-4 font-[Satoshi]">
      <div className="w-full flex flex-col items-center">
        {/* Heading with purple "STACK" */}
        <h2 className="text-center font-[Satoshi] text-3xl sm:text-4xl font-bold mb-8">
          <span className="text-black">TECH </span>
          <span className="text-[#C67DFF]">STACK</span>
        </h2>
        
        {/* Container for infinite scrolling tech names */}
        <div className="w-full overflow-hidden">
          <div 
            ref={scrollContainerRef}
            className="flex whitespace-nowrap animate-marquee"
            style={{
              animationDuration: '20s',
              animationTimingFunction: 'linear',
              animationIterationCount: 'infinite'
            }}
          >
            <div className="flex items-center space-x-2 sm:space-x-4">
              {[...Array(5)].flatMap((_, i) => 
                technologies.map((tech, index) => (
                  <React.Fragment key={`${i}-${index}`}>
                    {(i > 0 || index > 0) && (
                      <span className="text-black font-[Satoshi] text-xl sm:text-2xl md:text-3xl">,</span>
                    )}
                    <span className="text-black font-[Satoshi] text-xl sm:text-2xl md:text-3xl font-medium">
                      {tech}
                    </span>
                  </React.Fragment>
                ))
              )}
            </div>
          </div>
        </div>
      </div>
      
      {/* Add CSS for animation */}
      <style jsx global>{`
        @keyframes marquee {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        .animate-marquee {
          animation: marquee 50s linear infinite;
        }
      `}</style>
    </section>
  );
};

export default TechStack;