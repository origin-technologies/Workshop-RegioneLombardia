import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Business, People, InformationCircle } from 'react-ionicons'

export default class NoticeListItem extends Component {
    truncate(string, maxLength) {
        if(string !== undefined){
            return string.length > maxLength ? string.substring(0, maxLength) + "..." : string;
        }
        return '';
    }
    formatDate(date) {
        if(date !== undefined){
            let datetime = new Date(date)
            return datetime.getDate() + "-" + (datetime.getMonth() + 1) + "-" + datetime.getFullYear();
        }
        return '';
    }
    render() {
        return (
            <div className="card-wrapper card-space">
                <div className="card card-bg card-big">
                    <div className="flag flag-card" data-tooltip-remove="Rimuovi dai tuoi bandi preferiti"
                        data-tooltip-add="Aggiungi ai tuoi bandi preferiti">
                        <span className="favourite icon-popover" title=""></span>
                    </div>
                    <div className="card-body p-4 mt-4">
                        <div className="etichetta">
                            <span className="categoria">
                                <People className="icon" />
                            </span>
                            <span className="categoria">
                                <Business className="icon" />
                            </span>
                        </div>
                        <div className="etichetta mt-1">
                            <span>
                                <small className="badge badge-success">Aperto</small>
                                <em>
                                    <span> chiude il </span>
                                    <strong>{this.formatDate(this.props.notice.availablityEndDate)}</strong>
                                </em>
                            </span>
                            <p className="mt-1">Bando</p>
                        </div>
                        <div className="wrapper-image">
                            <a className="text-decoration-none" href="/">
                                <img src="https://d1ntg5o9x4nm7t.cloudfront.net/images/1024x768_finestra-4_1182_low.jpg" alt="Finestra 4, Province: Brescia - Avviso a favore degli intermediari del commercio" />
                            </a>
                        </div>
                        <a className="text-decoration-none" href="/">
                            <h4 className="card-title icon-popover" title="">{this.truncate(this.props.notice.title, 72)}</h4>
                        </a>
                        <p className="card-text">
                            Codice: <strong>{this.props.notice.code}</strong><br />
                            <br />
                            {this.truncate(this.props.notice.description, 147)}
                            <InformationCircle lass="icon icon-xs icon-popover" />
                        </p>
                        <div className="it-card-footer">
                            <span className="card-signature">
                                <button type="button" className="btn btn-xs btn-primary btn-nuova-bozza">Fai domanda</button>
                            </span>
                            <Link className="read-more" to={{ pathname: `/noticedetails/${this.props.notice.id}` }}><span className="text">Vedi dettaglio</span></Link>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}