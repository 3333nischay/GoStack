import CallToAction from "../../../components/dataViz/callToAction";
import FeatureCards from "../../../components/dataViz/application";
import RealResults from "../../../components/dataViz/realResults";
import CoreServices from "../../../components/dataViz/services";
import TechStack from "../../../components/dataViz/teckStack";
import TopComponent from "../../../components/dataViz/top";
import WhyItMatters from "../../../components/dataViz/whyItMatters";
import WhyStack from "../../../components/dataViz/whyStack";
import Scroll from "../../../components/Landing/infiniteScroll";

export default function Page() {
  return (
    <div>
        <TopComponent />
        <FeatureCards />
        <CoreServices />
        <WhyItMatters />
        <RealResults />
        <WhyStack />
        <CallToAction />
        <Scroll />
    </div>
  );
}