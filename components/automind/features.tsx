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
    icon: "/1A.png",
    title: "No-Code Model Builder",
    description: "Drag-and-drop interface — zero coding required",
  },
  {
    icon: "/2A.png",
    title: "Pre-built ML Templates",
    description: "Launch fast with blueprints for common use cases",
  },
  {
    icon: "/3A.png",
    title: "Auto SHAP Explainability",
    description: "Built-in transparency for model trust",
  },
  {
    icon: "/4A.png",
    title: "Monitoring & Drift Alerts",
    description: "Keep tabs on performance with real-time alerts",
  },
  {
    icon: "/5A.png",
    title: "Versioning & Rollbacks",
    description: "Safely iterate, release, and revert models",
  },
  {
    icon: "/6A.png",
    title: "FastAPI-Ready",
    description: "Deploy models as APIs, ready for production integration",
  },
  {
    icon: "/7A.png",
    title: "Data Preprocessing Automation",
    description: "Clean, scale, and encode data instantly",
  },
  {
    icon: "/8A.png",
    title: "Exploratory Data Analysis (EDA)",
    description: "Get insights quickly — no code needed",
  },
  {
    icon: "/9A.png",
    title: "Auto Feature Engineering",
    description: "Maximize accuracy with smart feature creation",
  },
];

const AutomindFeatures: React.FC = () => {
  return (
    <section className="bg-white text-black py-20 px-4 sm:px-6 md:px-8 lg:px-12 font-[Satoshi]">
      <div className="text-center mb-20">
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6">
          WHAT CAN YOU DO WITH AUTOMIND?
        </h2>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-20 gap-y-24 w-full max-w-7xl mx-auto">
        {features.map((feature, idx) => (
          <div key={idx} className="flex items-start gap-6 w-full max-w-md">
            <div className="flex-shrink-0">
              <div className="bg-[#2B2B2B] rounded-full w-10 h-10 flex items-center justify-center">
                <Image 
                  src={feature.icon} 
                  alt={feature.title} 
                  width={24} 
                  height={24}
                  className="w-5 h-5"
                />
              </div>
            </div>
            <div>
              <h3 className="font-semibold text-black text-lg sm:text-xl mb-2">
                {feature.title}
              </h3>
              <p className="text-sm sm:text-base text-gray-700 leading-relaxed">
                {feature.description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default AutomindFeatures;