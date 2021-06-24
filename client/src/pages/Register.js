import React from 'react';

// COMPONENTS
import AuthBanner from '../components/SharedComponents/AuthBanner/AuthBanner';
import RegisterComponent from '../components/auth/RegisterComponent/RegisterComponent';
import StatsSection from '../components/SharedComponents/StatsSection/StatsSection';
import Footer from '../components/LayoutComponents/Footer/Footer'
import {registerBannerData} from '../data/AuthData';

function Register() {
    return (
        <>
            <main className="page-content">
                <AuthBanner sectionData={registerBannerData}/>    
                <RegisterComponent />
                <StatsSection />
            </main>   
            <Footer />
        </>
    )
}

export default Register;
