import React from 'react';

// COMPONENTS
import HeaderBannerSmall from '../components/SharedComponents/ShowcaseBannerSmall/ShowcaseBannerSmall';
import CardsSection from '../components/HealthSecurityPageComponents/CardsSection/CardsSection';
import StatsSection from '../components/SharedComponents/StatsSection/StatsSection';
import Footer from '../components/LayoutComponents/Footer/Footer';

// DATA AND MEDIA
import { bannerData, cardsData } from '../data/HealthSecurityPageData';

function HealthSecurity() {
    return (
        <>
            <HeaderBannerSmall bannerData={bannerData}  bannerImage={bannerData.image.default} />
            <main className="page-content">
                <CardsSection cardsData={cardsData} />
                <StatsSection />
            </main>
            <Footer /> 
        </>
    )
}

export default HealthSecurity;
