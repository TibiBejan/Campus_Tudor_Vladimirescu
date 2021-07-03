import React from 'react';
import TuiasiLogo from '../../../assets/images/Universities/embleme-tuiasi-rr-1-300x189.png';
import './NoHallCard.scss';

function NoHallCard() {
    return (
        <div className="no-hall-card-wrapper">
            <div className="no-hall-card">
                <div className="no-hall-card-background">
                    <img src={ TuiasiLogo } alt='Logo Tuiasi' className="background-image" />
                </div>
                <div className="no-hall-card-content">
                    <p className="no-hall-card-paragraph paragraph">In acest moment, studentul nu este inrolat sau cazat.</p>
                </div>
            </div>
        </div>
    )
}

export default NoHallCard;

