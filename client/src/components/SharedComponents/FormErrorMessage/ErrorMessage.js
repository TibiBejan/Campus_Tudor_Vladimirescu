import React from 'react';
import styled from 'styled-components';

const ErrorMessageWrapper = styled.div`
    width: 100%;
    padding: 2.5rem 0;
    display: flex;
    justify-content: flex-start;
    align-items: center;
    text-align: start;
    transition: var(--hover-transition);
`;

const MessageLabel = styled.p`
    font-size: 1.6rem;
    font-weight: 500;
    letter-spacing: 0.1rem;
    color: #a50000;
    transition: var(--hover-transition);
`;

function ErrorMessageEl ({ children }) {
    return (
        <ErrorMessageWrapper>
            <MessageLabel>{children}</MessageLabel>
        </ErrorMessageWrapper>
    )
}

export default ErrorMessageEl;
