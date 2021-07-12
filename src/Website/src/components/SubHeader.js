import React, { Component } from 'react';
import regionelombardialogo from '../images/regionelombardialogo.jpg';

export default class SubHeader extends Component {
    render() {
        return (
            <div className="it-header-center-wrapper theme-light white-bg px-2">
                <div className="container-fluid">
                    <div className="row">
                        <div className="col-12">
                            <div className="it-header-center-content-wrapper white-bg">
                                <div className="it-brand-wrapper">
                                    <a aria-label="Logo Regione Lombardia" href="/">
                                        <img className="d-lg-block" src={regionelombardialogo} alt="Bandi online | Regione Lombardia" />
                                        <div className="it-brand-text">
                                            <p className="service">Bandi online</p>
                                        </div>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}