import React from 'react';
import Map from '../../SharedComponents/Map/Map';
import { LazyLoadComponent } from 'react-lazy-load-image-component';
import './MapSection.scss';

const mapData = {
    lat: '47.15734077564309',
    lng: '27.604033173200683',
    popupText: 'Cămin T18 &amp; Cămin T19 - Parter <br/> Bulevardul Tudor Vladimirescu, Iași 700050.'
}

function MapSection() {
    return (
        <section className="map">
            <div className="map-inner">
                <div className="map-inner-content">
                    <p className="content-paragraph paragraph">Sediul Direcției Servicii Studențești se află la parterul căminelor T18 și T19.Așteptăm să ne transmiteți orice sfat, sugestie sau sesizare legate campusul studențesc Tudor Vladimirescu.</p>
                    <p className="content-paragraph paragraph">Programul de lucru este de <strong>luni până vineri</strong>, între orele <strong>07.30-15.30</strong>.</p>
                    <div className="content-links-wrapper">
                        <div className="content-link-wrapper">
                            <span className="content-link-label label-medium">E-mail:</span>
                            <a href="mailto:dss@tuiasi.ro"  className="content-link label">dss@tuiasi.ro</a>
                        </div>
                        <div className="content-link-wrapper">
                            <span className="content-link-label label-medium">Phone:</span>
                            <a href="tel:0232271288" className="content-link label">0232.271.288</a>
                        </div>
                    </div>
                </div>
                <div className="map-inner-wrapper">
                    <LazyLoadComponent>
                        <Map Lat={mapData.lat} Lng={mapData.lng} PopupText={mapData.popupText}/>
                    </LazyLoadComponent>
                </div>
            </div>
        </section>
    )
}

export default MapSection;
