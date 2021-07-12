import React, { Component } from 'react';

export default class ServiceListItem extends Component {
    render() {
        return (
            <div className="card-wrapper card-space anteprima-avvisi">
                <div className="card card-bg">
                    <div className="card-body">
                        <p className="title"><strong>SISCO - Servizio Bandi per Aziende Agricole</strong></p>
                        <p className="card-text">Puoi trovare informazioni tecnico-economiche ed opportunità utili alla gestione e allo sviluppo delle tue attività agricole.</p>
                        <div className="it-card-footer p-4">
                            <span className="card-signature"></span>
                            <a className="read-more" rel="nofollow noopener noreferrer" href="/" target="_blank">
                                <span className="text">Vai al sito</span>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}