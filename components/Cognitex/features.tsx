"use client";
import React from "react";
import Image from "next/image";

interface FeatureItem {
  icon: string;
  title: string;
  description: string;
}

const features: FeatureItem[] = [
  {
    icon: "/1C.png",
    title: "Document Ingestion",
    description: "Upload PDFs, scans, and images in bulk",
  },
  {
    icon: "/2C.png",
    title: "Intelligent Extraction",
    description: "Auto-extract entities, tables, and relationships",
  },
  {
    icon: "/3C.png",
    title: "Multi-language OCR",
    description: "Supports 50+ global and Indic languages, including handwriting",
  },
  {
    icon: "/4C.png",
    title: "Voice & Document Translation",
    description: "Real-time translation with format preservation",
  },
  {
    icon: "/5C.png",
    title: "Semantic Search",
    description: "Ask natural language questions across document sets",
  },
  {
    icon: "/6C.png",
    title: "Content Generation",
    description: "Auto-generate summaries, visuals, and audio from text",
  },
  {
    icon: "/7C.png",
    title: "Workflow Automation",
    description: "Route docs by content, metadata, or confidence level",
  },
  {
    icon: "/8C.png",
    title: "Audit & Traceability",
    description: "Full visibility of data extraction processes",
  },
  {
    icon: "/9C.png",
    title: "Training Data Prep",
    description: "Auto-generate parallel corpora for model training",
  },
  {
    icon: "/10C.png",
    title: "Built-in Editors",
    description: "Modify post-OCR or translated content directly",
  },
];

const CognitexFeatures: React.FC = () => {
  return (
    <section className="bg-black text-white py-16 px-4 sm:px-6 md:px-8 lg:px-10 font-[Satoshi]">
      <div className="text-center mb-16">
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-2">
          WHAT CAN YOU DO WITH COGNITEX?
        </h2>
        <p className="text-gray-300 text-sm sm:text-base max-w-2xl mx-auto">
          From Ingestion To Insight — A Full-Stack IDP Pipeline:
        </p>
      </div>

      <div className="w-full sm:w-[90%] md:w-[85%] mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-16 sm:gap-x-20 lg:gap-x-20 gap-y-20 justify-items-center">
        {features.slice(0, 9).map((feature, idx) => (
          <div key={idx} className="flex items-start gap-6 w-full max-w-md">
            <div className="min-w-[32px] mt-1">
              <Image src={feature.icon} alt={feature.title} width={32} height={32} />
            </div>
            <div>
              <h3 className="font-semibold text-white text-lg sm:text-xl mb-1">{feature.title}</h3>
              <p className="text-sm text-gray-400 leading-relaxed">{feature.description}</p>
            </div>
          </div>
        ))}
        
        {/* Last item centered with col-span */}
        <div className="flex items-start gap-6 w-full max-w-md lg:col-span-3 lg:justify-center lg:mx-auto mt-4">
          <div className="min-w-[32px] mt-1">
            <Image src={features[9].icon} alt={features[9].title} width={32} height={32} />
          </div>
          <div>
            <h3 className="font-semibold text-white text-lg sm:text-xl mb-1">{features[9].title}</h3>
            <p className="text-sm text-gray-400 leading-relaxed">{features[9].description}</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CognitexFeatures;