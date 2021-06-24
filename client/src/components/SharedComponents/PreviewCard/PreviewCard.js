import React from 'react';
import { Link } from 'react-router-dom';
import './PreviewCard.scss';

function PreviewCard({ cardData }) {
    return (
        <Link to={cardData.path} className="preview-card-wrapper">
            <div className="preview-card">
                <div className="preview-card-content">
                    <span className="content-label label-medium">{cardData.label}</span>
                    <h2 className="content-title heading-three">{cardData.title}</h2>
                </div>
                <div className="preview-card-showcase">
                    <img src={cardData.image.default} alt={cardData.title} className="background-image" />
                </div>
            </div>
        </Link>
    )
}

export default PreviewCard;
