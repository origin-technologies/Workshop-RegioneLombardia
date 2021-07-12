import React, { Component } from 'react';

export default class Timezone extends Component {
    constructor(props) {
        super(props)
        this.state = {
             currentDate: ''
        }
    } 
    componentDidMount(){
        let datetime = new Date()
        let months = ["Gennaio", "Febbraio", "Marzo","Aprile", "Maggio", "Giugno", "Luglio", "Agosto", "Settembre", "Ottobre", "Novembre", "Dicembre"]
        this.setState({ 
            currentDate: datetime.getDate() + " " + months[datetime.getMonth()] + " " + datetime.getFullYear() + ", ore " + datetime.getHours() + ":" + datetime.getMinutes()
        })
    }
    render() {
        return (
            <div>
                <div className="container-fluid pt-4">
                    <div className="row">
                        <div className="col-xs-12 col-md-8 aria-px-sm-3"></div>
                        <div className="col-md-4 mb-2 aria-px-sm-3">
                            <div className="contDataOra font-weight-semibold text-md-right">{this.state.currentDate}</div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}