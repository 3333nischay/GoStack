"use client";
import React from "react";
import FlipCard from "../cards/flippingCard";

const services = [
  "Model Deployment\nPipelines",
  "Model Monitoring &\nDrift Detection",
  "Model Registry &\nVersioning",
  "Auto Retraining &\nScheduling",
  "Infrastructure As\nCode For ML",
];

const backtext = [
    "Automated CI/CD For ML\nModels",
    "Track Performance And\nDetect Model Drift",
    "Manage Models With Full\nVersion Control",
    "Automate Retraining With\nLive Data",
    "Scalable ML Infra Via IaC\nTemplates"
]

const CoreServices = () => {
  return (
    <section className="w-full bg-white py-16 px-4 sm:px-8">
      <h2 className="text-black font-semibold text-xl sm:text-4xl text-center mb-12">
        Our Core Services
      </h2>

      <div className="w-full flex justify-center">
        <div className="w-full max-w-[80%]"> 
          <div className="block">
            {/* Mobile layout (below md) */}
            <div className="md:hidden flex flex-wrap gap-x-8 gap-y-10 justify-center">
              {services.map((text, idx) => (
                <FlipCard
                  key={idx}
                  frontText={text}
                  backText={backtext[idx]}
                  width="w-[220px] sm:w-[230px]"
                  height="h-[130px] sm:h-[140px]"
                  textColor="white"
                  textSize="text-[clamp(0.9rem,1.3vw,1.5rem)]"
                  backTextSize="text-[clamp(0.85rem,0.9vw,1rem)]"
                  className="flex-shrink-0"
                />
              ))}
            </div>
            
            <div className="hidden md:block">
              {/* First row - 3 cards */}
              <div className="flex justify-center gap-x-8 gap-y-10 mb-10">
                {services.slice(0, 3).map((text, idx) => (
                  <FlipCard
                    key={idx}
                    frontText={text}
                    backText={backtext[idx]}
                    width="w-[240px]"
                    height="h-[150px]"
                    textColor="white"
                    textSize="text-[clamp(0.9rem,1.3vw,1.5rem)]"
                    backTextSize="text-[clamp(0.85rem,0.9vw,1rem)]"
                    className="flex-shrink-0"
                  />
                ))}
              </div>
              
              {/* Second row - 2 cards centered */}
              <div className="flex justify-center gap-x-8">
                <FlipCard
                  frontText={services[3]}
                  backText={backtext[3]}
                  width="w-[240px]"
                  height="h-[150px]"
                  textColor="white"
                  textSize="text-[clamp(0.9rem,1.3vw,1.5rem)]"
                  backTextSize="text-[clamp(0.85rem,0.9vw,1rem)]"
                  className="flex-shrink-0"
                />
                <FlipCard
                  frontText={services[4]}
                  backText={backtext[4]}
                  width="w-[240px]"
                  height="h-[150px]"
                  textColor="white"
                  textSize="text-[clamp(0.9rem,1.3vw,1.5rem)]"
                  backTextSize="text-[clamp(0.85rem,0.9vw,1rem)]"
                  className="flex-shrink-0"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CoreServices;