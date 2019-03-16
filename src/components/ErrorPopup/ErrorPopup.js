import React from 'react';
import './ErrorPopup.scss';

const ErrorPopup = () => {
    return (
        <div className="form_error">
            <p className="form_error__message">Server error. Please try again later</p>
        </div>
    );
};

export default ErrorPopup;