import AcceleratorsSection from "../../../components/engineering/accelators";
import PlatformAdvantage from "../../../components/engineering/advantage";
import HeroSection from "../../../components/engineering/ai-native";
import FeatureCards from "../../../components/engineering/application";
import ApplicationInnovation from "../../../components/engineering/applicationInovation";
import CallToAction from "../../../components/engineering/callToAction";
import WhatWeDeliver from "../../../components/engineering/features";
import WhyStackForModernisation from "../../../components/engineering/mordenization";
import MVPSection from "../../../components/engineering/mvpSection";
import NextStepSection from "../../../components/engineering/nextSelection";
import RealResults from "../../../components/engineering/realResults";
import TechStack from "../../../components/engineering/techStack";
import TopComponent from "../../../components/engineering/top";
import WhatSetsUsApart from "../../../components/engineering/whatSetUsApart";
import WhatWeBuild from "../../../components/engineering/whatWeBuild";
import WhatWeDo from "../../../components/engineering/WhatWeDo";
import WhyGoAINative from "../../../components/engineering/whyAiNative";
import WhyItMatters from "../../../components/engineering/whyItMatters";
import WhyChooseStackSection from "../../../components/engineering/whyStack";
import CaseStudySection from "../../../components/Landing/caseStudy";
import Scroll from "../../../components/Landing/infiniteScroll";

export default function EngineeringPage() {
    return (
       <>
       <TopComponent />
       <HeroSection />
       <WhyGoAINative />
       <WhatWeBuild />
       <TechStack />
       <AcceleratorsSection />
       <NextStepSection />
       <MVPSection />
       <WhyChooseStackSection />
       <WhatWeDeliver />
       <PlatformAdvantage />
       <WhatSetsUsApart />
       <ApplicationInnovation />
       <FeatureCards />
       <WhatWeDo />
       <WhyItMatters />
       <RealResults />
       <WhyStackForModernisation />
       <CaseStudySection cards={[
            { title: 'Case study 1', link: '/cs1' },
            { title: 'Case study 2', link: '/cs2' },
            { title: 'Case study 3', link: '/cs3' },
            { title: 'Case study 4', link: '/cs4' },
       ]} />
       <CallToAction />
       <Scroll />
       </>
    );
}