"use client";
import AiNativeIndia from "../../../components/GCC/aiNative";
import GccSection from "../../../components/GCC/botModel";
import FaqSection from "../../../components/GCC/bottom";
import FutureGCCSection from "../../../components/GCC/futureGCC";
import GCCSection from "../../../components/GCC/iconCards";
import GccServicesSection from "../../../components/GCC/services";
import TopComponent from "../../../components/GCC/top";
import WhyTrustStack from "../../../components/GCC/trustStack";
import WhyStack from "../../../components/GCC/whyStack";
import { useFooterBackground } from "../../../context/FooterBackgroundContext";
import { useEffect, useState } from "react";
import { useRouter } from 'next/navigation';

export default function GCCPage() {
  const { setBackgroundColor } = useFooterBackground();
  const router = useRouter();
  const [isLoading, setIsLoading] = useState(true);
  
  useEffect(() => {
    setBackgroundColor("#000000");
    
    // Check if user has selected India region
    const selectedRegion = localStorage.getItem("selectedRegion");
    
    if (selectedRegion !== "india") {
      localStorage.setItem("selectedRegion", "india");
      
      const confirmRedirect = window.confirm(
        "The GCC page is only available for the India region. Your region has been switched to India. Click OK to continue."
      );
      
      if (confirmRedirect) {
        window.location.reload();
      } else {
        router.push('/');
      }
    } else {
      setIsLoading(false);
    }
  }, [setBackgroundColor, router]);

  if (isLoading) {
    return (
      <div className="h-screen flex items-center justify-center">
        <div className="animate-spin rounded-full h-16 w-16 border-t-2 border-b-2 border-[#D3B6FB]"></div>
      </div>
    );
  }

  return (
    <div>
        <TopComponent />
        <WhyStack />
        <AiNativeIndia />
        <GccSection />
        <GCCSection />
        <FutureGCCSection />
        <WhyTrustStack />
        <GccServicesSection />
        <FaqSection />
    </div>
  );
}