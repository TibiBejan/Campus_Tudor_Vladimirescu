import React from 'react';
import { Link } from 'react-router-dom';
import ButtonPrimary from '../Button/ButtonPrimary';
import './NewsCard.scss';

function NewsCard({ cardData }) {
    return (
        <Link to={cardData.path} className="news-card-wrapper">
            <div className="news-card">
                <div className="news-card-showcase">
                    <img src={cardData.image.default} alt={cardData.title} className="background-image" />
                </div>
                <div className="news-card-content">
                    <div className="content-inner">
                        <div className="content-inner-description">
                            {cardData.date && <span className="content-inner-date label-medium ">{cardData.date}</span>}
                            <h3 className="content-inner-title heading-three">{cardData.title}</h3>
                            <p className="content-inner-paragraph paragraph-medium">{cardData.description}</p>
                        </div>
                        <ButtonPrimary textLabel={cardData.buttonLabel} />
                    </div>
                </div>
            </div>
        </Link>
    )
}

export default NewsCard;
