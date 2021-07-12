import React, { Component } from 'react';
import SponsorListItem from './SponsorListItem'

export default class SponsorList extends Component {
    render() {
        return (
            <div className="container-fluid sponsor">
                <div className="row">
                    <SponsorListItem />
                </div>
            </div>
        )
    }
}