import React, { Component } from 'react';
import { Attach } from 'react-ionicons'

export default class AttachmentListItem extends Component {
    render() {
        return (
            <div className="card card-teaser rounded shadow">
                <div className="file text-center">
                    <Attach className="icon icon-xl" height="65px" width="65px" />
                    <p className="text-uppercase font-weight-semibold mb-0">pdf 112,78 Kb</p>
                </div>
                <div className="card-body">
                    <h5 className="card-title font-weight-semibold">Approvazione dell’avviso per gli intermediari del commercio – Decreto n. 8949 del 30 giugno 2021</h5>
                </div>
            </div>
        );
    }
}