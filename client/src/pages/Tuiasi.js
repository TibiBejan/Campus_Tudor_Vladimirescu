import React from 'react';

// COMPONENTS
import HeaderBannerSmall from '../components/SharedComponents/ShowcaseBannerSmall/ShowcaseBannerSmall';
import ReasonSection from '../components/TuiasiPageComponents/ReasonSection/ReasonSection';
import BecomeStudent from '../components/TuiasiPageComponents/BecomeStudentSection/BecomeStudent';
import StatsSection from '../components/SharedComponents/StatsSection/StatsSection';
import Footer from '../components/LayoutComponents/Footer/Footer';

// DATA
import { bannerData, engineeringData, laboratoryData, studentsData, cafeteriaData, erasmusData, libraryData, campusData } from '../data/TuiasiPageData';

function Tuiasi() {
    return (
        <>
            <HeaderBannerSmall bannerData={bannerData} bannerImage={bannerData.image.default}/>
            <main className="page-content">

                <ReasonSection sectionData={engineeringData} />
                <ReasonSection sectionData={laboratoryData} />
                <ReasonSection sectionData={studentsData} />
                <ReasonSection sectionData={cafeteriaData} />
                <ReasonSection sectionData={erasmusData} />
                <ReasonSection sectionData={libraryData} />
                <ReasonSection sectionData={campusData} />
                <BecomeStudent />
                <StatsSection />
            </main>
            <Footer />
        </>
    )
}

export default Tuiasi;
