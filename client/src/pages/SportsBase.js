import React from 'react';

// COMPONENTS
import HeaderBannerSmall from '../components/SharedComponents/ShowcaseBannerSmall/ShowcaseBannerSmall';
import DescriptiveList from '../components/SharedComponents/DescriptiveListSection/DescriptiveList';
import GallerySection from '../components/SharedComponents/GallerySection/GallerySection';
import ShowcaseSection from '../components/SharedComponents/ShowcaseSection/ShowcaseSection';
import TextOnly from '../components/SharedComponents/TextOnlySection/TextOnly';
import ContactSectionSmall from '../components/SharedComponents/ContactSectionSmall/ContactSectionSmall';
import FullWidthMap from '../components/SharedComponents/FullWidthMap/FullWidthMap';
import StatsSection from '../components/SharedComponents/StatsSection/StatsSection';
import Footer from '../components/LayoutComponents/Footer/Footer';

// DATA
import { bannerData, showcaseData, gallerySlider, gallerySectionData, descriptiveData, aboutSection, mapData } from '../data/SportsBasePageData';

function SportsBase() {
    return (
        <>
            <HeaderBannerSmall bannerData={bannerData} bannerImage={bannerData.image.default}/>
            <main className="page-content">
                <DescriptiveList sectionData={descriptiveData} />
                <GallerySection images={gallerySlider} sectionData={gallerySectionData}/>
                <ShowcaseSection sectionData={showcaseData}/>
                <TextOnly sectionData={aboutSection} />
                <ContactSectionSmall title="Pentru orice fel de sugestii sau nemulțumiri care ar ajuta la îmbunătăţirea serviciilor noastre vă rugăm să ne contactaţi" />
                <FullWidthMap Lat={mapData.lat} Lng={mapData.lng} PopupText={mapData.popupText} />
                <StatsSection/> 
            </main>
            <Footer />
        </>
    )
}

export default SportsBase;
