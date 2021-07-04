import React from 'react';
import InitialTransition from '../utils/InitialTransition/InitialTransition';

// COMPONENTS
import Header from '../components/LayoutComponents/Header/Header';
import ErrorBanner from '../components/SharedComponents/ErrorBanner/ErrorBanner';
import StatsSection from '../components/SharedComponents/StatsSection/StatsSection';
import Footer from '../components/LayoutComponents/Footer/Footer';

function Page404() {
    return (
        <>
            <InitialTransition />
            <Header />
            <main className="page-content">
                <ErrorBanner />
                <StatsSection />
            </main>
            <Footer />
        </>
    )
}

export default Page404;

