"use client";
import Image from "next/image";
import Link from "next/link";
import { useState, useEffect, useRef } from "react";
import NewButton from "./buttons/newButton";
import { useRouter } from 'next/navigation';
import GetInTouchPopupForm from "./Forms/getInTouch";

export default function Navbar() {
  const router = useRouter();
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);
  const [openSubmenu, setOpenSubmenu] = useState<string | null>(null);
  const [selectedRegion, setSelectedRegion] = useState<string>("UK");
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const navRef = useRef<HTMLDivElement>(null);
  const [isGetInTouchFormOpen, setIsGetInTouchFormOpen] = useState(false);

   const openGetInTouchForm = () => {
    setIsGetInTouchFormOpen(true);
    if (mobileMenuOpen) setMobileMenuOpen(false);
     };

    const closeGetInTouchForm = () => {
    setIsGetInTouchFormOpen(false);
    };

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (navRef.current && !navRef.current.contains(event.target as Node)) {
        setOpenDropdown(null);
        setOpenSubmenu(null);
      }
    };
    
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  useEffect(() => {
    const storedRegion = localStorage.getItem("selectedRegion");
    if (storedRegion) {
      setSelectedRegion(storedRegion);
    }
  }, []);

  const changeRegion = (region: string) => {
    if (region !== selectedRegion) {
      setSelectedRegion(region);
      localStorage.setItem("selectedRegion", region);
      setOpenDropdown(null);
      router.push('/');
    } else {
      setOpenDropdown(null);
    }
  };

  const toggleDropdown = (dropdown: string) => {
    if (openDropdown === dropdown) {
      setOpenDropdown(null);
    } else {
      setOpenDropdown(dropdown);
    }
    setOpenSubmenu(null);
  };

  const toggleSubmenu = (submenu: string, event: React.MouseEvent) => {
    event.stopPropagation();
    
    if (openSubmenu === submenu) {
      setOpenSubmenu(null);
    } else {
      setOpenSubmenu(submenu);
    }
  };

  const DropdownLink: React.FC<{
    href: string;
    children: React.ReactNode;
    className?: string;
    onClick?: () => void;
  }> = ({ href, children, className, onClick }) => (
    <Link 
      href={href} 
      className={className || ""}
      onClick={() => {
        setOpenDropdown(null);
        setOpenSubmenu(null);
        setMobileMenuOpen(false);
        if (onClick) onClick();
      }}
    >
      {children}
    </Link>
  );

  return (
    <nav ref={navRef} className="fixed top-0 left-0 right-0 z-50 bg-transparent py-2 px-3 sm:px-4 font-['Space_Mono']">
      <div className="max-w-7xl mx-auto flex justify-between items-center rounded-full px-3 sm:px-4 py-2 bg-black/40 backdrop-blur-sm shadow-lg">
        
        {/* Logo */}
        <Link href="/" className="flex items-center space-x-1 sm:space-x-2">
          <div className="relative w-7 h-7 sm:w-8 sm:h-8 lg:w-10 lg:h-10">
            <Image 
              src="/stack logo.png" 
              alt="Stack Logo" 
              fill
              className="object-contain"
            />
          </div>
          <span className="text-xl sm:text-2xl lg:text-3xl font-[400] text-[#F0E6FF] font-['Space_Mono']">STACK</span>
        </Link>

        {/* Mobile/Tablet Menu Button */}
        <button 
          className="lg:hidden flex items-center text-white"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-6 h-6">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={mobileMenuOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"} />
          </svg>
        </button>

        {/* Desktop Navigation */}
        <div className="hidden lg:flex items-center justify-center flex-1 space-x-8">
          <div className="flex items-center relative">
            <div 
              className="flex items-center cursor-pointer" 
              onClick={() => toggleDropdown('solutions')}
            >
              <span className="text-base text-white hover:text-purple-600 font-['Space_Mono']">Solutions</span>
              <button className="p-1 flex items-center">
                <div className="relative w-5 h-5">
                  <Image 
                    src="/arrow.png" 
                    alt="Dropdown Arrow" 
                    fill
                    className="object-contain"
                  />
                </div>
              </button>
            </div>
            <div 
              className={`
                absolute top-full left-1/2 -translate-x-1/2 mt-2 w-72
                rounded-3xl text-white font-['Space_Mono'] text-sm space-y-6
                overflow-hidden transition-all duration-300 ease-in-out
                shadow-[0_4px_12px_rgba(101,69,212,0.25),_0_2px_6px_rgba(101,69,212,0.3)]
                z-10
                ${openDropdown === 'solutions' ? 'max-h-[500px] opacity-100 p-6 bg-black/70 backdrop-blur-sm' : 'max-h-0 opacity-0 p-0'}
              `}
            >
              <ul className="space-y-4">
                {/* Added Solutions link at the top */}
                <li className="font-medium">
                  <DropdownLink href="/solutions" className="hover:text-purple-600 font-bold">Solutions</DropdownLink>
                </li>
                
                <li className="font-medium">
                  <div className="flex justify-between items-center cursor-pointer"
                       onClick={(e) => toggleSubmenu('platforms', e)}>
                    <span>Platforms</span>
                    <div className="relative w-3 h-3">
                      <Image 
                        src="/arrow.png" 
                        alt="Submenu Arrow" 
                        fill
                        className={`object-contain transition-transform ${openSubmenu === 'platforms' ? 'rotate-180' : ''}`}
                      />
                    </div>
                  </div>
                  <ul className={`pl-6 space-y-3 overflow-hidden transition-all ${openSubmenu === 'platforms' ? 'max-h-40 mt-3' : 'max-h-0'}`}>
                    <li className="flex items-start gap-3">
                      <span>↳</span>
                      <DropdownLink href="/cognitex" className="hover:text-purple-600">Cognitex</DropdownLink>
                    </li>
                    <li className="flex items-start gap-3">
                      <span>↳</span>
                      <DropdownLink href="/automind" className="hover:text-purple-600">Automind</DropdownLink>
                    </li>
                  </ul>
                </li>
                
                <li className="font-medium">
                  <div className="flex justify-between items-center cursor-pointer"
                       onClick={(e) => toggleSubmenu('data-ai-services', e)}>
                    <span>Data & AI Services</span>
                    <div className="relative w-3 h-3">
                      <Image 
                        src="/arrow.png" 
                        alt="Submenu Arrow" 
                        fill
                        className={`object-contain transition-transform ${openSubmenu === 'data-ai-services' ? 'rotate-180' : ''}`}
                      />
                    </div>
                  </div>
                  <ul className={`pl-6 space-y-3 overflow-hidden transition-all ${openSubmenu === 'data-ai-services' ? 'max-h-72 mt-3' : 'max-h-0'}`}>
                    <li className="flex items-start gap-3">
                      <span>↳</span>
                      <DropdownLink href="/data-ai" className="hover:text-purple-600">
                        Smart Data Engineering Suite
                      </DropdownLink>
                    </li>
                    <li className="flex items-start gap-3">
                      <span>↳</span>
                      <DropdownLink href="/mlOps" className="hover:text-purple-600">
                        Insightful Analytics & Visualization Services
                      </DropdownLink>
                    </li>
                    <li className="flex items-start gap-3">
                      <span>↳</span>
                      <DropdownLink href="/dataVizualization" className="hover:text-purple-600">
                        Applied AI & Data Science Services
                      </DropdownLink>
                    </li>
                    <li className="flex items-start gap-3">
                      <span>↳</span>
                      <DropdownLink href="/appliedAI" className="hover:text-purple-600">
                        Intelligent MLOps Services
                      </DropdownLink>
                    </li>
                  </ul>
                </li>

                <li className="font-medium"><DropdownLink href="/engineering" className="hover:text-purple-600">Custom Engineering Solutions</DropdownLink></li>
                <li className="font-medium"><DropdownLink href="/products" className="hover:text-purple-600">Products</DropdownLink></li>
              </ul>
            </div>
          </div>
          
          <div className="flex items-center">
            <Link href="/blog" className="text-base text-white hover:text-purple-600 font-['Space_Mono']">Insights</Link>
          </div>
          
          <div className="flex items-center">
            <Link href="/talent-stack" className="text-base text-white hover:text-purple-600 font-['Space_Mono']">The Talent Stack</Link>
          </div>
          
          <Link href="/who-we-are" className="text-base text-white hover:text-purple-600 font-['Space_Mono']">Who we are</Link>
          
          {selectedRegion === "india" && (
            <Link href="/gcc" className="text-base text-white hover:text-purple-600 font-['Space_Mono']">
              GCC
            </Link>
          )}
        </div>
        
        <div className="hidden lg:flex items-center">
          <div className="relative mr-4">
            <button 
              onClick={() => toggleDropdown('region')} 
              className="flex items-center space-x-1 text-white text-sm font-['Space_Mono']"
            >
              <span>{selectedRegion === "india" ? "India" : "UK"}</span>
              <div className="relative w-4 h-4">
                <Image 
                  src="/arrow.png" 
                  alt="Region Selector" 
                  fill
                  className="object-contain"
                />
              </div>
            </button>
            
            <div 
              className={`
                absolute top-full right-0 mt-2 w-32
                rounded-xl text-white font-['Space_Mono'] text-sm
                overflow-hidden transition-all duration-300 ease-in-out
                shadow-[0_4px_12px_rgba(101,69,212,0.25),_0_2px_6px_rgba(101,69,212,0.3)]
                z-10
                ${openDropdown === 'region' ? 'max-h-40 opacity-100 p-3 bg-black/70 backdrop-blur-sm' : 'max-h-0 opacity-0 p-0'}
              `}
            >
              <ul className="space-y-2">
                <li 
                  className={`cursor-pointer hover:text-purple-600 ${selectedRegion === "UK" ? "text-purple-600" : ""}`}
                  onClick={() => changeRegion("UK")}
                >
                  UK
                </li>
                <li 
                  className={`cursor-pointer hover:text-purple-600 ${selectedRegion === "india" ? "text-purple-600" : ""}`}
                  onClick={() => changeRegion("india")}
                >
                  India
                </li>
              </ul>
            </div>
          </div>
        
          <NewButton 
            text="Get In Touch" 
            size="sm"
            onClick={openGetInTouchForm} 
            bgColor="#D3B6FB"
            textColor="black"
            className="text-sm font-[400] font-[Satoshi]"
          />
        </div>
      </div>
      <div className={`
        fixed inset-x-0 top-0 h-[80vh] bg-black/95 backdrop-blur-md z-40 
        transition-all duration-300 ease-in-out rounded-b-3xl shadow-lg
        overflow-y-auto
        ${mobileMenuOpen ? 'translate-y-0' : '-translate-y-full'}
      `}>
        {/* Mobile menu header with back button */}
        <div className="sticky top-0 bg-black/90 backdrop-blur-md px-6 py-4 flex justify-between items-center border-b border-gray-800">
          <h2 className="text-white text-lg font-semibold">Menu</h2>
          <button 
            onClick={() => setMobileMenuOpen(false)}
            className="p-2 text-white rounded-full hover:bg-gray-800 transition-colors"
          >
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-6 h-6">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>

        <div className="flex flex-col space-y-4 text-white px-6 py-4">
          <div className="border-b border-gray-700 pb-4">
            <button 
              onClick={() => toggleDropdown('mobile-solutions')} 
              className="flex justify-between items-center w-full py-2"
            >
              <span className="text-lg font-['Space_Mono']">Solutions</span>
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className={`w-5 h-5 transition-transform ${openDropdown === 'mobile-solutions' ? 'rotate-180' : ''}`}>
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
            </button>
            
            <div className={`transition-all duration-300 overflow-hidden ${openDropdown === 'mobile-solutions' ? 'max-h-[600px] mt-2' : 'max-h-0'}`}>
              <ul className="mb-4">
                  <li>
                    <DropdownLink href="/solutions" className="py-2 block text-purple-400 hover:text-purple-600 font-bold">Solutions</DropdownLink>
                  </li>
                </ul>
              <div className="mb-4">
                <button
                  onClick={(e) => toggleSubmenu('mobile-platforms', e)}
                  className="flex justify-between items-center w-full text-purple-400 font-medium py-2"
                >
                  <span>Platforms</span>
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className={`w-4 h-4 transition-transform ${openSubmenu === 'mobile-platforms' ? 'rotate-180' : ''}`}>
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </button>
                
                <ul className={`pl-4 space-y-3 transition-all overflow-hidden ${openSubmenu === 'mobile-platforms' ? 'max-h-40 mt-2' : 'max-h-0'}`}>
                  <li>
                    <DropdownLink href="/cognitex" className="hover:text-purple-600">Cognitex</DropdownLink>
                  </li>
                  <li>
                    <DropdownLink href="/automind" className="hover:text-purple-600">Automind</DropdownLink>
                  </li>
                </ul>
              </div>
              
              <div className="mb-4">
                <button
                  onClick={(e) => toggleSubmenu('mobile-data-ai', e)}
                  className="flex justify-between items-center w-full text-purple-400 font-medium py-2"
                >
                  <span>Data & AI Services</span>
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className={`w-4 h-4 transition-transform ${openSubmenu === 'mobile-data-ai' ? 'rotate-180' : ''}`}>
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </button>
                
                <ul className={`pl-4 space-y-3 transition-all overflow-hidden ${openSubmenu === 'mobile-data-ai' ? 'max-h-72 mt-2' : 'max-h-0'}`}>
                  <li>
                    <DropdownLink href="/data-ai" className="hover:text-purple-600">
                      Smart Data Engineering Suite
                    </DropdownLink>
                  </li>
                  <li>
                    <DropdownLink href="/mlOps" className="hover:text-purple-600">
                      Insightful Analytics & Visualization
                    </DropdownLink>
                  </li>
                  <li>
                    <DropdownLink href="/dataVizualization" className="hover:text-purple-600">
                      Applied AI & Data Science
                    </DropdownLink>
                  </li>
                  <li>
                    <DropdownLink href="/appliedAI" className="hover:text-purple-600">
                      Intelligent MLOps Services
                    </DropdownLink>
                  </li>
                </ul>
              </div>
              
              <ul className="space-y-3">
                <li>
                  <DropdownLink href="/engineering" className="hover:text-purple-600">Custom Engineering Solutions</DropdownLink>
                </li>
                <li>
                  <DropdownLink href="/products" className="hover:text-purple-600">Products</DropdownLink>
                </li>
              </ul>
            </div>
          </div>
          <div className="border-b border-gray-700 pb-4">
            <button
              className="flex justify-between items-center w-full py-2"
              onClick={()=> window.location.href='/blog'}
            >
              <span className="text-lg font-['Space_Mono']">Insights</span>
            </button>
          </div>

          <div className="border-b border-gray-700 pb-4">
            <button
              className="flex justify-between items-center w-full py-2"
              onClick={()=> window.location.href='/talent-stack'}
            >
              <span className="text-lg font-['Space_Mono']">The Talent Stack</span>
            </button>
          </div>

          <Link 
            href="/who-we-are" 
            className="text-lg py-2 font-['Space_Mono']"
            onClick={() => setMobileMenuOpen(false)}
          >
            Who we are
          </Link>
          
          {selectedRegion === "india" && (
            <Link 
              href="/gcc" 
              className="text-lg py-2 font-['Space_Mono']"
              onClick={() => setMobileMenuOpen(false)}
            >
              GCC
            </Link>
          )}

          <div className="border-t border-gray-700 pt-4">
            <h3 className="text-sm text-gray-400 mb-3">Region</h3>
            <div className="flex space-x-4">
              <button 
                className={`px-4 py-2 rounded-lg ${selectedRegion === "UK" ? "bg-purple-700" : "bg-gray-800"}`}
                onClick={() => changeRegion("UK")}
              >
                UK
              </button>
              <button 
                className={`px-4 py-2 rounded-lg ${selectedRegion === "india" ? "bg-purple-700" : "bg-gray-800"}`}
                onClick={() => changeRegion("india")}
              >
                India
              </button>
            </div>
          </div>

          <div className="pt-4">
            <NewButton 
              text="Get In Touch" 
              size="md"
              onClick={openGetInTouchForm}
              bgColor="#D3B6FB"
              textColor="black"
              className="w-full font-[400] font-[Satoshi]"
            />
          </div>
        </div>
      </div>
      <GetInTouchPopupForm 
        isOpen={isGetInTouchFormOpen} 
        onClose={closeGetInTouchForm} 
        buttonText="Get In Touch"
      />
    </nav>
  );
}