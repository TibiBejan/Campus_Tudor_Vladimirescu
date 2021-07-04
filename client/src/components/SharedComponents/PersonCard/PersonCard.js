import React from 'react';
import { LazyLoadImage, trackWindowScroll  } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/blur.css';
import './PersonCard.scss';

function PersonCard({ cardData, scrollPosition }) {

    const profileImage = require(`../../../assets/images/Staff/${cardData.name.split(' ').join('-')}.png`)

    return (
        <div className="person-card">
            <div className="person-card-bio">
                <div className="profile-image">
                    {/* <img src={profileImage.default} alt={cardData.name} className="background-image" /> */}
                    <LazyLoadImage
                        alt={cardData.name}
                        src={profileImage.default}
                        effect="blur"
                        scrollPosition={scrollPosition}
                        className="background-image"
                        // visibleByDefault={"true"}
                        height={"100%"}
                        width={"100%"}
                    />
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

export default trackWindowScroll(PersonCard);
