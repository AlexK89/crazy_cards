import React from 'react';
import ReactDOM from 'react-dom';
import './base_scss/normalize.css';
import './base_scss/index.scss';
import App from './App';
import {BrowserRouter} from "react-router-dom";

ReactDOM.render(
    <BrowserRouter>
        <App />
    </BrowserRouter>
    , document.getElementById('root'));

