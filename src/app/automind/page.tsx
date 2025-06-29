"use client";
import { useEffect } from "react";
import AutomindFeatures from "../../../components/automind/features";
import PlatformHighlights from "../../../components/automind/highlights";
import IndustryUseCases from "../../../components/automind/industryUse";
import RealResults from "../../../components/automind/results";
import TopComponent from "../../../components/automind/top";
import KeyProofPoints from "../../../components/automind/proofs";
import CallToAction from "../../../components/automind/bottom";
import Scroll from "../../../components/Landing/infiniteScroll";
import { useFooterBackground } from "../../../context/FooterBackgroundContext";

export default function AutomindPage() {
    const { setBackgroundColor } = useFooterBackground();
    
    useEffect(() => {
        setBackgroundColor("#FFFFFF");
        
        return () => {
            setBackgroundColor("#000000");
        };
    }, [setBackgroundColor]);

    return(
        <div className="bg-white">
            <TopComponent/>
            <IndustryUseCases/>
            <AutomindFeatures/>
            <PlatformHighlights/>
            <RealResults/>
            <KeyProofPoints/>
            <CallToAction/>
            <Scroll/>
        </div>
    )
}