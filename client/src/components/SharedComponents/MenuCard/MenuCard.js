import React from 'react';
import { LazyLoadImage, trackWindowScroll  } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/blur.css';
import './MenuCard.scss';

function MenuCard({ data, scrollPosition }) {
    return (
        <div className="page-menu-card">
            <LazyLoadImage
                alt="tuiasi-dss"
                src={data.imageName.default}
                effect="blur"
                scrollPosition={scrollPosition}
                className="background-image"
                height={"100%"}
            />
            {/* <img src={data.imageName.default} alt="" className="card-background" /> */}
            <div className="card-content">
                <div className="card-content-label">
                    <span className="label-small">{data.label}</span>
                </div>
                <h4 className="heading-four">{data.title}</h4>
            </div>
        </div>
    )
}

export default trackWindowScroll(MenuCard);
