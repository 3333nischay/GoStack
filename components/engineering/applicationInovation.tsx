"use client";

import React from "react";

const ApplicationInnovation = () => {
  return (
    <section className="bg-black text-white px-4 py-28 font-[Satoshi]">
      <div className="max-w-6xl mx-auto">
        {/* Main heading - right aligned */}
        <h2 className="text-4xl sm:text-6xl md:text-7xl font-bold text-right pr-0 sm:pr-4 md:pr-8 tracking-widest">
          <span className="text-[#D3B6FB]">Application Innovation</span><br/>
          <span className="text-white font-normal">Services</span>
        </h2>
        
        {/* Subtitle - right aligned */}
        <p className="mt-8 text-xl sm:text-xl md:text-2xl font-[400] text-white text-right pr-0 sm:pr-4 md:pr-8">
          <span className="tracking-wide"><span className="font-bold">Build</span> Future-Ready Apps. <span className="font-bold">Modernise</span> What <span className="font-bold">Matters</span>.</span>
        </p>
        
        {/* First highlight - right aligned */}
        <p className="mt-12 font-semibold text-2xl sm:text-3xl md:text-4xl text-white text-right pr-0 sm:pr-4 md:pr-8">
          Outdated systems slowing you down?
        </p>
        
        {/* First paragraph - right aligned, forcing 3 distinct lines */}
        <div className="mt-6 text-lg sm:text-xl md:text-2xl text-gray-200 mx-auto text-left max-w-3xl sm:ml-20 sm:mr-auto">
          <p className="lg:whitespace-nowrap">
            Whether you're wrestling with legacy code, rigid ERP platforms, or apps that can't scale, we get it.
          </p>
          <p className="lg:whitespace-nowrap">
            Today's businesses need more than patchwork fixes — they need digital agility and modern architecture.
          </p>
          <p className="lg:whitespace-nowrap">
            Smart features powered by AI will take your systems from outdated to outstanding.
          </p>
        </div>

        <div className="text-left">
          <p className="mt-12 font-semibold text-2xl sm:text-3xl md:text-4xl text-white">
            That's where Stack comes in.
          </p>
        
          {/* Second paragraph - left aligned, forcing 3 distinct lines */}
          <div className="mt-6 text-lg sm:text-xl md:text-2xl text-gray-200 mr-auto max-w-3xl">
            <p className="lg:whitespace-nowrap">
              We help you modernise and future-proof your software by building custom applications tailored to your needs.
            </p>
            <p className="lg:whitespace-nowrap">
              Transform legacy systems into cloud-native powerhouses that scale with your business demands.
            </p>
            <p className="lg:whitespace-nowrap">
              Inject AI into your workflows for speed, scalability, and long-term maintainability.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ApplicationInnovation;