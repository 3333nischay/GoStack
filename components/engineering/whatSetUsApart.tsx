"use client";

import React from "react";
import NormalCard from "../cards/normalCard";
import NewButton from "../buttons/newButton";
import { useState } from "react";
import GetInTouchPopupForm from "../Forms/getInTouch";

const WhatSetsUsApart = () => {
    const [isFormOpen, setIsFormOpen] = useState(false);

    const handleFormOpen = () => {
        setIsFormOpen(true);
    }
    const handleFormClose = () => {
        setIsFormOpen(false);
    }
  return (
    <>
    <section className="font-[Satoshi] px-4 py-2 bg-white text-black">
      <div className="max-w-5xl mx-auto text-center">
        <h2 className="text-2xl sm:text-3xl md:text-5xl font-semibold">
          WHAT SETS US <span className="text-[#9747FF]">APART</span>
        </h2>

        <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 gap-6 max-w-4xl mx-auto">
          <NormalCard
            width="w-full sm:w-[90%]"
            height="h-[90px]"
            text="Prototype Free For Qualified Ideas"
            textSize="text-lg sm:text-xl"
          />
          <NormalCard
            width="w-full sm:w-[90%]"
            height="h-[90px]"
            text="Built Using Cognitex And Automind For AI Speed"
            textSize="text-lg sm:text-xl"
          />
          <NormalCard
            width="w-full sm:w-[90%]"
            height="h-[90px]"
            text="10+ MVPs Launched In Under 60 Days"
            textSize="text-lg sm:text-xl"
          />
          <NormalCard
            width="w-full sm:w-[90%]"
            height="h-[90px]"
            text="40% More Cost-Effective Than In-House Teams"
            textSize="text-lg sm:text-xl"
          />
        </div>

        <div className="bg-[#2B2B2B] rounded-xl mt-16 text-left px-6 py-8 sm:px-10 sm:py-12 text-white">
          <h3 className="font-bold text-2xl sm:text-3xl mb-8">Who We've Helped</h3>
          <ul className="list-disc pl-6 text-lg sm:text-xl space-y-8 font-[400]">
            <li className="pb-2">
              Fintech founder raised <span className="text-[#D3B6FB] font-bold text-xl sm:text-2xl">150k</span> using <span className="text-[#D3B6FB] font-bold text-xl sm:text-2xl">Stack's MVP</span> — clean scalable and pitch ready
            </li>
            <li className="pb-2">
              D2C brand launched a <span className="text-[#D3B6FB] font-bold text-xl sm:text-2xl">GPT powered MVP</span> in <span className="text-[#D3B6FB] font-bold text-xl sm:text-2xl">14 days+</span> saving build cost by <span className="text-[#D3B6FB] font-bold text-xl sm:text-2xl">60%</span> (Legacy dev cycles)
            </li>
            <li className="pb-2">
              Built a secure scalable backend with <span className="text-[#D3B6FB] font-bold text-xl sm:text-2xl">Supabase</span> — including Auth, RBAC & realtime data. Delivered in <span className="text-[#D3B6FB] font-bold text-xl sm:text-2xl">10 days</span>. Ready for enterprise pilot rollout.
            </li>
          </ul>
        </div>

        <div className="mt-12 text-center mb-10">
          <h3 className="text-xl sm:text-5xl font-semibold mb-6">Let's Build Your MVP</h3>
          <p className="text-sm sm:text-3xl mt-2 mb-6">
            Let's Start With A Free 2-Day Prototyping Sprint
          </p>
          <NewButton
            text="Book A Discovery Call"
            size="md"
            bgColor="#D3B6FB"
            textColor="black"
            onClick={handleFormOpen}
          />
        </div>
      </div>
    </section>
    <GetInTouchPopupForm
        isOpen={isFormOpen}
        onClose={handleFormClose}
        buttonText="BOOK A CALL" />

    </>
  );
};

export default WhatSetsUsApart;