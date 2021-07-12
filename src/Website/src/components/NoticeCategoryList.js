import React, { Component } from 'react';

export default class NoticeCategoryList extends Component {
    constructor(props) {
        super(props)
        this.state = {
            notices: []
        }
    }
    render() {
        return (
            <div className="col-12 d-flex flex-wrap justify-content-lg-end bottoni-target">
                <div className="d-none d-lg-inline-block d-xl-inline-block pt-2">
                    <h5>Filtri attivi:</h5>
                </div>
                <button className="d-inline-block btn btn-info btn-xs btn-target btn-active btn-catbandi-filter-home" data-filter="ALL">
                    <span>Tutto</span>
                </button>
                <button className="d-inline-block btn btn-info btn-xs btn-icon btn-target btn-catbandi-filter-home" data-filter="CITTADINI">
                    {/* <svg className="icon icon-target icon-sm">
                        <use xlink:href="/procedimenti/new/static/svg/sprite.svg#it-aria-citizen"></use>
                    </svg> */}
                    <span>Cittadini</span>
                </button>
                <button className="d-inline-block btn btn-info btn-xs btn-icon btn-target btn-catbandi-filter-home" data-filter="IMPRESE">
                    {/* <svg className="icon icon-target icon-sm">
                        <use xlink:href="/procedimenti/new/static/svg/sprite.svg#it-aria-factory"></use>
                    </svg> */}
                    <span>Imprese</span>
                </button>
                <button className="d-inline-block btn btn-info btn-xs btn-icon btn-target btn-catbandi-filter-home" data-filter="ENTI_E_OPERATORI">
                    {/* <svg className="icon icon-target icon-sm">
                        <use xlink:href="/procedimenti/new/static/svg/sprite.svg#it-aria-ente"></use>
                    </svg> */}
                    <span>Enti e operatori</span>
                </button>
                <button className="d-inline-block btn btn-info btn-xs btn-icon btn-target btn-catbandi-filter-home" data-filter="CONCORSI">
                    {/* <svg className="icon icon-target icon-sm">
                        <use xlink:href="/procedimenti/new/static/svg/sprite.svg#it-file"></use>
                    </svg> */}
                    <span>Concorsi pubblici</span>
                </button>
                <button className="d-inline-block btn btn-info btn-xs btn-icon btn-target mr-0 btn-catbandi-filter-home" data-filter="IN_APERTURA">
                    {/* <svg className="icon icon-target icon-sm">
                        <use xlink:href="/procedimenti/new/static/svg/sprite.svg#it-horn"></use>
                    </svg> */}
                    <span>In apertura</span>
                </button>
            </div>
        )
    }
}