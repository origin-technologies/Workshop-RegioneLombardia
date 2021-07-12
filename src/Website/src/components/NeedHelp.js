import React, { Component } from 'react';
import { Mail, Call } from 'react-ionicons'
import SponsorList from './SponsorList'

export default class NeedHelp extends Component {
    render() {
        return (
            <div>
                <section className="container-fluid pb-5">
                    <div className="row">
                        <div className="col-12 aria-px-sm-3">
                            <h2 className="text-center py-5 font-weight-bold">Hai bisogno d'aiuto?</h2>
                            <h3 className="sr-only">Bandi online</h3>
                        </div>
                    </div>
                    <div className="row justify-content-md-center scrivici aria-px-sm-3">
                        <div className="col-lg-4 mb-3 px-lg-2 px-0">
                            <div className="box bg-bandi-grey-light p-5 h-100">
                                <div>
                                    <h4 className="pb-3">
                                        <Mail className="icon icon-lg mr-2" />
                                        Mandaci un'email</h4>
                                    <p className="mb-0 text-black"><strong>Posta elettronica</strong></p>
                                    <a href="/" title="Scrivi un email a bandi@regione.lombardia.it" className="font-weight-semibold">bandi@regione.lombardia.it</a>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4 mb-3 px-lg-2 px-0">
                            <div className="box bg-bandi-grey-light p-5 h-100">
                                <div>
                                    <h4 className="pb-3">
                                        <Call className="icon icon-lg mr-2" />
                                        Chiamaci</h4>
                                    <p className="mb-0 text-black"><strong>Recapiti telefonici</strong></p>
                                    <a href="tel:800.131.151" title="Chiama il numero verde (Lun-Sab dalle ore 8 alle ore 20)" className="font-weight-semibold" rel="nofollow noopener noreferrer" target="_blank">800.131.151</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                <SponsorList />
            </div>
        );
    }
}

