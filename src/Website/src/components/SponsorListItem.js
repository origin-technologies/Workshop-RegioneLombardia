import React, { Component } from 'react';
import fselogo from '../images/fselogo.png';
import fesrlogo from '../images/fesrlogo.png';
import interreglogo from '../images/interreglogo.png';
import europeanunionlogo from '../images/europeanunionlogo.jpg';
import italianrepubliclogo from '../images/italianrepubliclogo.jpg';
import regionelombardialogo from '../images/regionelombardialogo.jpg';

export default class SponsorListItem extends Component {
    render() {
        return (
            <div className="col-12 d-flex flex-wrap justify-content-center">
                <div className="img-responsive">
                    <div className="img-wrapper">
                        <a rel="nofollow noopener noreferrer" href="/" target="_blank">
                            <img src={europeanunionlogo} alt="logo europa" />
                        </a>
                    </div>
                </div>
                <div className="img-responsive">
                    <div className="img-wrapper">
                        <a rel="nofollow noopener noreferrer" href="/" target="_blank">
                            <img src={italianrepubliclogo} alt="logo repubblica" />
                        </a>
                    </div>
                </div>
                <div className="img-responsive">
                    <div className="img-wrapper">
                        <a rel="nofollow noopener noreferrer" href="/" target="_blank">
                            <img src={regionelombardialogo} alt="logo regione lombardia" />
                        </a>
                    </div>
                </div>
                <div className="img-responsive">
                    <div className="img-wrapper">
                        <a rel="nofollow noopener noreferrer" href="/" target="_blank">
                            <img src={fesrlogo} alt="logo fesr" />
                        </a>
                    </div>
                </div>
                <div className="img-responsive">
                    <div className="img-wrapper">
                        <a rel="nofollow noopener noreferrer" href="/" target="_blank">
                            <img src={fselogo} alt="logo FSE" />
                        </a>
                    </div>
                </div>
                <div className="img-responsive">
                    <div className="img-wrapper">
                        <a rel="nofollow noopener noreferrer" href="/" target="_blank">
                            <img src={interreglogo} alt="logo Interreg" />
                        </a>
                    </div>
                </div>
            </div>
        )
    }
}