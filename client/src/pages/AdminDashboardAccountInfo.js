import React from 'react'
import InitialTransition from '../utils/InitialTransition/InitialTransition';

// COMPONENTS
import Header from '../components/LayoutComponents/Header/Header';
import AuthBanner from '../components/SharedComponents/AuthBanner/AuthBanner';
import AdminDashboardAccount from '../components/AdminDashboard/AdminDashboardAccount/AdminDashboardAccount';
import StatsSection from '../components/SharedComponents/StatsSection/StatsSection';
import Footer from '../components/LayoutComponents/Footer/Footer';

// DATA
const bannerData = {
    isLink: null,
    subtitle: "Contul meu"
}

function AdminDashboardAccountInfo() {
    return (
        <>
            <InitialTransition />
            <Header />
            <main className="page-content">
                <AuthBanner sectionData={ bannerData } title="Panoul administratorului"/>    
                <AdminDashboardAccount />
                <StatsSection />
            </main>
            <Footer /> 
        </>
    )
}

export default AdminDashboardAccountInfo