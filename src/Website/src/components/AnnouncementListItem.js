import React, { Component } from 'react';

export default class AnnouncementListItem extends Component {
    render() {
        return (
            <div className="card card-bg">
                <div className="card-body">
                    <div className="etichetta">
                        <span className="categoria">
                            {/* <svg className="icon">
                                <use
                                    xlink:href="/procedimenti/new/static/svg/sprite.svg#it-aria-citizen">
                                </use>
                            </svg> */}
                            <strong>Cittadini</strong>
                        </span>
                        <p className="data">06/07/2021</p>
                    </div>
                    <p className="card-text"> Bando: <strong>Concorso pubblico unico, per esami, 54 posti cat. C tecnico informatico.</strong></p>
                    <br />
                    <a className="text-decoration-none" href="/">
                        <h4 className="card-title">Concorso pubblico CPI cat. C tecnico informatico – pubblicazione esiti prova orale dei candidati esaminati in data 6 luglio 2021.</h4>
                    </a>
                    <p className="card-text">
                        <span><br />In riferimento alla procedura selettiva per esami, in esecuzione dell'intesa sottoscritta con le province e la città metropolitana di Milano, tenuto conto del piano regionale di potenzi...</span>
                        {/* <svg className="icon icon-xs icon-popover">
                            <use xlink:href="/procedimenti/new/static/svg/sprite.svg#it-info-circle">
                            </use>
                        </svg> */}
                    </p>
                    <div className="it-card-footer p-4">
                        <span className="card-signature">
                            <a className="read-more" href="/">
                                <span className="text">Vai al bando</span>
                            </a>
                        </span>
                        <a className="read-more" href="/">
                            <span className="text">Vedi dettaglio</span>
                        </a>
                    </div>
                </div>
            </div>
        )
    }
}