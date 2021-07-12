import React, { Component } from 'react';
import ApplicationService from '../services/ApplicationService'
import { Modal, ModalHeader, ModalBody, ModalFooter, Button } from 'reactstrap'
import { CheckmarkOutline } from 'react-ionicons'

export default class NoticeDetailsApplicationForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            name: '',
            surname: '',
            email: '',
            phone: '',
            applied: false,
            modalVisible: false
        };
        this.onNameChange = this.onNameChange.bind(this);
        this.onSurnameChange = this.onSurnameChange.bind(this);
        this.onEmailChange = this.onEmailChange.bind(this);
        this.onPhoneChange = this.onPhoneChange.bind(this);
        this.toggleModal = this.toggleModal.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
    }
    onNameChange(event) {
        this.setState({ name: event.target.value });
    }
    onSurnameChange(event) {
        this.setState({ surname: event.target.value });
    }
    onEmailChange(event) {
        this.setState({ email: event.target.value });
    }
    onPhoneChange(event) {
        this.setState({ phone: event.target.value });
    }
    toggleModal(event) {
        this.setState({ modalVisible: !this.state.modalVisible });
    }
    onSubmit(event) {
        event.preventDefault();
        this.setState({ applied: true, modalVisible: true });
        ApplicationService.apply(this.props.idNotice, this.state.name, this.state.surname, this.state.email, this.state.phone);
    }
    render() {
        return (
            <section className="container-fluid pb-5">
                <div className="content-form">
                    <form className="validate-form has-loader" onSubmit={this.onSubmit}>
                        <fieldset>
                            <legend className="heading-11">Candidatura</legend>
                            <div className="row row-15px-gutter">
                                <div className="col-md-6 col-15px-gutter">
                                    <div className="form-group has-feedback has-error has-danger">
                                        <input type="text" className="form-control" pattern="(.)*([a-zA-Z0-9])(.)*" value={this.state.name} onChange={this.onNameChange} />
                                        <div className="help-block with-errors" role="alert">
                                            <ul className="list-unstyled"><li>inserisci il tuo nome</li></ul>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-md-6 col-15px-gutter">
                                    <div className="form-group has-feedback has-error has-danger">
                                        <input type="text" className="form-control" pattern="(.)*([a-zA-Z0-9])(.)*" value={this.state.surname} onChange={this.onSurnameChange} />
                                        <div className="help-block with-errors" role="alert">
                                            <ul className="list-unstyled"><li>inserisci il tuo cognome</li></ul>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="row row-15px-gutter">
                                <div className="col-md-6 col-15px-gutter">
                                    <div className="form-group has-feedback">
                                        <input type="email" className="form-control disable-paste" pattern="^(.|)([a-zA-Z0-9_+-](.|))+@([a-zA-Z0-9-]+\.)+[a-zA-Z]{2,}$" value={this.state.email} onChange={this.onEmailChange} />
                                        <div className="help-block with-errors" role="alert">
                                            <ul className="list-unstyled"><li>inserisci la tua email</li></ul>
                                        </div>
                                    </div>
                                </div>
                                <div className=" col-md-6 col-15px-gutter">
                                    <div className="form-group has-feedback">
                                        <input type="text" className="form-control" pattern="^[0-9]*$" value={this.state.phone} onChange={this.onPhoneChange} />
                                        <div className="help-block with-errors" role="alert">
                                            <ul className="list-unstyled"><li>Inserisci il tuo numero di telefono</li></ul>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <button type="submit" disabled={!this.state.applied} className="btn btn-lg btn-submit-form btn-primary">Invia</button>
                        </fieldset>
                    </form>
                </div>
                <Modal isOpen={this.state.modalVisible} toggle={this.toggleModal}>
                    <ModalHeader toggle={this.state.modalVisible}>
                        <CheckmarkOutline />Candidatura ricevuta
                    </ModalHeader>
                    <ModalBody>
                        Congratulazioni! La tua candidatura e' stata ricevuta con successo.
                    </ModalBody>
                    <ModalFooter>
                        <Button color="primary" onClick={this.state.modalVisible}>Cancel</Button>
                    </ModalFooter>
                </Modal>
            </section>
        );
    }
}