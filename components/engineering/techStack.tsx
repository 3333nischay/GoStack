"use client";

import React from "react";
import IconFlipCard from "../cards/iconFlipping";

const TechStack = () => {
  const cards = [
    {
      title: "LANGUAGES",
      icon: "/engineering/1B.png",
      backText: "Python, TypeScript, Golang, Rust"
    },
    {
      title: "FRAMEWORKS",
      icon: "/engineering/2B.png",
      backText: "Next.js, React, Node.js, FastAPI, Django"
    },
    {
      title: "CLOUD",
      icon: "/engineering/3B.png",
      backText: "GCP, AWS, Kubernetes, Vercel"
    },
    {
      title: "AI LAYER",
      icon: "/engineering/4B.png",
      backText: "OpenAI, LangChain, Pinecone, Whisper"
    },
    {
      title: "TOOLING",
      icon: "/engineering/5B.png",
      backText: "Figma, PostHog, Amplitude, GitHub Actions"
    },
    {
      title: "COMPLIANCE",
      icon: "/engineering/6B.png",
      backText: "GDPR, HIPAA, SOC2, Alignment, Modular Repos"
    },
  ];

  return (
    <section className="bg-white text-black font-[Satoshi] px-4 py-20 text-center">
      <h2 className="text-3xl sm:text-6xl font-semibold mb-12">
        <span className="font-bold text-black">Tech Stack</span>{" "}
        <span className="font-normal text-black">That Gets You There</span>
      </h2>

      <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-y-6 -gap-x-6 place-items-center">
        {cards.map((card, index) => (
          <IconFlipCard
            key={index}
            frontText={card.title}
            backText={card.backText}
            width="w-[220px] sm:w-[240px]"
            height="h-[140px]"
            textColor="white"
            textSize="text-xl sm:text-2xl font-medium"
            backTextSize="text-lg"
            iconSrc={card.icon}
            iconPosition="top-4 left-4"
            iconSize={24}
            textAlignment="bottom"
          />
        ))}
      </div>
    </section>
  );
};

export default TechStack;