import Scroll from "../../../components/Landing/infiniteScroll";
import ClientResultsSection from "../../../components/solutions/clientResults";
import IntegratedSystemSection from "../../../components/solutions/Integration";
import StackSuiteSection from "../../../components/solutions/stackSuite";
import TopComponent from "../../../components/solutions/top";

export default function SolutionsPage() {
    return (
        <>
        <TopComponent />
        <StackSuiteSection  
            cards={[
                { title: 'Cognitex', link: '/cs1' },
                { title: 'AutoMind', link: '/cs2' },
                { title: 'Data & AI Services', link: '/cs3' },
                { title: 'Custom Engineering Suite', link: '/cs4' },
            ]}
        />
        <IntegratedSystemSection />
        <ClientResultsSection 
        cards={[
                { title: 'Healthtech | IDP + GenAI Agent', link: '/cs1' },
                { title: 'D2C | Data Engineering + ML Ops', link: '/cs2' },
            ]}/>
            <Scroll />
        </>
    );
    }