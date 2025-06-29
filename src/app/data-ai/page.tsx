"use client";
import { useEffect } from "react";
import RealResults from "../../../components/data-ai/realResults";
import FeatureCards from "../../../components/data-ai/application";
import CoreServices from "../../../components/data-ai/services";
import TopComponent from "../../../components/data-ai/top";
import WhyItMatters from "../../../components/data-ai/whyItMatters";
import WhyStack from "../../../components/data-ai/whyStack";
import CallToAction from "../../../components/data-ai/callToAction";
import TechStack from "../../../components/data-ai/teckStack";
import Scroll from "../../../components/Landing/infiniteScroll";
import { useFooterBackground } from "../../../context/FooterBackgroundContext";

export default function DataAIPage() {
    const { setBackgroundColor } = useFooterBackground();
    
    useEffect(() => {
        setBackgroundColor("#FFFFFF");
        
        return () => {
            setBackgroundColor("#000000");
        };
    }, [setBackgroundColor]);
    return (
        <>
            <TopComponent/>
            <FeatureCards/>
            <CoreServices/>
            <WhyItMatters/>
            <RealResults/>
            <WhyStack/>
            <TechStack/>
            <CallToAction/>
            <Scroll/>
        </>
    )
}