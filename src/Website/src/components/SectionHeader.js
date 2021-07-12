import React, { Component } from 'react';
import Timezone from './Timezone'

export default class SectionHeader extends Component {
    render() {
        return (
            <section className="col-12 bg-bandi-grey-light">
				<Timezone />
				<div className="container-fluid py-4">
					<div className="row">
						<div className="col-12 aria-px-sm-3">
							<h1 className="pb-3">Cosa è Bandi Online</h1>
							<p><strong>Bandi online</strong> è il servizio che permette a cittadini, imprese ed enti pubblici e privati di presentare online le domande di partecipazione ai bandi promossi da Regione Lombardia e finanziati con fondi regionali, nazionali ed europei. Il portale mira a semplificare l'accesso alle informazioni e la partecipazione ai bandi da parte di cittadini, imprese ed enti, che tramite la piattaforma possono presentare le domande online e mantenersi sempre aggiornati sull'iter delle proprie pratiche.</p>
						</div>
					</div>
				</div>
			</section>
        );
    }
}