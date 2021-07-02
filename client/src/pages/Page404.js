import React from 'react';
import ErrorBanner from '../components/SharedComponents/ErrorBanner/ErrorBanner';
import StatsSection from '../components/SharedComponents/StatsSection/StatsSection';
import Footer from '../components/LayoutComponents/Footer/Footer';

function Page404() {
    return (
        <>
            <main className="page-content">
                <ErrorBanner />
                <StatsSection />
            </main>
            <Footer />
        </>
    )
}

export default Page404;

