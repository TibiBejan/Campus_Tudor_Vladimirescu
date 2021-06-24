import React from 'react';
import './TextOnly.scss';

function TextOnly({ sectionData }) {
    return (
        <section className="text-only-section">
            <div className="text-only-section-inner">
                <div className="text-only-content">
                    {sectionData.description.map((paragraph, index) => (
                        <div className="content-paragraph-wrapper" key={`text-only-paragraph-${index}`}>
                            <p className="content-paragraph paragraph">{paragraph}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}

export default TextOnly;
