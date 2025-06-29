import CallToAction from "../../../components/mlOps/callToAction";
import PlatformAdvantage from "../../../components/mlOps/advantage";
import FeatureCards from "../../../components/mlOps/application";
import RealResults from "../../../components/mlOps/realResults";
import CoreServices from "../../../components/mlOps/services";
import TechStack from "../../../components/mlOps/teckStack";
import TopComponent from "../../../components/mlOps/top";
import WhyItMatters from "../../../components/mlOps/whyItMatters";
import WhyStack from "../../../components/mlOps/whyStack";
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