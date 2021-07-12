import React, { Component } from 'react';
import SectionHeader from './SectionHeader'
import infosvg1 from '../images/info-1.svg';
import infosvg2 from '../images/info-2.svg';
import infosvg3 from '../images/info-3.svg';
import infosvg4 from '../images/info-4.svg';
import infosvg6 from '../images/info-6.svg';
import SponsorList from './SponsorList'

export default class HowItWorks extends Component {
    render() {
        return (
            <div>
                <SectionHeader />
      			<div className="container-fluid py-3">
        			<div className="row">
          				<div className="col-12 aria-px-sm-3">
        					<h2 className="mb-3">Come funziona l'adesione ad un bando</h2>
        					<h3 className="sr-only">Bandi online</h3>
        					<p><small>Sono previste in totale <strong>due modalità</strong> di partecipazione ad un Bando.</small></p>
        				</div>
        			</div>	
        			<div className="row pt-3">
          				<div className="col-md-7 aria-px-sm-3">
            				<h4><span className="display-2">1</span> Aderire tramite portale Bandi Online</h4>
            				<p><small>Puoi seguire la procedura del portale Bandi Online, dove è possibile trovare il bando che fa per te, compilare i dati necessari per l'adesione, inviare domanda ed effettuare rendicontazioni.</small></p>
          				</div>
        			</div>
        			<div className="row pt-3 pb-5 aria-px-sm-3">
          				<div className="col-md-3 col-sm-6 col-7">
            				<div className="pb-2">
             					<img src={infosvg1} alt="infografica-1" className="img-fluid" />
            				</div>
            				<p className="w-75 mx-auto">Crea il tuo profilo, potrai associare altri profili per aziende o enti con cui operare</p>
          				</div>
          				<div className="col-md-3 col-sm-6 col-7 offset-5 offset-sm-0">
            				<div className="pb-2">
             					<img src={infosvg2} alt="infografica-1" className="img-fluid" />
            				</div>
            				<p className="w-75 mx-auto px-lg-3">Ricerca un bando in linea con il tuo profilo.</p>
          				</div>
          				<div className="col-md-3 col-sm-6 col-7 aria-px-sm-3">
            				<div className="pb-2">
             					<img src={infosvg3} alt="infografica-1" className="img-fluid" />
            				</div>
            				<p className="w-75 mx-auto pl-lg-5">Compila la domanda inserendo i dati e gli allegati richiesti</p>
          				</div>
          				<div className="col-md-3 offset-5 col-sm-6 offset-sm-0 col-7">
            				<div className="pb-2">
             					<img src={infosvg4} alt="infografica-1" className="img-fluid" />
            				</div>
            				<p className="w-75 pl-lg-5 pl-md-4 ml-lg-5 mx-auto">Verifica in ogni momento gli avanzamenti della tua domanda</p>
          				</div>
        			</div>
        			<div className="row pb-4 aria-px-sm-3"> 				
          				<div className="col-lg-4 col-md-6">
            				<h4><span className="display-2">2</span> Aderire tramite portale esterno</h4>
            				<p><small>Puoi aderire a specifici Bandi presenti su questo portale tramite il link indicato per raggiungere il sito esterno sul quale è possibile compilare la domanda.</small></p>
            				<div className="pt-2 w-50 pr-sm-5">
              					<img src={infosvg6} alt="infografica-1" className="img-fluid" />
             				</div>
          				</div>
        			</div>  	
      			</div>
				<SponsorList />
			</div>
        );
    }
}