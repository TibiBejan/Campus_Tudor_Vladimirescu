import React from 'react';
import './Marquee.scss';

function Marquee({ classes, textLabel }) {

    const arr = [...Array(7).keys()];

    return (
        <div className={`marquee-section ${classes}`}>
            <div className="container-fluid">
                <div className="marquee">
                    <div className="marquee-content">

                        {arr.map((_, index) => (
                            <div className="marquee-content-label" key={`marquee-label-${index}`}>
                                <span className="marquee-text marquee-label">{textLabel}</span>
                                <span className="marquee-line" />
                            </div>
                        ))}

                    </div>
                    <div className="marquee-content">

                        {arr.map((_, index) => (
                            <div className="marquee-content-label" key={`marquee-label-${index}`}>
                                <span className="marquee-text marquee-label">{textLabel}</span>
                                <span className="marquee-line" />
                            </div>
                        ))}

                    </div>
                </div>
            </div>
        </div>
    )
}

export default Marquee;
