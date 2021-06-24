import React from 'react';

// COMPONENTS
import HeaderBannerSmall from '../components/SharedComponents/ShowcaseBannerSmall/ShowcaseBannerSmall';
import NewsSection from '../components/NewsPageComponents/NewsSection/NewsSection';
import FacilitiesPreview from '../components/SharedComponents/FacilitiesPreviewSection/FacilitiesPreview';
import StatsSection from '../components/SharedComponents/StatsSection/StatsSection';
import Footer from '../components/LayoutComponents/Footer/Footer';

// DATA AND MEDIA
import bannerImage from '../assets/images/CampusNews/newspage-students.png';
const bannerData = {
    title: 'Ultimele noutăți',
    description: ['Studenții Politehnicii ieșene învață să manipuleze întreaga lume din jurul lor: o dezmembrează și o remodelează după chipul și îndrăzneala fiecărei generații. Cele 11 facultăți nu sunt fortărețe individuale, ci felii dintr-un „quattro stagioni” gustos – se completează în compoziție și arome. O să descoperiți asta în campus, în proiectele asociațiilor studențești și la toate evenimentele #TUIASI.']
}

function News() {
    return (
        <>
            <HeaderBannerSmall bannerData={bannerData} bannerImage={bannerImage}/>
            <main className="page-content">
                <NewsSection />
                <FacilitiesPreview />
                <StatsSection />
            </main>
            <Footer />
        </>
    )
}

export default News;
