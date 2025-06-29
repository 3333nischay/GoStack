import CallToAction from "../../../components/appliedAi/callToAction";
import PlatformAdvantage from "../../../components/appliedAi/advantage";
import FeatureCards from "../../../components/appliedAi/application";
import RealResults from "../../../components/appliedAi/realResults";
import CoreServices from "../../../components/appliedAi/services";
import TechStack from "../../../components/appliedAi/teckStack";
import TopComponent from "../../../components/appliedAi/top";
import WhyItMatters from "../../../components/appliedAi/whyItMatters";
import WhyStack from "../../../components/appliedAi/whyStack";
import Scroll from "../../../components/Landing/infiniteScroll";

export default function Page() {
  return (
    <div>
        <TopComponent />
        <FeatureCards />
        <CoreServices />
        <WhyItMatters />
        <RealResults />
        <PlatformAdvantage />
        <TechStack />
        <WhyStack />
        <CallToAction />
        <Scroll />
    </div>
  );
}