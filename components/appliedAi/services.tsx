"use client";
import React from "react";
import FlipCard from "../cards/flippingCard";

const services = [
  "NLP & Text Analytics",
  "Machine Learning\nModel Development",
  "Feature Engineering\n& Data Prep\nPipelines",
  "Computer Vision &\nImage Intelligence",
  "Custom AI\nAccelerators",
  "AI Model Evaluation,\nMonitoring &\nRetraining"
];

const backtext = [
  "Extract Insights From\nUnstructured Text",
  "Custom ML Models For\nBusiness Problems",
  "Convert Raw Data Into ML-\nReady Yields",
  "AI-Driven Image\nRecognition At Scale",
  "Pre-Built Models For Faster\nAdoption",
  "Track, Optimize, And\nRefresh AI Models"
];

const CoreServices = () => {
  return (
    <section className="w-full bg-white py-16 px-4 sm:px-8">
      <h2 className="text-black font-semibold text-xl sm:text-4xl text-center mb-12">
        Our Core Services
      </h2>

      <div className="w-full flex justify-center">
        <div className="w-full max-w-[90%]"> 
          <div className="block">
            {/* Mobile layout (below md) */}
            <div className="md:hidden grid grid-cols-1 gap-8">
              {services.map((text, idx) => (
                <div key={idx} className="flex flex-col gap-4 items-center">
                  <FlipCard
                    frontText={text}
                    backText={backtext[idx]}
                    width="w-full max-w-[280px]"
                    height="h-[130px] sm:h-[140px]"
                    textColor="white"
                    textSize="text-[clamp(0.9rem,1.3vw,1.5rem)]"
                    backTextSize="text-[clamp(0.85rem,0.9vw,1rem)]"
                    className="flex-shrink-0"
                  />
                </div>
              ))}
            </div>
            
            <div className="hidden md:block">
              {/* Grid layout for 3 columns, 2 rows */}
              <div className="grid grid-cols-2 lg:grid-cols-3 gap-x-6 gap-y-12">
                {/* First column */}
                <div className="flex flex-col gap-6">
                  <FlipCard
                    frontText={services[0]}
                    backText={backtext[0]}
                    width="w-full"
                    height="h-[150px]"
                    textColor="white"
                    textSize="text-[clamp(0.9rem,1.3vw,1.5rem)]"
                    backTextSize="text-[clamp(0.85rem,0.9vw,1rem)]"
                  />
                  <FlipCard
                    frontText={services[1]}
                    backText={backtext[1]}
                    width="w-full"
                    height="h-[150px]"
                    textColor="white"
                    textSize="text-[clamp(0.9rem,1.3vw,1.5rem)]"
                    backTextSize="text-[clamp(0.85rem,0.9vw,1rem)]"
                  />
                </div>
                
                {/* Second column */}
                <div className="flex flex-col gap-6">
                  <FlipCard
                    frontText={services[2]}
                    backText={backtext[2]}
                    width="w-full"
                    height="h-[150px]"
                    textColor="white"
                    textSize="text-[clamp(0.9rem,1.3vw,1.5rem)]"
                    backTextSize="text-[clamp(0.85rem,0.9vw,1rem)]"
                  />
                  <FlipCard
                    frontText={services[3]}
                    backText={backtext[3]}
                    width="w-full"
                    height="h-[150px]"
                    textColor="white"
                    textSize="text-[clamp(0.9rem,1.3vw,1.5rem)]"
                    backTextSize="text-[clamp(0.85rem,0.9vw,1rem)]"
                  />
                </div>
                
                {/* Third column (only visible on lg screens and up) */}
                <div className="hidden lg:flex flex-col gap-6">
                  <FlipCard
                    frontText={services[4]}
                    backText={backtext[4]}
                    width="w-full"
                    height="h-[150px]"
                    textColor="white"
                    textSize="text-[clamp(0.9rem,1.3vw,1.5rem)]"
                    backTextSize="text-[clamp(0.85rem,0.9vw,1rem)]"
                  />
                  <FlipCard
                    frontText={services[5]}
                    backText={backtext[5]}
                    width="w-full"
                    height="h-[150px]"
                    textColor="white"
                    textSize="text-[clamp(0.9rem,1.3vw,1.5rem)]"
                    backTextSize="text-[clamp(0.85rem,0.9vw,1rem)]"
                  />
                </div>
                
                {/* Extra row for medium screens that can't fit 3 columns */}
                <div className="lg:hidden flex flex-col gap-6 md:col-span-2">
                  <div className="grid grid-cols-2 gap-6">
                    <FlipCard
                      frontText={services[4]}
                      backText={backtext[4]}
                      width="w-full"
                      height="h-[150px]"
                      textColor="white"
                      textSize="text-[clamp(0.9rem,1.3vw,1.5rem)]"
                      backTextSize="text-[clamp(0.85rem,0.9vw,1rem)]"
                    />
                    <FlipCard
                      frontText={services[5]}
                      backText={backtext[5]}
                      width="w-full"
                      height="h-[150px]"
                      textColor="white"
                      textSize="text-[clamp(0.9rem,1.3vw,1.5rem)]"
                      backTextSize="text-[clamp(0.85rem,0.9vw,1rem)]"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CoreServices;