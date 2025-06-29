'use client';

import React from 'react';
import NormalCard from '../cards/normalCard';

const KeyProofPoints: React.FC = () => {
  return (
    <section className="bg-black w-full px-4 py-16 font-[Satoshi]">
      <h2 className="text-white text-center font-bold text-2xl md:text-3xl mb-12">
        KEY PROOF POINTS
      </h2>

      <div className="max-w-4xl mx-auto">
        <div className="flex flex-col sm:flex-row justify-center items-center mb-8 md:-ml-28 lg:-ml-40">
          <div className="mb-6 sm:mb-0 sm:mr-6">
            <NormalCard
              width="w-[240px] lg:w-[320px]"
              height="h-[120px] md:h-[140px]"
              text="Models Live In Under 3 Weeks"
            />
          </div>
          <div>
            <NormalCard
              width="w-[240px] lg:w-[320px]"
              height="h-[120px] md:h-[140px]"
              text="40% Faster Time To Value Vs Traditional Pipelines"
            />
          </div>
        </div>

        <div className="flex flex-col sm:flex-row justify-center items-center md:ml-28 lg:ml-40">
          <div className="mb-6 sm:mb-0 sm:mr-6">
            <NormalCard
              width="w-[240px] lg:w-[320px]"
              height="h-[120px] md:h-[140px]"
              text="70% Drop In Engineering Effort"
            />
          </div>
          <div>
            <NormalCard
              width="w-[240px] lg:w-[320px]"
              height="h-[120px] md:h-[140px]"
              text="100% Model Explainability With SHAP Visualizations"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default KeyProofPoints;