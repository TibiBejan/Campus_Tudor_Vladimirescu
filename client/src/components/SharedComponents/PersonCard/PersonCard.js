import React from 'react';
import './PersonCard.scss';

function PersonCard({ cardData }) {
    return (
        <div className="person-card">
            <div className="person-card-bio">
                <div className="profile-image">
                    <img src={cardData.profileImage.default} alt={cardData.name} className="background-image" />
                </div>
                <h3 className="person-name heading-three">{cardData.name}</h3>
                <p className="person-job-title paragraph">{cardData.jobTitle}</p>
                <div className="contact-group">
                    <a href={`mailto:${cardData.email}`}  className="contact-group-link label-medium">{cardData.email}</a>
                    <a href={`tel:${cardData.phone}`} className="contact-group-link label-medium">{cardData.phone}</a>
                </div>
            </div>
        </div>
    )
}

export default PersonCard;
