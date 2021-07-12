import React, { Component } from 'react';
import AnnouncementListItem from './AnnouncementListItem'

export default class AnnouncementList extends Component {
    render() {
        return (
            <section className="bg-bandi-blue-light py-4">
			<div className="container-fluid">
				<div className="row">
					<div className="col-12 pb-4 aria-px-sm-3">
						<h3>Comunicazioni recenti</h3>
					</div>
				</div>
				<div className="row">
					<div className="col-lg-4 pb-4">
						<div className="card-wrapper card-space anteprima-avvisi">
							<AnnouncementListItem />
						</div>
					</div>
				</div>
				<div className="row">
					<div className="col-12 text-center aria-px-sm-3">
						<a className="btn btn-info btn-vedi-tutti /bandi/comunicazioni" href="/">
							<span>Vedi tutte</span>
						</a>
					</div>
					<div className="avvisi_modal"></div>
				</div>
			</div>
		</section>
        )
    }
}