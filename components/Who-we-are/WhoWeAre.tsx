"use client";

import Image from "next/image";
import { useEffect } from "react";
import { useFooterBackground } from "../../context/FooterBackgroundContext";
import NewButton from "../buttons/newButton";
import { useRouter } from 'next/navigation';

export default function HeroSection() {
  const { setBackgroundColor } = useFooterBackground();
  const router = useRouter();
    useEffect(() => {
      setBackgroundColor("#000000"); 
    }, [setBackgroundColor]);
  return (
    <section
      className="relative w-full bg-[#000000] text-[#1C0036] pt-2 py-10 overflow-hidden"
    >
<div className="relative flex flex-col items-center w-full py-16 sm:py-20 md:py-24 lg:py-10 bg-[#000000] font-[Satoshi]">
  {/* LEFT ELLIPSE STRIP - HIDDEN ON SMALL SCREENS */}
  <div className="absolute left-0 top-1/2 -translate-y-1/2 w-[200px] sm:w-[300px] h-[500px] z-10 hidden md:block">
    <Image
      src="/Ellipse 19.png"
      alt="ellipse1"
      width={120}
      height={120}
      className="absolute top-[30px] right-[50px] sm:right-[110px] rotate-[0deg]"
    />
    <Image
      src="/Ellipse 19.png"
      alt="ellipse2"
      width={120}
      height={120}
      className="absolute top-[110px] right-[150px] sm:right-[210px] rotate-[18deg]"
    />
    <Image
      src="/Ellipse 19.png"
      alt="ellipse3"
      width={120}
      height={120}
      className="absolute top-[170px] right-[60px] sm:right-[90px] rotate-[-85deg]"
    />
    <Image
      src="/Ellipse 19.png"
      alt="ellipse4"
      width={120}
      height={120}
      className="absolute top-[270px] right-[60px] sm:right-[90px] rotate-[18deg]"
    />
    <Image
      src="/Ellipse 19.png"
      alt="ellipse5"
      width={120}
      height={120}
      className="absolute top-[270px] right-[160px] sm:right-[220px] rotate-[-97deg]"
    />
    <Image
      src="/Ellipse 19.png"
      alt="ellipse6"
      width={120}
      height={120}
      className="absolute top-[380px] right-[110px] sm:right-[160px] rotate-[-85deg]"
    />
  </div>


  {/* TEXT BLOCK */}
  <div className="w-full max-w-4xl px-4 sm:px-8 text-center text-[#F0E6FF]">
    <div className="text-sm sm:text-base leading-relaxed mb-10 sm:mb-12 md:mb-14 font-[Satoshi]">
      <p className="mb-4">
        In a world overloaded with tools and underwhelming experiences,
        <br />
        we help ambitious teams cut through the chaos.
      </p>
      <p>
        Whether you're a high-growth startup or an enterprise ready for
        reinvention, we craft systems that think, adapt, and elevate — so your
        people can do what they do best.
      </p>
    </div>

    <h2 className="font-bold text-lg sm:text-xl lg:text-2xl leading-relaxed tracking-wide font-[Satoshi]">
      <span className="text-[#F0E6FF] font-[400]">You</span>{' '}
      <span className="text-[#A35CFF] font-bold">bring</span>{' '}
      <span className="text-[#F0E6FF] font-[400]">the</span>{' '}
      <span className="text-[#A35CFF] font-bold">vision</span>
    </h2>

    <h2 className="font-bold text-lg sm:text-xl lg:text-2xl leading-relaxed tracking-wide mt-2 font-[Satoshi]">
      <span className="text-[#F0E6FF] font-[400]">We bring the</span>{' '}
      <span className="text-[#A35CFF] font-bold">clarity, logic,</span>{' '}
      <span className="text-[#F0E6FF] font-[400]">and</span>{' '}
      <span className="text-[#A35CFF] font-bold">design obsession</span>
      <br />
      <span className="text-[#F0E6FF] font-[400]">to match.</span>
    </h2>

    <div className="mt-10 sm:mt-12 md:mt-14 flex justify-center">
<NewButton
    text="EXPLORE WHAT WE DO"
    bgColor="#D3B6FB"
    textColor="#000000"
    size="sm"
    className="w-[200px] sm:w-[220px] h-[40px] sm:h-[46px] text-xs sm:text-sm font-[Satoshi]"
    onClick={() => { router.push( '/#what-we-do' ); } }
  />
    </div>
  </div>

  {/* RIGHT ELLIPSE STRIP */}
  <div className="absolute right-0 top-1/2 -translate-y-1/2 w-[200px] sm:w-[300px] h-[500px] z-10 hidden md:block">
    <Image
      src="/Ellipse 19.png"
      alt="ellipse1"
      width={120}
      height={120}
      className="absolute top-[30px] left-[50px] sm:left-[110px] rotate-[0deg]"
    />
    <Image
      src="/Ellipse 19.png"
      alt="ellipse2"
      width={120}
      height={120}
      className="absolute top-[110px] left-[150px] sm:left-[210px] rotate-[18deg]"
    />
    <Image
      src="/Ellipse 19.png"
      alt="ellipse3"
      width={120}
      height={120}
      className="absolute top-[170px] left-[60px] sm:left-[90px] rotate-[-85deg]"
    />
    <Image
      src="/Ellipse 19.png"
      alt="ellipse4"
      width={120}
      height={120}
      className="absolute top-[270px] left-[60px] sm:left-[90px] rotate-[18deg]"
    />
    <Image
      src="/Ellipse 19.png"
      alt="ellipse5"
      width={120}
      height={120}
      className="absolute top-[270px] left-[160px] sm:left-[220px] rotate-[-97deg]"
    />
    <Image
      src="/Ellipse 19.png"
      alt="ellipse6"
      width={120}
      height={120}
      className="absolute top-[380px] left-[110px] sm:left-[160px] rotate-[-85deg]"
    />
  </div>
</div>
    </section>
  );
}