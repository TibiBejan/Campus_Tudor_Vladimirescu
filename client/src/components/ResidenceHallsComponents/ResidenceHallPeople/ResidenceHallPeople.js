import React from 'react';
import PersonCard from '../../SharedComponents/PersonCard/PersonCard';
import './ResidenceHallPeople.scss';

function ResidenceHallPeople({ sectionData }) {
    return (
        <section className="people-section">
            <div className="people-section-inner">

                {sectionData.map((person, index) => (
                    <div className="people-block">
                        <PersonCard cardData={person} key={`residence-hall-person-${index}`} />
                    </div>
                ))}

            </div>
        </section>
    )
}

export default ResidenceHallPeople;
