import React from 'react';
import './PersonCard.scss';

function PersonCard({ cardData }) {

    const profileImage = require(`../../../assets/images/Staff/${cardData.name.split(' ').join('-')}.png`)

    return (
        <div className="person-card">
            <div className="person-card-bio">
                <div className="profile-image">
                    <img src={profileImage.default} alt={cardData.name} className="background-image" />
                </div>
                <h3 className="person-name heading-three">{cardData.name}</h3>
                <p className="person-job-title paragraph">{cardData.position}</p>
                <div className="contact-group">
                    <a href={`mailto:${cardData.email}`}  className="contact-group-link label-medium">{cardData.email}</a>
                    <a href={`tel:${cardData.phone_number}`} className="contact-group-link label-medium">{cardData.phone_number}</a>
                </div>
            </div>
        </div>
    )
}

export default PersonCard;
