import React, { Component } from 'react';
import { Menu, Close, Key } from 'react-ionicons'
import regionelombardialogowhite from '../images/regionelombardialogowhite.png';
import Navbar from './Navbar'
import SubHeader from './SubHeader'

export default class Header extends Component {
    render() {
        return (
            <header>
                <div className="it-header-slim-wrapper px-2">
                    <div className="container-fluid">
                        <div className="row">
                            <div className="col-12">
                                <div className="it-header-slim-wrapper-content min-height-48">
                                    <a aria-label="Logo Regione Lombardia" className="d-lg-block navbar-brand ml-2" href="/">
                                        <img src={regionelombardialogowhite} alt="Logo Regione Lombardia" />
                                    </a>
                                    <div className="header-slim-right-zone white-border-color- d-none d-md-flex"></div>
                                    <div className="header-slim-right-zone white-border-color-">
                                        <div className="btn btn-primary btn-icon w-100 btn-rl disabled" aria-disabled="true">
                                            <span className="rounded-icon white-border-color-">
                                                <Key className="icon icon-primary white-color" />
                                            </span>
                                            <span className="d-block white-color font-weight-bold">
                                                <a href="/" className="noLine change-profile btn-login">Accedi</a>
                                            </span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="it-header-wrapper it-shadow">
                    <div className="it-nav-wrapper">
                        <SubHeader />
                        <div className="it-header-navbar-wrapper theme-light-desk filiGrigi">
                            <div className="container-fluid">
                                <div className="row">
                                    <div className="col-12">
                                        <nav className="navbar navbar-expand-lg has-megamenu">
                                            <button className="custom-navbar-toggler" type="button">
                                                <div className="icon">
                                                    <Menu />
                                                </div>
                                                <div className="icon d-none">
                                                    <Close />
                                                </div>
                                            </button>
                                            <Navbar />
                                        </nav>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </header>
        )
    }
}