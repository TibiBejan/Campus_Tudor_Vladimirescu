import React from 'react';

// COMPONENTS
import HeaderBannerSmall from '../components/SharedComponents/ShowcaseBannerSmall/ShowcaseBannerSmall';
import DescriptiveList from '../components/SharedComponents/DescriptiveListSection/DescriptiveList';
import ResidenceHallPeople from '../components/ResidenceHallsComponents/ResidenceHallPeople/ResidenceHallPeople';
import ContactSectionSmall from '../components/SharedComponents/ContactSectionSmall/ContactSectionSmall';
import FullWidthMap from '../components/SharedComponents/FullWidthMap/FullWidthMap';
import FacilitiesPreview from '../components/SharedComponents/FacilitiesPreviewSection/FacilitiesPreview';
import StatsSection from '../components/SharedComponents/StatsSection/StatsSection';
import Footer from '../components/LayoutComponents/Footer/Footer';

// DATA
import { bannerData, descriptiveData, peopleData, mapData } from '../data/ResidenceHallData';

function ResidenceHall() {
    return (
        <>
            <HeaderBannerSmall bannerData={ bannerData } bannerImage={ bannerData.image.default } />  
            <main className="page-content">
                <DescriptiveList sectionData={descriptiveData} />
                <ResidenceHallPeople sectionData={peopleData} />
                <ContactSectionSmall title="Pentru orice fel de sugestii sau nemulțumiri care ar ajuta la îmbunătăţirea serviciilor noastre vă rugăm să ne contactaţi"/>
                <FullWidthMap Lat={mapData.lat} Lng={mapData.lng} PopupText={mapData.popupText} />
                <FacilitiesPreview />
                <StatsSection />
            </main>
            <Footer />
        </>
    )
}

export default ResidenceHall;
