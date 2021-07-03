import React, { useState } from 'react';
import Button from '../Button/ButtonPrimary';
import './NeighborCard.scss';

function NeighborCard({ cardData, disabledDetails }) {

    // STATE
    const [ activeDescription, setActiveDescription ] = useState(false);

    const profileImage = require(`../../../assets/images/kin-illustration.svg`);

    const handleDescription = () => {
        setActiveDescription(prevState => !prevState);
    }

    return (
        <div className="person-card">
            <div className="person-card-main">
                <div className="profile-image">
                    <img src={profileImage.default} alt={`${cardData.first_name} ${cardData.last_name}`} className="background-image" />
                </div>
                <h3 className="person-name heading-three">{`${cardData.first_name} ${cardData.last_name}`}</h3>
                <div className="contact-group">
                    <a href={`mailto:${cardData.email}`}  className="contact-group-link label-medium">{cardData.email}</a>
                </div>
                <Button type="button" onClick={!disabledDetails ? handleDescription : null} textLabel="Citeste mai mult" />
            </div>
            <div className={activeDescription ? "person-card-description active" : "person-card-description"}>
                <div className="person-card-description-inner">
                    <p className="paragraph description-center">{cardData.Enrollment.university}</p>
                    <div className="description-group">
                        <span className="description-label label">Tipul de studiu: </span>
                        <p className="description-paragraph paragraph">{cardData.Enrollment.type_of_study}</p>
                    </div>
                    <div className="description-group">
                        <span className="description-label label">Anul de studiu: </span>
                        <p className="description-paragraph paragraph">{cardData.Enrollment.year_of_study}</p>
                    </div>
                    <div className="description-group">
                        <span className="description-label label">Media generala: </span>
                        <p className="description-paragraph paragraph">{cardData.Enrollment.grade}</p>
                    </div>
                    <div className="description-group">
                        <span className="description-label label">Finantare: </span>
                        <p className="description-paragraph paragraph">{cardData.Enrollment.financial_type}</p>
                    </div>
                    <div className="description-group">
                        <span className="description-label label">Nationalitatea: </span>
                        <p className="description-paragraph paragraph">{cardData.Enrollment.nationality}</p>
                    </div>
                    <Button type="button" onClick={handleDescription} textLabel="Citeste mai putin" />
                </div>
            </div>
        </div>
    )
}

export default NeighborCard;
