import React, { Component } from 'react';
import AttachmentListItem from './AttachmentListItem'

export default class AttachmentList extends Component {
    render() {
        return (
            <section className="container-fluid aria-px-sm-3 more-results">
                <div className="row">
                    <div className="col-12 aria-px-sm-3">
                        <h4 className="font-weight-semibold pb-3">Allegati</h4>
                    </div>
                </div>
                <div className="row">
                    <div className="col-12 col-lg-6 mb-3 aria-px-sm-3">
                        <a href="/" target="_blank" className="allegato" rel="nofollow noopener noreferrer">
                            <AttachmentListItem />
                        </a>
                    </div>
                </div>
            </section>
        );
    }
}