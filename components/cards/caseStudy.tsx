'use client';

import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

interface CaseStudyCardProps {
  title: string;
  link: string;
  imageSrc?: string;
}

const CaseStudyCard: React.FC<CaseStudyCardProps> = ({ title, link, imageSrc }) => {
  return (
    <Link href={link} className="block w-full pointer-events-auto">
      <div className="w-full max-w-md overflow-hidden rounded-3xl bg-[#1A1A1A] text-white shadow-lg transition-all duration-300 hover:scale-[1.02] hover:shadow-[0_8px_30px_rgba(151,71,255,0.2)] font-[Satoshi]">
        <div className="relative h-48 w-full bg-white">
          {imageSrc ? (
            <Image
              src={imageSrc}
              alt={title}
              fill
              className="object-cover"
              priority
            />
          ) : (
            <div className="h-full w-full bg-gradient-to-r from-purple-900 to-gray-800" />
          )}
        </div>
        <div className="p-6">
          <p className="text-sm font-semibold text-purple-300 uppercase font-[Satoshi]">Case Study</p>
          <h3 className="mt-2 text-2xl font-semibold font-[Satoshi]">{title}</h3>
          <div className="mt-6 inline-block text-purple-400 transition-colors font-medium font-[Satoshi]">
            Read more <span className="inline-block transform transition-transform ml-1 group-hover:translate-x-1">→</span>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default CaseStudyCard;