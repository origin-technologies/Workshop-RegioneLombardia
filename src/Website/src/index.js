// import 'bootstrap/dist/css/bootstrap.css';
import './bootstrap-italia.min.css'
import './index-dettaglio.css'
import './index.css'
import App from './App';
import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import reportWebVitals from './reportWebVitals';

const rootElement = document.getElementById('root');
ReactDOM.render(
  <BrowserRouter>
    <App />
  </BrowserRouter>,
  rootElement
);
reportWebVitals();