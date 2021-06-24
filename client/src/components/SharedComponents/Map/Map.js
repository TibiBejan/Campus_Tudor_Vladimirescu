import React from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';


function Map({ Lat, Lng, PopupText }) {
    return (
        <MapContainer center={[Lat, Lng]} zoom={18} scrollWheelZoom={false}>
            <TileLayer
                attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            />
            <Marker position={[Lat, Lng]}>
                <Popup>
                    {PopupText}
                </Popup>
            </Marker>
        </MapContainer>
    )
}

export default Map;
