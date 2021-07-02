import React from 'react';
import './GeneralErrorMessage.scss';

function GeneralErrorMessage({ children, success }) {
    return (
        <div className="general-error">
            <div className="general-error-inner">
                <span className="link-label">{success ? 'Success:' : 'Error:'}<span className="label">{children}</span></span>
            </div>
        </div>
    )
}

export default GeneralErrorMessage;
