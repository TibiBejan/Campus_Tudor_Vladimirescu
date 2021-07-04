import React from 'react';
import InitialTransition from '../utils/InitialTransition/InitialTransition';

// COMPONENTS
import Header from '../components/LayoutComponents/Header/Header';
import AuthBanner from '../components/SharedComponents/AuthBanner/AuthBanner';
import AdminDashboardMain from '../components/AdminDashboard/AdminDashboardMain/AdminDashboardMain';
import StatsSection from '../components/SharedComponents/StatsSection/StatsSection';
import Footer from '../components/LayoutComponents/Footer/Footer';

// DATA
const bannerData = {
    isLink: null,
    subtitle: "Informatii generale"
}

function AdminDashboard() {
    return (
        <>
            <InitialTransition />
            <Header />
            <main className="page-content">
                <AuthBanner sectionData={ bannerData } title="Panoul administratorului"/>    
                <AdminDashboardMain />
                <StatsSection />
            </main>
            <Footer /> 
        </>
    )
}

export default AdminDashboard;
