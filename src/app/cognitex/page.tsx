"use client";
import { useEffect } from "react";
import CognitexFeatures from "../../../components/Cognitex/features";
import IndustryUseCases from "../../../components/Cognitex/industryUse";
import PlatformHighlights from "../../../components/Cognitex/platform";
import TopComponent from "../../../components/Cognitex/top";
import KeyProofPoints from "../../../components/Cognitex/proofPoints";
import CallToAction from "../../../components/Cognitex/bottom";
import Scroll from "../../../components/Landing/infiniteScroll";
import { useFooterBackground } from "../../../context/FooterBackgroundContext";

export default function Cognitex() {
  const { setBackgroundColor } = useFooterBackground();
      
      useEffect(() => {
          setBackgroundColor("#FFFFFF");
          
          return () => {
              setBackgroundColor("#000000");
          };
      }, [setBackgroundColor]);
  return (
    <div>
        <TopComponent />
        <IndustryUseCases />
        <CognitexFeatures />
        <PlatformHighlights />
        <KeyProofPoints />
        <CallToAction />
        <Scroll />
    </div>
  );
}