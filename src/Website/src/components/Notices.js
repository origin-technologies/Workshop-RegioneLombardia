import React, { Component } from 'react';
import NoticeList from './NoticeList'
import Timezone from './Timezone'
import SponsorList from './SponsorList'

export default class Home extends Component {
    render() {
        return (
            <div>
                <Timezone />
                <NoticeList title="Bandi" />
                <SponsorList />
            </div>
        )
    }
}