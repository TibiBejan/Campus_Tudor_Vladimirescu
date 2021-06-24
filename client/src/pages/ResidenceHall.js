import React, { useState, useEffect } from 'react';
import { useParams, useHistory } from 'react-router-dom';
import axios from 'axios';

// COMPONENTS
import HeaderBannerSmall from '../components/SharedComponents/ShowcaseBannerSmall/ShowcaseBannerSmall';
import ResidenceHallDescription from '../components/ResidenceHallsComponents/ResidenceHallDescription/ResidenceHallDescription';
import ResidenceHallPeople from '../components/ResidenceHallsComponents/ResidenceHallPeople/ResidenceHallPeople';
import ContactSectionSmall from '../components/SharedComponents/ContactSectionSmall/ContactSectionSmall';
import FullWidthMap from '../components/SharedComponents/FullWidthMap/FullWidthMap';
import FacilitiesPreview from '../components/SharedComponents/FacilitiesPreviewSection/FacilitiesPreview';
import StatsSection from '../components/SharedComponents/StatsSection/StatsSection';
import Footer from '../components/LayoutComponents/Footer/Footer';

// DATA
import { bannerData, descriptiveData, mapData } from '../data/ResidenceHallData';

function ResidenceHall() {

    const history = useHistory();
    // STATE
    const [ hallData, setHallData ] = useState();
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState('');

    const { hallName } = useParams();

    // EFFECT
    useEffect(() => {
        axios.get(`http://127.0.0.1:8001/api/v1/halls/${hallName}`).then((response) => {
            setHallData(response.data.hall);
            setIsLoading(false);
        }).catch(err => {
            const { message } = err.response.data;
            setError(message);
            setIsLoading(false);
            history.push('/residence-halls');
        });
    }, []);

    if (isLoading) {
        return <div className="App">Loading...</div>;
    }

    return (
        <>
            <HeaderBannerSmall bannerData={ bannerData } hallName={hallName} bannerImage={ bannerData.image.default } />  
            <main className="page-content">
                <ResidenceHallDescription sectionData={hallData} />
                <ResidenceHallPeople sectionData={hallData.HallStaffs} />
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
