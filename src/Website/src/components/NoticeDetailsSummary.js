import React, { Component } from 'react';
import { Pricetags, People, Business, LogoFacebook, LogoTwitter, LogoLinkedin, Mail } from 'react-ionicons'
import regionelombardialogo from '../images/regionelombardialogo.jpg';

export default class NoticeDetailsSummary extends Component {
    render() {
        return (
            <section className="container-fluid">
                <div className="row">
                    <div className="col-12 aria-px-sm-3 mt-3">
                        <div className="tag-titolo pb-3 col-12">
                            <span className="pr-4"><small className="badge badge-success">Aperto</small></span>
                            <span className="pl-2 text-uppercase">
                                <strong>Bando </strong>
                            </span>
                        </div>
                        <div className="tag-titolo pb-3 col-12">
                            <Pricetags className="icon icon-lg"/>
                            <span className="font-italic">Legge 9, Enti locali, Veicoli, Sostituzione veicoli, Rottamazione, Rinnova, Autovetture, Comuni, Contributo, Enti, Auto elettriche, Incentivi, 2021, Provincia</span>
                        </div>
                        <h1>Rinnova Veicoli Enti pubblici - Anno 2021</h1>
                        <h2 className="sr-only">Bandi online</h2>
                    </div>
                </div>
                <div className="row">
                    <div className="col-12 col-lg-4 aria-px-sm-3 pb-4 pb-lg-0">
                        <img className="img-fluid w-100" src="https://d1ntg5o9x4nm7t.cloudfront.net/images/1024x768_finestra-4_1182_low.jpg" alt="Rinnova Veicoli Enti pubblici - Anno 2021" />
                    </div>
                    <div className="col-12 aria-px-sm-3 pb-2 col-lg-8">
                        <div className="row">
                            <div className="col-12 pb-2  ml-lg-2 ml-0">
                                <span className="categoria">
                                    <People className="icon" />
                                </span>
                                <span className="categoria">
                                    <Business className="icon" />
                                </span>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-12 ml-lg-2 ml-0">
                                <div className="lead">
                                    <p>Codice: <strong className="get-codice-bando-chatbot">RLT12021020242</strong></p>
                                    <p className="mb-0">Disponibile dal: <strong>07/07/2021 ,</strong> ore 10:00</p>
                                    <p>Scade il:  <strong>  29/10/2021 ,</strong> ore 12:00</p>
                                    <div className="row">
                                        <div className="col-12 aria-px-sm-3 mt-4">
                                            <ul className="list-inline">
                                                <li className="list-inline-item">
                                                    <a className="share-popup" target="_blank" title="Condividi questa pagina su Facebook" href="/" rel="nofollow noopener noreferrer">
                                                        <LogoFacebook className="icon rounded-circle primary-bg-b2 p-1" color="#FFFFFF"/>
                                                        <span className="sr-only">Condividi questa pagina su Facebook</span>
                                                    </a>
                                                </li>
                                                <li className="list-inline-item">
                                                    <a className="share-popup" target="_blank" title="Condividi questa pagina su Twitter" href="/" rel="nofollow noopener noreferrer">
                                                        <LogoTwitter className="icon rounded-circle primary-bg-c5 p-1" color="#FFFFFF" />
                                                        <span className="sr-only">Condividi questa pagina su Twitter</span>
                                                    </a>
                                                </li>
                                                <li className="list-inline-item">
                                                    <a className="share-popup" target="_blank" title="Condividi questa pagina su Linkedin" href="/" rel="nofollow noopener noreferrer">
                                                        <LogoLinkedin className="icon rounded-circle primary-bg-a5 p-1" color="#FFFFFF" />
                                                        <span className="sr-only">Condividi questa pagina su Linkedin</span>
                                                    </a>
                                                </li>
                                                <li className="list-inline-item">
                                                    <a title="Condividi questa pagina via posta elettronica" href="/" rel="nofollow noopener noreferrer">
                                                        <Mail className="icon rounded-circle neutral-2-bg-a4 p-1" color="#FFFFFF" />
                                                        <span className="sr-only">Condividi questa pagina via posta elettronica</span>
                                                    </a>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="col-12 aria-px-sm-3 mt-3">
                        <div className="lead">
                            <p>In attuazione della d.G.R n. 4758/2021, Regione Lombardia favorisce il rinnovo del parco veicolare dei soggetti pubblici della Lombardia con veicoli di categoria M1, M2, N1 e N2 (art.47 del Codice della Strada - d.lgs. n. 285/92) a bassissime o zero emissioni destinati al trasporto di persone o di merci, privilegiando la demolizione di veicoli a benzina fino ad Euro 2/II incluso o diesel fino ad Euro 5/V incluso.</p>
                        </div>
                    </div>
                </div>
                <div className="row py-4 info-dettaglio-bando">
                    <div className="col-lg-12 aria-px-sm-3">
                        <div className="row">
                            <div className="col-sm-3">
                                <p className="text-uppercase mb-1"><small>Ente responsabile</small></p>
                                <div className="row pb-3">
                                    <div className="col-4 col-sm-6">
                                        <div className="it-grid-item-wrapper">
                                            <a href="/" title="Regione Lombardia">
                                                <div className="img-responsive">
                                                    <div className="img-wrapper">
                                                        <img src={regionelombardialogo} alt="logo regione lombardia" />
                                                    </div>
                                                </div>
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-12 aria-px-sm-3">
                        <div className="d-flex pt-4">
                            <a className="read-more ml-lg-auto pr-4" href="#accordion-boxtext-container" role="button" data-attribute="forward">Leggi di più</a>
                            <span className="card-signature">
                                <button data-id="8a5b24227a3920cb017a567d54ff73b5" data-info-privacy-richiesta="true" data-info-privacy-id="8a5b24217a0e4e7b017a5bffc3a10f4e" data-use-bol="false" data-codice-bando="RLT12021020242" className="btn btn-xs btn-primary btn-nuova-bozza" type="button">Fai domanda</button>
                            </span>
                        </div>
                    </div>
                </div>           
            </section>
        );
    }
}