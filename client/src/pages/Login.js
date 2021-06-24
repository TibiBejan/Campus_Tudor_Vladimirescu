import React from 'react';

// COMPONENTS
import AuthBanner from '../components/SharedComponents/AuthBanner/AuthBanner';
import LoginComponent from '../components/auth/LoginComponent/LoginComponent';
import StatsSection from '../components/SharedComponents/StatsSection/StatsSection';
import Footer from '../components/LayoutComponents/Footer/Footer';
import {loginBannerData} from '../data/AuthData';


function Login() {
    return (
        <>
            <main className="page-content">
                <AuthBanner sectionData={ loginBannerData }/>
                <LoginComponent />
                <StatsSection />
            </main>   
            <Footer />
        </>
    )
}

export default Login;