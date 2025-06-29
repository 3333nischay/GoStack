import Scroll from "../../../components/Landing/infiniteScroll";
import TalentCompanyCards from "../../../components/TalentStack/options";
import TopComponent from "../../../components/TalentStack/top";

export default function TalentStackPage() {
    return (
        <>
        <TopComponent />
        <TalentCompanyCards />
        <Scroll />
        </>
    )
}