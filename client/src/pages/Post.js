import React from 'react';
import InitialTransition from '../utils/InitialTransition/InitialTransition';

// COMPONENTS
import Header from '../components/LayoutComponents/Header/Header';
import HeaderBannerSmall from '../components/SharedComponents/ShowcaseBannerSmall/ShowcaseBannerSmall';
import AboutSection from '../components/SharedComponents/AboutSection/AboutSection';
import GallerySection from '../components/SharedComponents/GallerySection/GallerySection';
import TextOnly from '../components/SharedComponents/TextOnlySection/TextOnly';
import ShowcaseImageSection from '../components/SharedComponents/ShowcaseImageSection/ShowcaseImageSection';
import FacilitiesPreview from '../components/SharedComponents/FacilitiesPreviewSection/FacilitiesPreview';
import StatsSection from '../components/SharedComponents/StatsSection/StatsSection';
import Footer from '../components/LayoutComponents/Footer/Footer';

// DATA
import { bannerData, aboutSectionData, gallerySlider, gallerySectionData, textOnlyTop, showcaseImageObj, textOnlyBottom } from '../data/PostData';



function Post() {
    return (
        <>
            <InitialTransition />
            <Header />
            <HeaderBannerSmall bannerData={ bannerData } bannerImage={ bannerData.image.default } />  
            <main className="page-content">
                <AboutSection sectionData={aboutSectionData} />
                <GallerySection  images={gallerySlider} sectionData={gallerySectionData}/>
                <TextOnly sectionData={textOnlyTop}/>
                <ShowcaseImageSection sectionImage={showcaseImageObj} />
                <TextOnly sectionData={textOnlyBottom}/>
                <FacilitiesPreview />
                <StatsSection />
            </main>
            <Footer />
        </>
    )
}

export default Post;
