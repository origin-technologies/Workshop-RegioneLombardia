import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export default class Navbar extends Component {
    render() {
        return (
            <div className="navbar-collapsable" id="mobile-menu">
                <div className="overlay"></div>
                <div className="close-div sr-only">
                    <button className="btn close-menu" type="button">
                        <span className="it-close"></span>Chiudi
                    </button>
                </div>
                <div className="menu-wrapper">
                    <ul className="navbar-nav">
                        <li className="nav-item"><a className="nav-link" href="/"><span>Home</span></a></li>
                        <li className="nav-item"><Link className="nav-link" to='/notices'><span>Bandi</span></Link></li>
                        {/* <li className="nav-item"><a className="nav-link" href="/"><span>Comunicazioni</span></a></li> */}
                        <li className="nav-item"><Link className="nav-link" to='/howitworks'><span>Come Funzione</span></Link></li>
                        <li className="nav-item"><Link className="nav-link" to='/needhelp'><span>Assistenza</span></Link></li>
                    </ul>
                </div>
            </div>
        );
    }
}