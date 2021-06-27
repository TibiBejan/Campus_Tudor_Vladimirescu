import React from 'react';
import { Link } from 'react-router-dom';
import ButtonPrimary from '../Button/ButtonPrimary';
import './ShowcaseBanner.scss';

function ShowcaseBanner({ videoSrc }) {
    return (
        <div className="showcase-banner">
            <div className="showcase-banner-media">
                <video 
                    autoPlay="autoplay"
                    muted="muted"
                    loop="loop"
                    playsInline
                    preload="auto" 
                    src={videoSrc} 
                    type="video/mp4"
                    className="media-background">
                </video>
            </div>
            <div className="showcase-banner-content">
                <div className="content-heading-wrapper">
                    <div className="heading-wrapper-line">
                        <h1 className="heading-one">Campusul Studențesc</h1>
                    </div>
                    <div className="heading-wrapper-line">
                        <h1 className="heading-one">Tudor Vladimirescu</h1>
                    </div>
                </div>
                <div className="paragraph-wrapper">
                    <p className="paragraph-showcase">„Tudor Vladimirescu” este unul din cele mai mari campusuri studențești din România, este plin de forfotă, are un spirit aparte şi este centrul vieţii studenţeşti ieşene, fiind recunoscut astfel chiar și de către studenții celorlalte universități din capitala Moldovei.</p>
                </div>
                <Link to="/about">
                    <ButtonPrimary textLabel="Descopera campusul" />
                </Link>
            </div>
        </div>
    )
}

export default ShowcaseBanner;
