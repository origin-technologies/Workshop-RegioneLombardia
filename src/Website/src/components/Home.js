import React, { Component } from 'react';
import NoticeList from './NoticeList'
import AnnouncementList from './AnnouncementList'
import ServiceList from './ServiceList'
import Timezone from './Timezone'
import SponsorList from './SponsorList'

export default class Home extends Component {
    render() {
        return (
            <div>
                <Timezone />
                <NoticeList title="Bandi in primo piano" />
                <AnnouncementList /> 
                <ServiceList />
                <SponsorList />
            </div>
        )
    }
}