import React from 'react';
import './OrganisationCard.scss';

function OrganisationCard({ cardData }) {
    return (
        <a href={cardData.externalPath} target="_blank" rel="noreferrer" className="organisation-card-wrapper">
            <div className="organisation-card">
                <div className="organisation-card-content">
                    <h2 className="content-title heading-three">{cardData.title}</h2>
                    <span className="content-label label-medium">{cardData.location}</span>
                </div>
                <div className="organisation-card-showcase">
                    <div className="showcase-image">
                        <img src={cardData.image.default} alt={cardData.title} className="background-image" />
                    </div>
                </div>
            </div>
        </a>
    )
}

export default OrganisationCard;
