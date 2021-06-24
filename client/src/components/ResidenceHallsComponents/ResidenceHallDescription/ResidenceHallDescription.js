import React from 'react';
import sectionImage from '../../../assets/images/ResidenceHalls/residence-hall-descriptive-image.jpg';
import './ResidenceHallDescription.scss';

function ResidenceHallDescription({ sectionData }) {

    return (
        <section className="descriptive-list-section">
            <div className="descriptive-list-section-inner">
                <div className="descriptive-inner-image">
                    <div className="image-block">
                        <div className="image-block-overlay"></div>
                        <div className="image-block-showcase">
                            <img src={sectionImage} alt={`Una dintre camerele caminului ${sectionData.hall_number}`} className="background-image" />
                        </div>
                    </div>
                </div>
                <div className="descriptive-inner-content">
                    <div className="content-heading-wrapper">
                        <span className="content-heading-subtitle label-medium">Cazare</span>
                        <h2 className="content-heading-title heading-two">Acest cămin este situat pe {sectionData.adress}</h2>
                    </div>
                    <div className="content-paragraph-wrapper">
                        <p className="content-paragraph paragraph">Facultăți ai căror studenți primesc de regulă repartiție în acest cămin: {sectionData.universities.join()}</p>
                    </div>
                    <ul className="content-descriptive-list">
                        <li className="descriptive-list-item">
                            <p className="list-item-label paragraph">Număr total de locuri: {sectionData.students_number}</p>
                        </li>
                        <li className="descriptive-list-item">
                            <p className="list-item-label paragraph">Număr camere: {sectionData.rooms_number}</p>
                        </li>
                        <li className="descriptive-list-item">
                            <p className="list-item-label paragraph">Studenţi cazaţi/cameră: {sectionData.student_per_room}</p>
                        </li>
                        <li className="descriptive-list-item">
                            <p className="list-item-label paragraph">{sectionData.facilities}</p>
                        </li>
                        <li className="descriptive-list-item">
                            <p className="list-item-label paragraph">Grup sanitar: {sectionData.bathroom}</p>
                        </li>
                        { sectionData.description ? (
                            <li className="descriptive-list-item">
                                <p className="list-item-label paragraph">{sectionData.description}</p>
                            </li>
                        ) : null}
                    </ul>
                </div>
            </div>
        </section>
    )
}

export default ResidenceHallDescription;
