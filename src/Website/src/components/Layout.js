import React, { Component } from 'react';
import Header from './Header';
import Footer from './Footer';

export class Layout extends Component {
    render() {
        return (
            <div>
                <Header />
                <main>
                    {this.props.children}
                </main>
                <Footer />
            </div>
        );
    }
}
