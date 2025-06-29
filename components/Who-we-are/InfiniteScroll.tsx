"use client";

import Image from "next/image";
import { useEffect, useState, useRef } from "react";

const images = [
  "/image 18.png",
  "/image 24.png",
  "/image 28.png",
  "/image 29.png",
  "/image 34.png",
  "/image 30.png",
  "/image 23.png",
  "/image 25.png",
  "/image 22.png",
  "/image 26.png",
  "/image 27.png",
  "/image 31.png",
  "/image 20.png",
  "/image 19.png",
  "/image 20 (1).png",
  "/image 21.png"
];

export default function InfiniteScroll() {
  const [isLoaded, setIsLoaded] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
    const preloadImages = () => {
      const imagePromises = images.map((src) => {
        return new Promise((resolve) => {
          const img = new window.Image();
          img.onload = () => resolve(undefined);
          img.onerror = () => resolve(undefined);
          img.src = src;
        });
      });
      
      Promise.all(imagePromises).then(() => {
        setIsLoaded(true);
      });
    };
    
    preloadImages();
  }, []);

  const scrollImages = [...images, ...images, ...images, ...images];

  return (
    <div className="overflow-hidden w-full pb-0 bg-white py-8">
      {/* First row - animates */}
      <div 
        ref={containerRef}
        className={`flex gap-4 md:gap-8 lg:gap-10 ${isLoaded ? 'animate-scroll' : 'opacity-0'} mb-0`}
        style={{ 
          willChange: 'transform',
          backfaceVisibility: 'hidden'
        }}
      >
        {scrollImages.map((src, idx) => (
          <div 
            key={idx} 
            className="min-w-[100px] sm:min-w-[120px] md:min-w-[140px] flex-shrink-0"
            style={{ transform: 'translateZ(0)' }}
          >
            <div className="relative w-full h-[45px] sm:h-[55px] md:h-[65px]">
              <Image
                src={src}
                alt={`Logo ${idx % images.length + 1}`}
                fill
                sizes="(max-width: 640px) 100px, (max-width: 768px) 120px, 140px"
                className="rounded-lg object-contain"
                priority={true}
                loading="eager"
              />
            </div>
          </div>
        ))}
      </div>
      
      <style jsx global>{`
        @keyframes scroll {
          0% { transform: translate3d(0, 0, 0); }
          100% { transform: translate3d(calc(-${images.length * 100}px - ${(images.length) * 16}px), 0, 0); }
        }
        
        @media (min-width: 426px) {
          @keyframes scroll {
            0% { transform: translate3d(0, 0, 0); }
            100% { transform: translate3d(calc(-${images.length * 120}px - ${(images.length-17.88) * 32}px), 0, 0); }
          }
        }
        @media (min-width: 640px) {
          @keyframes scroll {
            0% { transform: translate3d(0, 0, 0); }
            100% { transform: translate3d(calc(-${images.length * 120}px - ${(images.length-8) * 32}px), 0, 0); }
          }
        }
        @media (min-width: 768px) {
          @keyframes scroll {
            0% { transform: translate3d(0, 0, 0); }
            100% { transform: translate3d(calc(-${images.length * 120}px - ${(images.length+10.1) * 32}px), 0, 0); }
          }
        }
        
        @media (min-width: 1024px) {
          @keyframes scroll {
            0% { transform: translate3d(0, 0, 0); }
            100% { transform: translate3d(calc(-${images.length * 140}px - ${(images.length+0.13) * 40}px), 0, 0); }
          }
        }
        
        .animate-scroll {
          animation: scroll 15s linear infinite;
        }
      `}</style>
    </div>
  );
}