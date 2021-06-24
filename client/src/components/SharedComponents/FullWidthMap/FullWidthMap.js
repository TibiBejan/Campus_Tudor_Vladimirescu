import React from 'react';
import styled from 'styled-components';
import Map from '../Map/Map';

const FullWidthWrapper = styled.div`
    width: 100%;
    height: 70rem;
`;

function FullWidthMap({ Lat, Lng, PopupText}) {
    return (
        <section className="full-width-map" style={{ width: "100%" }}>
            <FullWidthWrapper>
                <Map Lat={Lat} Lng={Lng} PopupText={PopupText}/>
            </FullWidthWrapper>
        </section>
    )
}

export default FullWidthMap;
