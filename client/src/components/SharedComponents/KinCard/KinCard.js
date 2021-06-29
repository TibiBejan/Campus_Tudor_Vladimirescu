import React from 'react';
import './KinCard.scss';

function KinCard({ cardData }) {
    return (
        <div className="kin-card">
            <div className="kin-card-showcase">
                <div className="card-showcase-profile-image">
                    <img src="" alt="" className="background-image" />
                </div>
            </div>
            <div className="kin-card-content">
                <span className="content-label label-medium">{cardData.relation}</span>
                <h5 className="content-title heading-five">Nume: {`${cardData.first_name} ${cardData.last_name}`}</h5>
                <h5 className="content-title heading-five">E-mail: {cardData.email}</h5>
                <h5 className="content-title heading-five">Telefon: {cardData.phone_number}</h5>
                <span className="content-label label-medium">Adresa: {cardData.adress}</span>
            </div>
        </div>
    )
}

export default KinCard;
