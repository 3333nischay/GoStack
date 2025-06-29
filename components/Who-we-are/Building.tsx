'use client';

export default function TeamSection() {
  return (
    <section className="w-full py-16 sm:py-20 md:py-24 lg:py-14 bg-black font-[Satoshi]">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 md:px-0 text-center">
        {/* Top section with heading */}
        <div className="mb-12 sm:mb-16 md:mb-20">
          <h2 className="text-[#A35CFF] font-bold text-xl sm:text-4xl md:text-5xl lg:text-5xl leading-tight">
            <span className="whitespace-nowrap font-[400]">REAL <span className='font-extrabold'>PEOPLE</span><span className="whitespace-nowrap font-[400]"> NO </span><span className='font-extrabold'>ROBOTS</span></span>
            <span className="block mt-2 sm:mt-4 font-[400]">(YET).</span>
          </h2>
        </div>

        {/* Middle section with main text */}
        <div className="space-y-8 sm:space-y-10 md:space-y-12">
          <p className="text-[#FFFFFF] font-[400] text-[9px] sm:text-sm md:text-base lg:text-lg tracking-wider">
            <span className="block mb-1 whitespace-nowrap">We're a cross-continental crew — from the uk, europe, and india —</span>
            <span className="block mb-1 whitespace-nowrap">made up of product thinkers, engineers, designers, and data nerds.</span>
            <span className="block mb-1 whitespace-nowrap">Some of us came from big tech. some from tiny startups.</span>
            <span className="block whitespace-nowrap">But all of us believe one thing:</span>
          </p>

          <h2 className="text-white font-[400] text-[11.5px] sm:text-xl md:text-2xl lg:text-3xl tracking-wider whitespace-nowrap">
            Tech should be <span className="text-[#A35CFF] font-semibold">intelligent, intuitive, </span>and <span className="text-[#A35CFF] font-semibold">intentional</span>
          </h2>

          <p className="text-[#FFFFFF] text-[8px] sm:text-base md:text-lg leading-relaxed">
            You'll find us in your Slack threads, whiteboards, and Notion docs — your favourite<br className="hidden sm:block" />
            coworkers who happen to know systems thinking, storytelling, and shipping inside out.
          </p>
        </div>
      </div>
    </section>
  );
}