import React from 'react';
import './OrganisationCard.scss';
import { LazyLoadImage, trackWindowScroll  } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/blur.css';

function OrganisationCard({ cardData, scrollPosition }) {
    return (
        <a href={cardData.externalPath} target="_blank" rel="noreferrer" className="organisation-card-wrapper">
            <div className="organisation-card">
                <div className="organisation-card-content">
                    <h2 className="content-title heading-three">{cardData.title}</h2>
                    <span className="content-label label-medium">{cardData.location}</span>
                </div>
                <div className="organisation-card-showcase">
                    <div className="showcase-image">
                    <LazyLoadImage
                        alt={cardData.title}
                        src={cardData.image.default}
                        effect="blur"
                        scrollPosition={scrollPosition}
                        visibleByDefault={"true"}
                        className="background-image"
                        
                    />
                        {/* <img src={cardData.image.default} alt={cardData.title} className="background-image" /> */}
                    </div>
                </div>
            </div>
        </a>
    )
}

export default trackWindowScroll(OrganisationCard);
