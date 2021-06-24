import React from 'react';

// COMPONENTS
import HeaderBannerSmall from '../components/SharedComponents/ShowcaseBannerSmall/ShowcaseBannerSmall';
import ShowcaseSection from '../components/SharedComponents/ShowcaseSection/ShowcaseSection';
import ContactSectionSmall from '../components/SharedComponents/ContactSectionSmall/ContactSectionSmall';
import FullWidthMap from '../components/SharedComponents/FullWidthMap/FullWidthMap';
import StatsSection from '../components/SharedComponents/StatsSection/StatsSection';
import Footer from '../components/LayoutComponents/Footer/Footer';

// DATA
import { bannerData, dispensaryData, mapData } from '../data/DispensaryPageData';

function Dispensary() {
    return (
        <>
            <HeaderBannerSmall bannerData={bannerData} bannerImage={bannerData.image.default} />
            <main className="page-content">
                <ShowcaseSection sectionData={dispensaryData} />
                <ContactSectionSmall title="Pentru a afla mai multe informații, contactati-ne telefonic sau prin e-mail " phone="0232.702.461" />
                <FullWidthMap Lat={mapData.lat} Lng={mapData.lng} PopupText={mapData.poputText}/>
                <StatsSection />
            </main>
            <Footer />
        </>
    )
}

export default Dispensary;
