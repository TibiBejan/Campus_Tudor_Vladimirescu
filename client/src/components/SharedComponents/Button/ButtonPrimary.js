import React from 'react';
import { IconContext } from 'react-icons';
import { BsArrowRight } from "react-icons/bs";
import './ButtonPrimary.scss';

function Button({ type, disabled, onClick, textLabel }) {
    return (
        <button type={type} disabled={disabled} onClick={onClick} className="button-primary">
            <span className="button-primary-label label">{textLabel}</span>
            <IconContext.Provider value={{color: '#fafafa', size: '30px'}}>
                <BsArrowRight />
            </IconContext.Provider>
        </button>
    )
}

export default Button;
