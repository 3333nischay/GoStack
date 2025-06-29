import React from "react";
import Image from "next/image";

const items = [
  {
    icon: "/icon9.png",
    title: "Deep India Network",
    description:
      "Access to real estate, local talent, legal & compliance expertise.",
  },
  {
    icon: "/icon10.png",
    title: "Proven BOT Experience",
    description:
      "We've operationalized GCCs across industries — from blueprint to handover.",
  },
  {
    icon: "/icon11.png",
    title: "Platform DNA",
    description:
      "We don't just staff — we engineer scalable systems that work.",
  },
  {
    icon: "/icon13.png",
    title: "AI-Native Thinking",
    description:
      "Maintain consistent quality control with iterative workflow adaptation and agility as your training needs change.",
  },
  {
    icon: "/icon12.png",
    title: "Curated Talent Pods",
    description:
      "No body shopping. We build high-performing pods aligned with your mission.",
  },
];

const WhyTrustStack = () => {
  return (
    <section className="w-full bg-black text-white px-6 py-16 font-[Satoshi]">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row gap-8">
        {/* Left heading */}
        <div className="flex-shrink-0 md:w-1/3 flex items-start justify-center md:justify-start my-auto">
          <h2 className="text-white text-3xl sm:text-4xl md:text-5xl font-semibold leading-tight text-center md:text-left">
            Why Companies <br />
            Trust <span className="text-[#B49AFD]">Stack</span>
          </h2>
        </div>

        {/* Right content */}
        <div className="md:w-2/3 relative">
          {/* vertical line - now showing on all screen sizes */}
          <div className="absolute left-[14px] top-2 h-full w-[2px] bg-[#5C5C5C]/40" />

          <div className="flex flex-col gap-10">
            {items.map((item, index) => (
              <div key={index} className="flex items-start gap-4 relative">
                {/* Icon with circle */}
                <div className="relative z-10 shrink-0">
                  <div className="w-9 h-9 rounded-full bg-[#2A2A2A] flex items-center justify-center">
                    <Image
                      src={item.icon}
                      alt={item.title}
                      width={20}
                      height={20}
                      className="object-contain w-auto h-auto"
                    />
                  </div>
                </div>

                {/* Textual content */}
                <div className="text-left max-w-xl">
                  <h3 className="font-semibold text-white text-base md:text-lg">
                    {item.title}
                  </h3>
                  <p className="text-sm md:text-base text-gray-300 mt-1">
                    {item.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyTrustStack;