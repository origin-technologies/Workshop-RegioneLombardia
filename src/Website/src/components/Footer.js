import React, { Component } from 'react';

export default class Footer extends Component {
    render() {
        return (
            <footer id="footer" className="it-footer mt-auto">
                <div className="it-footer-main">
                    <div className="container-fluid py-5">
                        <div className="row">
                            <div className="col-12 aria-px-sm-3">
                                <div className="text-white font-weight-semibold display-3 mb-2">Bandi online</div>
                            </div>
                            <div className="col-lg-4 col-md-4 col-sm-4 aria-px-sm-3">
                                <div className="link-list-wrapper">
                                    <ul className="footer-list link-list clearfix mb-0">
                                        <li className="d-none d-sm-block">
                                            <hr className="border-white" />
                                        </li>
                                        <li className="list-item">
                                            <a className="open-modal-footer" href="/" title="Privacy">Privacy</a>
                                        </li>
                                        <li className="d-none d-sm-block">
                                            <hr className="border-white" />
                                        </li>
                                        <li className="list-item">
                                            <a className="open-modal-footer" href="/" title="Accessibilità">Accessibilità</a>
                                        </li>
                                        <li className="d-none d-sm-block">
                                            <hr className="border-white" />
                                        </li>
                                        <li className="list-item">
                                            <a className="open-modal-footer" href="/" title="Cookie Policy">Cookie Policy</a>
                                        </li>
                                        <li className="d-none d-sm-block">
                                            <hr className="border-white" />
                                        </li>
                                    </ul>
                                </div>
                            </div>
                            <div className="col-lg-4 col-md-4 col-sm-4 pb-2 d-sm-block aria-px-sm-3">
                                <div className="link-list-wrapper">
                                    <ul className="footer-list link-list clearfix">
                                        <li className="d-none d-sm-block">
                                            <hr className="border-white" />
                                        </li>
                                        <li className="list-item">
                                            <a className="open-modal-footer" href="/" title="Note legali">Note legali</a>
                                        </li>
                                        <li className="d-none d-sm-block">
                                            <hr className="border-white" />
                                        </li>
                                        <li className="list-item">
                                            <a className="open-modal-footer" href="/" title="Contatti">Contatti</a>
                                        </li>
                                        <li className="d-none d-sm-block">
                                            <hr className="border-white" />
                                        </li>
                                        <li className="list-item">
                                            <a className="open-modal-footer" href="/" title="Credits">Credits</a>
                                        </li>
                                        <li className="d-none d-sm-block">
                                            <hr className="border-white" />
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-lg-12 aria-px-sm-3">
                                <p>© Copyright Regione Lombardia tutti i diritti riservati CF 80050050154 - Piazza Città di Lombardia, 1 20124 Milano</p>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-lg-12 aria-px-sm-3">
                                <p className="small"> v.21.0.00-440528-24052021</p>
                            </div>
                        </div>
                    </div>
                </div>
            </footer>
        )
    }
}