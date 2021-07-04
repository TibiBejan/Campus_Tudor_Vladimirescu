import React from 'react';
import InitialTransition from '../utils/InitialTransition/InitialTransition';

// COMPONENTS
import Header from '../components/LayoutComponents/Header/Header';
import HeaderBannerSmall from '../components/SharedComponents/ShowcaseBannerSmall/ShowcaseBannerSmall';
import ShowcaseSection from '../components/SharedComponents/ShowcaseSection/ShowcaseSection';
import ContactSectionSmall from '../components/SharedComponents/ContactSectionSmall/ContactSectionSmall';
import FullWidthMap from '../components/SharedComponents/FullWidthMap/FullWidthMap';
import StatsSection from '../components/SharedComponents/StatsSection/StatsSection';
import Footer from '../components/LayoutComponents/Footer/Footer';

// DATA
import { bannerData, centerData, mapData } from '../data/CounselingCenterPageData';

function CounselingCenter() {
    return (
        <>
            <InitialTransition />
            <Header />
            <HeaderBannerSmall bannerData={bannerData} bannerImage={bannerData.image.default} />
            <main className="page-content">
                <ShowcaseSection sectionData={centerData} />
                <ContactSectionSmall title="Așteptăm cu nerăbdare să vă întâlnim aici" phone="0232.271.288" mail="centru.consiliere@tuiasi.ro" />
                <FullWidthMap Lat={mapData.lat} Lng={mapData.lng} PopupText={mapData.poputText}/>
                <StatsSection />
            </main>
            <Footer />
        </>
    )
}

export default CounselingCenter;
