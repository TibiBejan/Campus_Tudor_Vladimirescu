import React from 'react';
import InitialTransition from '../utils/InitialTransition/InitialTransition';

// COMPONENTS
import Header from '../components/LayoutComponents/Header/Header';
import AuthBanner from '../components/SharedComponents/AuthBanner/AuthBanner';
import LoginComponent from '../components/auth/LoginComponent/LoginComponent';
import StatsSection from '../components/SharedComponents/StatsSection/StatsSection';
import Footer from '../components/LayoutComponents/Footer/Footer';
import {loginBannerData} from '../data/AuthData';


function Login() {
    return (
        <>
            <InitialTransition />
            <Header />
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