import React from 'react';
import InitialTransition from '../utils/InitialTransition/InitialTransition';

// COMPONENTS
import Header from '../components/LayoutComponents/Header/Header';
import AuthBanner from '../components/SharedComponents/AuthBanner/AuthBanner';
import ForgotPasswordComponent from '../components/auth/ForgotPasswordComponent/ForgotPasswordComponent'
import StatsSection from '../components/SharedComponents/StatsSection/StatsSection';
import Footer from '../components/LayoutComponents/Footer/Footer';
import {forgotPasswordBannerData} from '../data/AuthData';

function ForgotPassword() {
    return (
        <>
            <InitialTransition />
            <Header />
            <main className="page-content">
                <AuthBanner  sectionData={ forgotPasswordBannerData }/> 
                <ForgotPasswordComponent />
                <StatsSection />
            </main>
            <Footer />
        </>
    )
}

export default ForgotPassword;