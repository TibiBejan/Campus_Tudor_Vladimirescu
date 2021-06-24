import React from 'react';
import './MenuCard.scss';

function MenuCard({ data }) {
    return (
        <div className="page-menu-card">
            <img src={data.imageName.default} alt="" className="card-background" />
            <div className="card-content">
                <div className="card-content-label">
                    <span className="label-small">{data.label}</span>
                </div>
                <h4 className="heading-four">{data.title}</h4>
            </div>
        </div>
    )
}

export default MenuCard;
