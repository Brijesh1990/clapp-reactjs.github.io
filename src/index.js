import React from 'react';
import ReactDOM from 'react-dom/client';
import './calc.css';
import reportWebVitals from './reportWebVitals';
import App from './App';

const root=ReactDOM.createRoot(document.getElementById("clc-app"));
root.render(
    <React.StrictMode>

     <App />  
    
    </React.StrictMode>
);
reportWebVitals();