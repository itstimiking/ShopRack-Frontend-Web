import React from 'react';
import ChartSection from './ChartSection';
import SearchAndProfileSection from "./SearchAndProfileSection";
import StoreOverView from "./StoreOverView";
import SummarySection from "./SummarySection";

//import { useAuth } from '../../context/AuthUserContext';

function DashboardIndex() {

    // const {authUser} = useAuth();

    // const [isOpen, setIsOpen] = useState(false);

    // const toggle = () => {
    //     setIsOpen(!isOpen);
    // };

    return (
        
        <div className="w-full min-h-0 bg-transparent rounded-xl flex flex-col space-y-5">

            {/* Search and Profile section*/}
            <SearchAndProfileSection />

            {/* Store requied items section */}
            <StoreOverView />

            {/** Summary section */}
            <SummarySection />

            {/** Chart section */}
            <ChartSection />
        </div>
    )
}

export default DashboardIndex
