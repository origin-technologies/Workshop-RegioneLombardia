import React, { Component } from 'react';
import ServiceListItem from './ServiceListItem'

export default class ServiceList extends Component {
    render() {
        return (
            <section className="bg-bandi-blue-light py-4">
			<div className="container-fluid">
				<div className="row">
					<div className="col-12 pb-4 aria-px-sm-3">
						<h3>Altri servizi per la partecipazione online dei bandi</h3>
					</div>
				</div>
				<div className="row">
					<div className="col-lg-6 pb-4">
						<ServiceListItem />
					</div>
				</div>
			</div>
		</section>
        )
    }
}