import React from 'react'
import NoticeCategoryList from './NoticeCategoryList'
import NoticeListItem from './NoticeListItem'
import NoticesService from '../services/NoticeService'

export default class NoticeList extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
             notices: []
        }
    } 
    componentDidMount(){
        NoticesService.getAllNotices().then((data) => {
            this.setState({ notices: data })
            console.log(data)
          })
          .catch(function (ex) {
              console.log('Response parsing failed. Error: ', ex);
          });
    }
    render() {
        return (
            <section className="py-4">
			<div className="container-fluid">
				<div className="row">
					<div className="col-lg-3 aria-px-sm-3">
						<h3>{this.props.title}</h3>
					</div>
					<div className="col-lg-9 pb-3">
						<NoticeCategoryList />
					</div>
				</div>
				<div className="row pt-2 pb-4 catalogo_bandi_home">		
                    {
                        this.state.notices.map((notice, index) =>
                            <div className="col-lg-4">
                                <NoticeListItem notice={notice} />
                            </div>
                        )
                    }
					<div className="col-12 mt-4">
						<div className="col-12 text-center aria-px-sm-3">
                            <button className="btn btn-info btn-vedi-tutti" type="submit" aria-label="Vedi tutti">
                                <span>Vedi tutti</span>
                            </button>
						</div>
					</div>
				</div>
			</div>
		</section>
        )
    }
}