import React from 'react';
import styled from 'styled-components';

const GradientEl = styled.div`
    position: fixed;
    top: 0;
    left: 0;
    width: 100vw;
    height: 10rem;
    background-image: linear-gradient(#1a1a1a, transparent);
    z-index: 100;
    pointer-events: none;
    user-select: none;
`;

function Gradient() {
    return (
        <GradientEl />
    )
}

export default Gradient;
