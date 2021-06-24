import React from 'react';

// COMPONENTS
import HeaderBannerSmall from '../components/SharedComponents/ShowcaseBannerSmall/ShowcaseBannerSmall';
import AboutSection from '../components/SharedComponents/AboutSection/AboutSection';
import ReviewSection from '../components/SharedComponents/ReviewSection/ReviewSection';
import ContactSectionSmall from '../components/SharedComponents/ContactSectionSmall/ContactSectionSmall'
import FacilitiesPreview from '../components/SharedComponents/FacilitiesPreviewSection/FacilitiesPreview';
import StatsSection from '../components/SharedComponents/StatsSection/StatsSection';
import Footer from '../components/LayoutComponents/Footer/Footer';

// DATA
import { bannerData, aboutData, reviewSectionData } from '../data/AccommodationPageData';

function Accommodation() {
    return (
        <>
            <HeaderBannerSmall bannerData={ bannerData } bannerImage={ bannerData.image.default } />  
            <main className="page-content">
                <AboutSection sectionData={ aboutData } />
                <ReviewSection sectionData={ reviewSectionData } />
                <ContactSectionSmall title="Pentru orice fel de sugestii sau nemulțumiri care ar ajuta la îmbunătăţirea serviciilor noastre vă rugăm să ne contactaţi"/>
                <FacilitiesPreview />
                <StatsSection />
            </main>
            <Footer />
        </>
    )
}

export default Accommodation;
