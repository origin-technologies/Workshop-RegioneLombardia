import React, { Component } from 'react';
import { ChevronDown } from 'react-ionicons'

export default class NoticeDetailsInfo extends Component {
    render() {
        return (
            <section className="container-fluid">
                <div className="row">
                    <div className="col-12 aria-px-sm-3">
                        <div id="accordion-boxtext-container" className="accordion-boxtext-container collapse-div accordion-dark-theme" role="tablist">
                            <div className="collapse-header" id="headingA0">
                                <button data-toggle="collapse" data-target="#partecipanti" aria-expanded="false" className="collapsed">
                                    <span className="head-text float-left">Chi può partecipare</span>
                                    <ChevronDown className="icon icon-md float-right" />
                                </button>
                            </div>
                            <div id="partecipanti" className="collapse" role="tabpanel" data-parent="#accordion-boxtext-container" aria-labelledby="headingA0">
                                <div className="collapse-body py-2 px-0">
                                    <ul className="text-list p-0 m-0">
                                        <li className="text-list_item">
                                            <div className="item_text-description px-4 py-2">Gli intermediari del commercio con sede in Lombardia (microimprese) che operano nei seguenti settori:<br />46.1 (compresi tutti i sottodigit) - Intermediari del commercio<br />45.11.02 - Intermediari del commercio di autovetture e di autoveicoli leggeri<br />45.19.02 - Intermediari del commercio di altri autoveicoli<br />45.31.02 - Intermediari del commercio di parti ed accessori di autoveicoli<br />45.40.12 - Intermediari del commercio di motocicli e ciclomotori&nbsp;<br />45.40.22 - Intermediari del commercio di parti ed accessori per motocicli e ciclomotori</div>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                            <div className="collapse-header" id="headingA1">
                                <button data-toggle="collapse" data-target="#descrizione" aria-expanded="false" className="collapsed">
                                    <span className="head-text float-left">Di cosa si tratta</span>
                                    <ChevronDown className="icon icon-md float-right" />
                                </button>
                            </div>
                            <div id="descrizione" className="collapse" role="tabpanel" data-parent="#accordion-boxtext-container" aria-labelledby="headingA1">
                                <div className="collapse-body py-2 px-0">
                                    <ul className="text-list p-0 m-0">
                                        <li className="text-list_item">
                                            <div className="item_text-description px-4 py-2"><p>L’intervento è finalizzato a sostenere gli intermediari del commercio con sede in Lombardia attraverso un contributo a fondo perduto pari al valore della tassa automobilistica pagata dagli intermediari del commercio relativa al periodo tributario avente decorrenza nell’anno 2020, al netto di eventuali sanzioni ed interessi, a titolo di indennizzo per le limitazioni e i disagi subiti nella crisi da Covid 19.</p>
                                                <p>Il bando è rivolto alle microimprese che hanno subito un calo di fatturato di almeno un terzo nel periodo marzo-ottobre 2020, rispetto al medesimo periodo del 2019 e, in alternativa, essere state costituite a partire dal 1° gennaio 2019 (per tali imprese, infatti non è richiesto il requisito del calo del fatturato).</p></div>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                            <div className="collapse-header" id="headingA3">
                                <button data-toggle="collapse" data-target="#dotazioni" aria-expanded="false">
                                    <span className="head-text float-left">Dotazione finanziaria</span>
                                    <ChevronDown className="icon icon-md float-right" />
                                </button>
                            </div>
                            <div id="dotazioni" className="collapse" role="tabpanel" data-parent="#accordion-boxtext-container" aria-labelledby="headingA3">
                                <div className="collapse-body py-2 px-0">
                                    <ul className="text-list p-0 m-0">
                                        <li className="text-list_item">
                                            <div className="item_text-description px-4 py-2">1.000.000,00</div>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                            <div className="collapse-header" id="headingA4">
                                <button data-toggle="collapse" data-target="#caratteristiche" aria-expanded="false">
                                    <span className="head-text float-left">Caratteristiche dell'agevolazione</span>
                                    <ChevronDown className="icon icon-md float-right" />
                                </button>
                            </div>
                            <div id="caratteristiche" className="collapse" role="tabpanel" data-parent="#accordion-boxtext-container" aria-labelledby="headingA4">
                                <div className="collapse-body py-2 px-0">
                                    <ul className="text-list p-0 m-0">
                                        <li className="text-list_item">
                                            <div className="item_text-description px-4 py-2">Sovvenzione a fondo perduto</div>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                            <div className="collapse-header" id="headingA5">
                                <button data-toggle="collapse" data-target="#regimeAiutoScheda" aria-expanded="false">
                                    <span className="head-text float-left">Regime di Aiuto di Stato</span>
                                    <ChevronDown className="icon icon-md float-right" />
                                </button>
                            </div>
                            <div id="regimeAiutoScheda" className="collapse" role="tabpanel" data-parent="#accordion-boxtext-container" aria-labelledby="headingA5">
                                <div className="collapse-body py-2 px-0">
                                    <ul className="text-list p-0 m-0">
                                        <li className="text-list_item">
                                            <div className="item_text-description px-4 py-2">Regime di aiuti autorizzato a seguito di notifica</div>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                            <div className="collapse-header" id="headingA6">
                                <button data-toggle="collapse" data-target="#comePartecipare" aria-expanded="false">
                                    <span className="head-text float-left">Come partecipare</span>
                                    <ChevronDown className="icon icon-md float-right" />
                                </button>
                            </div>
                            <div id="comePartecipare" className="collapse" role="tabpanel" data-parent="#accordion-boxtext-container" aria-labelledby="headingA6">
                                <div className="collapse-body py-2 px-0">
                                    <ul className="text-list p-0 m-0">
                                        <li className="text-list_item">
                                            <div className="item_text-description px-4 py-2">Le domande di contributo dovranno pervenire esclusivamente in modalità telematica attraverso la Piattaforma Bandi Online di Regione Lombardia, accedendo con il profilo "Cittadino".</div>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                            <div className="collapse-header" id="headingA7">
                                <button data-toggle="collapse" data-target="#proceduraSelezione" aria-expanded="false">
                                    <span className="head-text float-left">Procedura selezione</span>
                                    <ChevronDown className="icon icon-md float-right" />
                                </button>
                            </div>
                            <div id="proceduraSelezione" className="collapse" role="tabpanel" data-parent="#accordion-boxtext-container" aria-labelledby="headingA7">
                                <div className="collapse-body py-2 px-0">
                                    <ul className="text-list p-0 m-0">
                                        <li className="text-list_item">
                                            <div className="item_text-description px-4 py-2">Procedura automatica</div>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                            <div className="collapse-header" id="headingA8">
                                <button data-toggle="collapse" data-target="#infoContatti" aria-expanded="false">
                                    <span className="head-text float-left">Informazioni e contatti</span>
                                    <ChevronDown className="icon icon-md float-right" />
                                </button>
                            </div>
                            <div id="infoContatti" className="collapse" role="tabpanel" data-parent="#accordion-boxtext-container" aria-labelledby="headingA8">
                                <div className="collapse-body py-2 px-0">
                                    <ul className="text-list p-0 m-0">
                                        <li className="text-list_item">
                                            <div className="item_text-description px-4 py-2">
                                                <p>Informazioni sul bando: silombardia@regione.lombardia.it</p>
                                                <p>Informazioni tecniche: Call center Numero verde 800.131.151, Email bandi@regione.lombardia.it</p>
                                            </div>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="row pb-5 pt-5">
                    <div className="col-12 aria-px-sm-3">
                        <div className="tag-titolo pb-3">
                            <span> (*) La scheda informativa tipo dei bandi regionali non ha valore legale. Si rinvia al testo dei bandi per tutti i contenuti completi e vincolanti. </span>
                        </div>
                    </div>
                </div>
            </section>
        );
    }
}