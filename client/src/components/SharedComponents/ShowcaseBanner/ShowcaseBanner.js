import React from 'react';
import { Link } from 'react-router-dom';
import ButtonPrimary from '../Button/ButtonPrimary';
import bannerImage from '../../../assets/images/showcase-banner-image.jpg';
import { LazyLoadImage, trackWindowScroll  } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/blur.css';
import 'react-lazy-load-image-component/src/effects/blur.css';
import './ShowcaseBanner.scss';

function ShowcaseBanner({scrollPosition}) {
    return (
        <div className="showcase-banner">
            <div className="showcase-banner-media">
                <LazyLoadImage 
                    src={bannerImage} 
                    alt="Campus Enrollment Process" 
                    className="background-image"
                    effect="blur"
                    scrollPosition={scrollPosition}
                    height={"100%"}
                    width={"100%"}
                />
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

export default trackWindowScroll(ShowcaseBanner);
