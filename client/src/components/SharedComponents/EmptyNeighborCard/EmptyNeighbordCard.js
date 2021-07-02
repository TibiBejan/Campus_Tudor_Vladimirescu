import React from 'react';
import './EmptyNeighborCard.scss';

function EmptyNeighbordCard() {

    const profileImage = require(`../../../assets/images/kin-illustration.svg`);

    return (
        <div className="person-card-empty">
            <div className="person-card-empty-main">
                <div className="profile-image">
                    <img src={profileImage.default} alt="Empty student card illustration" className="background-image" />
                </div>
                <p className="paragraph-showcase">In acest moment, sunteti singurul student cazat in aceasta camera.</p>
            </div>
        </div>
    )
}

export default EmptyNeighbordCard;
