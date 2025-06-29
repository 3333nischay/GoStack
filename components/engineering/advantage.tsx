"use client";
import React from "react";
import Image from "next/image";

const PlatformAdvantage: React.FC = () => {
  return (
    <div className="bg-white text-black font-[Satoshi] py-10 sm:py-12 md:py-16 px-4 sm:px-6 flex flex-col items-center">
      <div className="bg-[#1a1a1a] px-8 sm:px-10 md:px-12 lg:px-16 
                      py-8 sm:py-10 md:py-12 lg:py-14 rounded-lg 
                      w-[95%] sm:w-[90%] md:w-[85%] lg:w-[80%] max-w-5xl mx-auto
                      relative">
        <h2 className="text-xl sm:text-2xl md:text-3xl font-medium text-white mb-6 sm:mb-8">
          Tech & Tooling That Power Your Build
        </h2>

        <ul className="space-y-4 sm:space-y-5 md:space-y-6 list-none">
          <li className="flex items-start">
            <span className="text-white mr-2 font-bold">•</span>
            <div className="text-white">
              <span className="font-semibold text-white">AI/ML:</span> OpenAI, LangChain, Pinecone, Whisper
            </div>
          </li>
          
          <li className="flex items-start">
            <span className="text-white mr-2 font-bold">•</span>
            <div className="text-white">
              <span className="font-semibold text-white">Frameworks:</span> Next.js, React, FastAPI
            </div>
          </li>
          
          <li className="flex items-start">
            <span className="text-white mr-2 font-bold">•</span>
            <div className="text-white">
              <span className="font-semibold text-white">Infra:</span> AWS, GCP, Supabase, Docker
            </div>
          </li>
          
          <li className="flex items-start">
            <span className="text-white mr-2 font-bold">•</span>
            <div className="text-white">
              <span className="font-semibold text-white">Tooling:</span> GitHub Actions, PostHog, Amplitude
            </div>
          </li>
          
          <li className="flex items-start">
            <span className="text-white mr-2 font-bold">•</span>
            <div className="text-white">
              <span className="font-semibold text-white">Accelerators:</span> AutoMind (for ML workflows), Cognitex (for document AI, OCR, and email extraction)
            </div>
          </li>
        </ul>
        
        {/* Images on the right - shifted left */}
        <div className="absolute top-1/2 lg:top-2/6 right-16 md:right-20 lg:right-40 -translate-y-1/2 hidden md:block">
          <div className="relative">
            <Image
              src="/engineering/2D.png" 
              alt="Processor Chip"
              width={120}
              height={120}
              className="w-[110px] lg:w-[160px] h-auto" 
            />
            <Image
              src="/engineering/1D.png" 
              alt="Wrench Tool"
              width={240}
              height={240}
              className="w-[180px] lg:w-[260px] h-auto absolute -bottom-16 lg:-bottom-20 -right-20 lg:-right-32" 
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default PlatformAdvantage;