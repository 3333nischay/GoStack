import React from 'react';
import Image from 'next/image';

interface TeamMemberCardProps {
  name: string;
  role: string;
  imageSrc?: string;
  linkedinUrl: string;
  position?: 'center' | 'left' | 'right';
}

const TeamMemberCard: React.FC<TeamMemberCardProps> = ({
  name,
  role,
  imageSrc,
  linkedinUrl,
  position = 'center',
}) => {
  const positionClasses = {
    center: 'items-center text-center',
    left: 'items-start text-left',
    right: 'items-end text-right',
  };

  return (
    <div className={`w-full bg-black text-white rounded-[18px] overflow-hidden flex flex-col ${positionClasses[position]} font-[Satoshi]`}>
      {/* Image container with full width and rounded top corners */}
      <div className="relative w-full aspect-[3/2.4] bg-black overflow-hidden">
        {imageSrc ? (
          <Image
            src={imageSrc}
            alt={name}
            fill
            sizes="(max-width: 768px) 150px, (max-width: 1200px) 180px, 200px"
            className="object-contain rounded-[50px]"
            style={{ maxWidth: '100%' }}
          />
        ) : (
          <div className="w-full h-full flex items-center justify-center text-gray-400 text-sm rounded-t-[18px]">
            No Image Available
          </div>
        )}
      </div>

      {/* Text section with black background */}
      <div className="py-3 px-3 flex flex-col gap-1 text-center items-center bg-black">
        <h3 className="text-base sm:text-lg font-semibold uppercase">{name}</h3>
        <p className="text-xs sm:text-sm text-white opacity-90">{role}</p>
        <a
          href={linkedinUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-1 text-center text-[#C1A4FF] text-xs font-medium inline-flex items-center gap-1 hover:underline" 
        >
          LinkedIn <span>→</span>
        </a>
      </div>
    </div>
  );
};

export default TeamMemberCard;