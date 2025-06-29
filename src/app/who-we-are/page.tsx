import CallToActionSection from "../../../components/Who-we-are/bottom";
import TeamSection from "../../../components/Who-we-are/Building";
import Tools from "../../../components/Who-we-are/GenAi";
import OperatingSystemSection from "../../../components/Who-we-are/Operating";
import FlowingBanner from "../../../components/Who-we-are/Scroll";
import TopComponent from "../../../components/Who-we-are/top";
import HeroSection from "../../../components/Who-we-are/WhoWeAre";
export default function WhoWeAre() {
return(
    <div>
        <TopComponent />
        <HeroSection />
        <OperatingSystemSection />
        <TeamSection />
        <FlowingBanner />
        <Tools />
        <CallToActionSection />
    </div>
)
}