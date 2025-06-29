"use client";

import FixBottlenecks from "../../components/Landing/bottom";
import StillFiguring from "../../components/Landing/figuring";
import StackSection from "../../components/Landing/howWeHelp";
import ImpactStats from "../../components/Landing/impactStats";
import Scroll from "../../components/Landing/infiniteScroll";
import CardSection from "../../components/Landing/provide";
import HeroSection from "../../components/Landing/top";
import CaseStudySection from "../../components/Landing/caseStudy";
import React from "react";
import { useEffect } from "react";
import { useFooterBackground } from "../../context/FooterBackgroundContext";

export default function Home() {
    const { setBackgroundColor } = useFooterBackground();
    
      useEffect(() => {
        setBackgroundColor("#000000"); 
      }, [setBackgroundColor]);
  return (
    <div>
      <HeroSection />
      <Scroll />
      <StackSection />
      <StillFiguring />
      <ImpactStats />
      <CaseStudySection
  cards={[
    { title: 'Case study 1', link: '/cs1' },
    { title: 'Case study 2', link: '/cs2' },
    { title: 'Case study 3', link: '/cs3' },
    { title: 'Case study 4', link: '/cs4' },
  ]}
/>
      <CardSection />
      <FixBottlenecks />
    </div>
  );
}
