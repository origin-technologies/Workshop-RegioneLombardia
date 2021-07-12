import React, { Component } from 'react';
import { Route } from 'react-router';
import { Layout } from './components/Layout';
import Home from './components/Home';
import Login from './components/Login';
import HowItWorks from './components/HowItWorks';
import NeedHelp from './components/NeedHelp';
import Notices from './components/Notices';
import NoticeDetails from './components/NoticeDetails';

export default class App extends Component {
    render () {
        return (
            <Layout>
                <Route exact path='/' component={Home} />
                <Route exact path='/login' component={Login} />
                <Route exact path='/notices' component={Notices} />
                <Route exact path='/howitworks' component={HowItWorks} />
                <Route exact path='/needhelp' component={NeedHelp} />
                <Route exact path='/noticedetails/:id' component={NoticeDetails} />
            </Layout>
        );
    }
}