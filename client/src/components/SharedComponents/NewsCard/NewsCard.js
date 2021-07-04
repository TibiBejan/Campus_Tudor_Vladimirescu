import React from 'react';
import { Link } from 'react-router-dom';
import ButtonPrimary from '../Button/ButtonPrimary';
import { LazyLoadImage, trackWindowScroll  } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/blur.css';
import './NewsCard.scss';

function NewsCard({ cardData, scrollPosition }) {
    return (
        <Link to={cardData.path} className="news-card-wrapper">
            <div className="news-card">
                <div className="news-card-showcase">
                    <LazyLoadImage
                        alt={cardData.title}
                        src={cardData.image.default}
                        effect="blur"
                        scrollPosition={scrollPosition}
                        className="background-image"
                        height={"100%"}
                        width={"100%"}
                    />
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

export default trackWindowScroll(NewsCard);
