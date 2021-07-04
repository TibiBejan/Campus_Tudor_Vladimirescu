import React from 'react';
import InitialTransition from '../utils/InitialTransition/InitialTransition';

// COMPONENTS
import Header from '../components/LayoutComponents/Header/Header';
import AuthBanner from '../components/SharedComponents/AuthBanner/AuthBanner';
import AdminDashboardCreateUser from '../components/AdminDashboard/AdminDashboardCreateUser/AdminDashboardCreateUser';
import StatsSection from '../components/SharedComponents/StatsSection/StatsSection';
import Footer from '../components/LayoutComponents/Footer/Footer';

// DATA
const bannerData = {
    isLink: null,
    subtitle: 'Adauga studenti'
}

function AdminDashboardCreateAcc() {
    return (
        <>
            <InitialTransition />
            <Header />
            <main className="page-content">
                <AuthBanner sectionData={ bannerData } title="Panoul administratorului"/>    
                <AdminDashboardCreateUser />
                <StatsSection />
            </main>
            <Footer />
        </>
    )
}

export default AdminDashboardCreateAcc;
