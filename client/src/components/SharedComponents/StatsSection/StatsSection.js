import React from 'react';
import './StatsSection.scss';

function StatsSection() {
    return (
        <section className="stats-section">
            <div className="stats-section-inner">
                <div className="section-card">
                    <span className="section-card-label label-medium">21 de cămine de reședință</span>
                    <p className="section-card-paragraph paragraph-secondary">Campusul are o suprafață de 137.148 mp, aproximativ 14 ha. Primele cămine au fost construite in anul 1969.</p>
                </div>
                <div className="section-card">
                    <span className="section-card-label label-medium">8.000 de locuri de cazare</span>
                    <p className="section-card-paragraph paragraph-secondary">Campusul este alimentat de echipamente termice de ultimă generație, iar căminele sunt reabilitate.</p>
                </div>
                <div className="section-card">
                    <span className="section-card-label label-medium">Prețuri avantajoase</span>
                    <p className="section-card-paragraph paragraph-secondary">În „Tudor”, te bucuri de cele mai mici tarife de cazare din țară.</p>
                </div>
                <div className="section-card">
                    <span className="section-card-label label-medium">11 organizații studențești</span>
                    <p className="section-card-paragraph paragraph-secondary">Exista și două organizații la nivel internațional: BEST și AIESEC TUIAȘI.</p>
                </div>
            </div>
        </section>
    )
}

export default StatsSection;
