import React from 'react';
import InitialTransition from '../utils/InitialTransition/InitialTransition';

// COMPONENTS
import Header from '../components/LayoutComponents/Header/Header';
import AuthBanner from '../components/SharedComponents/AuthBanner/AuthBanner';
import ResetPasswordComponent from '../components/auth/ResetPasswordComponent/ResetPasswordComponent';
import StatsSection from '../components/SharedComponents/StatsSection/StatsSection';
import Footer from '../components/LayoutComponents/Footer/Footer';
import {resetPasswordBannerData} from '../data/AuthData';

function ResetPassword() {
    return (
        <>
            <InitialTransition />
            <Header />
            <main className="page-content">
                <AuthBanner  sectionData={ resetPasswordBannerData }/> 
                <ResetPasswordComponent />
                <StatsSection />
            </main>
            <Footer />
        </>
    )
}

export default ResetPassword;