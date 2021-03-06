import React, { useState, useEffect } from 'react';
import { useParams, useHistory } from 'react-router-dom';
import axios from 'axios';
import InitialTransition from '../utils/InitialTransition/InitialTransition';

// COMPONENTS
import Header from '../components/LayoutComponents/Header/Header';
import HeaderBannerSmall from '../components/SharedComponents/ShowcaseBannerSmall/ShowcaseBannerSmall';
import ResidenceHallDescription from '../components/ResidenceHallsComponents/ResidenceHallDescription/ResidenceHallDescription';
import ResidenceHallPeople from '../components/ResidenceHallsComponents/ResidenceHallPeople/ResidenceHallPeople';
import ContactSectionSmall from '../components/SharedComponents/ContactSectionSmall/ContactSectionSmall';
import FullWidthMap from '../components/SharedComponents/FullWidthMap/FullWidthMap';
import FacilitiesPreview from '../components/SharedComponents/FacilitiesPreviewSection/FacilitiesPreview';
import StatsSection from '../components/SharedComponents/StatsSection/StatsSection';
import Footer from '../components/LayoutComponents/Footer/Footer';

function ResidenceHall() {

    const history = useHistory();
    // STATE
    const [ hallData, setHallData ] = useState();
    const [ isLoading, setIsLoading ] = useState(true);
    const [ error, setError ] = useState('');

    const { hallName } = useParams();

    // EFFECT
    useEffect(() => {

        const reqConfig = {
            headers: {
                'Content-Type': 'application/json',
                withCredentials: true,
                credentials: 'include'
            },
        }

        axios.get(`/api/v1/halls/${hallName}`, reqConfig).then((response) => {
            setHallData(response.data.hall);
            setIsLoading(false);
        }).catch(err => {
            setError(err.message);
            setIsLoading(false);
            history.push('/residence-halls');
        });
    }, [hallName, history]);
    
    if (isLoading) {
        return <div>Loading...</div>;
    }

    const hallImage = require(`../assets/images/ResidenceHalls/campus-${hallData.hall_number}.jpg`);

    if(error) {
        return <p>{error}</p>
    }

    // DATA
    const bannerData = {
        title: `C??min T${hallData.hall_number}`,
        description: ['Campusul are o suprafa???? de 137.148 mp, aproximativ 14 ha. Primele c??mine construite au fost T1-2 ??i T3-4, fiind date pentru cazare ??n anul 1969, iar ultimele au fost T18 ??i T19, finalizate ??n anul 1982. ??n interiorul campusului se g??sesc 21 de c??mine, o cantin?? studen??easc??, s??li ??i terenuri moderne de sport ??i un dispensar medical.']
    }

    return (
        <>
            <InitialTransition />
            <Header />
            <HeaderBannerSmall bannerData={ bannerData } bannerImage={hallImage.default} />  
            <main className="page-content">
                <ResidenceHallDescription sectionData={hallData} />
                <ResidenceHallPeople sectionData={hallData.HallStaffs} />
                <ContactSectionSmall title="Pentru orice fel de sugestii sau nemul??umiri care ar ajuta la ??mbun??t????irea serviciilor noastre v?? rug??m s?? ne contacta??i"/>
                <FullWidthMap Lat={hallData.coords[0]} Lng={hallData.coords[1]} PopupText={`C??min T${hallData.hall_number}`} />
                <FacilitiesPreview />
                <StatsSection />
            </main>
            <Footer />
        </>
    )
}

export default ResidenceHall;
