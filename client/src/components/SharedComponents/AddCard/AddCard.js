import React from 'react';
import Button from '../Button/ButtonPrimary';
import kinIllustration from '../../../assets/images/kin-illustration.svg';
import './AddCard.scss';

function AddCard({ handleClick }) {

    return (
        <div className="add-card" onClick={ handleClick }>
            <div className="add-card-content">
                <div className="card-showcase-profile-image">
                    <img src={kinIllustration} alt="Ilustratia persoanei de contact a studentului" className="background-image" />
                </div>
                <Button type="button" textLabel="Adauga contact" />
            </div>
        </div>
    )
}

export default AddCard;
