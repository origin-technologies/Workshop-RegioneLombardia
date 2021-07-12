import React, { Component } from 'react';
import NoticeDetailsInfo from './NoticeDetailsInfo'
import NoticeDetailsSummary from './NoticeDetailsSummary'
import NoticeDetailsApplicationForm from './NoticeDetailsApplicationForm'
// import AttachmentList from './AttachmentList'
// import SponsorList from './SponsorList'

export default class NoticeDetails extends Component {
    render() {
        const { params } = this.props.match;
        return (
            <div>
                <NoticeDetailsSummary />
                <NoticeDetailsInfo />
                {/* <AttachmentList /> */}
                <NoticeDetailsApplicationForm idNotice={params.id}/>
                {/* <SponsorList /> */}
            </div>
        );
    }
}