"use client";
import React from "react";
import Image from "next/image";

interface DeliverableItem {
  icon: string;
  title: string;
  description: string;
}

const deliverables: DeliverableItem[] = [
  {
    icon: "/engineering/1C.png",
    title: "Clickable Prototype (3—5 days)",
    description: "",
  },
  {
    icon: "/engineering/2C.png",
    title: "Functional MVP (2—3 weeks)",
    description: "",
  },
  {
    icon: "/engineering/3C.png",
    title: "User-Ready UI/UX",
    description: "",
  },
  {
    icon: "/engineering/4C.png",
    title: "Launch-Ready Code (No throwaway builds)",
    description: "",
  },
  {
    icon: "/engineering/5C.png",
    title: "Built-in Auth, Stripe, Analytics",
    description: "",
  },
  {
    icon: "/engineering/6C.png",
    title: "Scalable Architecture",
    description: "",
  },
];

const WhatWeDeliver: React.FC = () => {
  return (
    <section className="bg-black text-white py-16 px-4 sm:px-6 md:px-8 lg:px-10 font-[Satoshi]">
      <div className="text-center mb-16">
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-8">
          What We Deliver
        </h2>
      </div>

      <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-16">
        {deliverables.map((item, idx) => (
          <div key={idx} className="flex flex-col items-center text-center">
            <div className="w-16 h-16 mb-6 rounded-full bg-[#222222] flex items-center justify-center">
              <Image src={item.icon} alt={item.title} width={24} height={24} />
            </div>
            <h3 className="font-medium text-white text-lg sm:text-xl mb-2">{item.title}</h3>
            <p className="text-sm text-gray-400">{item.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default WhatWeDeliver;