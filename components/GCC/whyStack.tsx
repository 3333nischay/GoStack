import React from "react";

const WhyStack: React.FC = () => {
  return (
    <div className="w-full relative bg-white text-black px-6 sm:px-10 md:px-20 py-20 font-[Satoshi] overflow-hidden">
      
      {/* Content with higher z-index */}
      <div className="relative z-10">
        <div className="max-w-6xl mx-auto flex flex-row gap-10 md:gap-20">
          {/* Left Content */}
          <div className="md:w-1/2 text-[10px] md:text-xl leading-relaxed space-y-6">
            <p>
              At Stack, we help <strong>global companies</strong> unlock India's deep
              tech, product, data, and operations talent through fully managed,
              culturally aligned <strong>Global Capability Centres</strong>.
            </p>
            <p>
              From 0-to-launch, we <strong>design and scale your GCC</strong> with{" "}
              <strong>AI-powered hiring</strong>, <strong>embedded leadership</strong>,{" "}
              <strong>agile execution</strong>, and <strong>regulatory peace of mind</strong>.
            </p>
          </div>

          {/* Right Heading */}
          <div className="md:w-1/2 flex md:items-start md:justify-end">
            <div className="text-right">
              <h2 className="text-3xl md:text-8xl font-bold">why</h2>
              <h2 className="text-3xl md:text-8xl font-[200]">STACK?</h2>
            </div>
          </div>
        </div>

        {/* Lower Section - Consistent gap */}
        <div className="max-w-4xl mx-auto mt-14 md:mt-32 text-center">
          <h3 className="text-sm md:text-3xl font-bold uppercase tracking-wide mb-8">
            Your Full-Stack Partner For Building &<br/> Scaling Global Capability Centers In India
          </h3>
          <p className="text-[10px] md:text-xl leading-relaxed mb-6">
            Whether you're a global enterprise or an ambitious scale-up, Stack helps you{" "}
            <strong>build <br/>high-performance, innovation-ready GCCs</strong> in India—
            <strong>faster, smarter, and leaner</strong>.
          </p>
          <p className="text-[10px] md:text-xl leading-relaxed">
            We bring <strong>deep execution muscle</strong>, <strong>AI-led systems</strong>, and a
            cross-border mindset to<br/> design, build, and scale your{" "}
            <strong>Global Capability Center</strong> as a true extension of your<br/>
            <strong>global operations</strong>.
          </p>
        </div>
      </div>
    </div>
  );
};

export default WhyStack;