import React from 'react';
import { Link } from 'react-router-dom';
import { LazyLoadImage, trackWindowScroll  } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/blur.css';
import './PreviewCard.scss';

function PreviewCard({ cardData, scrollPosition }) {
    return (
        <Link to={cardData.path} className="preview-card-wrapper">
            <div className="preview-card">
                <div className="preview-card-content">
                    <span className="content-label label-medium">{cardData.label}</span>
                    <h2 className="content-title heading-three">{cardData.title}</h2>
                </div>
                <div className="preview-card-showcase">
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
            </div>
        </Link>
    )
}

export default trackWindowScroll(PreviewCard);
