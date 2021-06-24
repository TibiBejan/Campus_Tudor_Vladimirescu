import React from 'react';

// COMPONENTS
import HeaderBannerSmall from '../components/SharedComponents/ShowcaseBannerSmall/ShowcaseBannerSmall';
import ShowcaseSection from '../components/SharedComponents/ShowcaseSection/ShowcaseSection';
import ContactSectionSmall from '../components/SharedComponents/ContactSectionSmall/ContactSectionSmall';
import FullWidthMap from '../components/SharedComponents/FullWidthMap/FullWidthMap';
import StatsSection from '../components/SharedComponents/StatsSection/StatsSection';
import Footer from '../components/LayoutComponents/Footer/Footer';

// DATA
import { bannerData, policeData, mapData } from '../data/PolicePageData';

function Police() {
    return (
        <>
            <HeaderBannerSmall bannerData={bannerData} bannerImage={bannerData.image.default} />
            <main className="page-content">
                <ShowcaseSection sectionData={policeData} />
                <ContactSectionSmall title="Poliţistul de proximitate al campusului este: Agent Șef Gabriel SANDU" phone="0756.157.821" mail="proximitate.bcu@gmail.com" />
                <FullWidthMap Lat={mapData.lat} Lng={mapData.lng} PopupText={mapData.poputText} />
                <StatsSection />
            </main>
            <Footer />
        </>
    )
}

export default Police;
