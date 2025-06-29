import React, { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";

interface BlogCardProps {
  title: string;
  description: string;
  imageUrl: string;
  link?: string;
  width?: string;
  height?: string;
  className?: string;
}

const BlogCard: React.FC<BlogCardProps> = ({
  title,
  description,
  imageUrl,
  link,
  width = "w-[340px]",
  height = "h-[420px]",
  className = "",
}) => {
  const [imgError, setImgError] = useState(false);
  const [isClient, setIsClient] = useState(false);
  
  useEffect(() => {
    setIsClient(true);
  }, []);
  
  const isExternalImage = imageUrl && imageUrl.startsWith('http');
  const shouldUseImageComponent = isClient && isExternalImage && !imgError;
  
  const CardContent = () => (
    <>
      <div className="relative w-full h-[180px] bg-gray-800 overflow-hidden">
        {shouldUseImageComponent ? (
          <Image
            src={imageUrl}
            alt={title}
            fill
            className="object-cover"
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            priority={false}
            onError={() => {
              console.log("Image failed to load:", imageUrl);
              setImgError(true);
            }}
          />
        ) : (
          <div className="w-full h-full flex items-center justify-center bg-gray-800 font-[Satoshi]">
            <span className="text-5xl font-bold text-white">
              {title.charAt(0)}
            </span>
          </div>
        )}
      </div>
      <div className="flex flex-col flex-1 p-4 font-[Satoshi]">
        <h3 className="text-xl sm:text-2xl font-bold text-[#F0E6FF] group-hover:text-[#D3B6FB] transition-colors duration-300 mb-2 line-clamp-2">
          {title}
        </h3>
        <p className="text-sm sm:text-base text-[#F0E6FF] group-hover:text-[#D3B6FB] transition-colors duration-300 flex-1 line-clamp-3">
          {description}
        </p>
        {link && (
          <div className="mt-4">
            <span className="text-[#D3B6FB] font-semibold group-hover:underline transition-colors duration-300 inline-flex items-center">
              Read More 
              <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
              </svg>
            </span>
          </div>
        )}
      </div>
    </>
  );
  
  const cardClasses = `rounded-xl bg-[#2A2A2A] flex flex-col overflow-hidden shadow transition-all duration-300 hover:shadow-[7px_7px_7px_-1px_#D3B6FB] group font-[Satoshi] ${width} ${height} ${className}`;

  if (!link) {
    return <div className={cardClasses}><CardContent /></div>;
  }

  if (link.startsWith('http')) {
    return (
      <a href={link} target="_blank" rel="noopener noreferrer" className={`${cardClasses} cursor-pointer`}>
        <CardContent />
      </a>
    );
  }

  return (
    <Link href={link} className={`${cardClasses} cursor-pointer`}>
      <CardContent />
    </Link>
  );
};

export default BlogCard;