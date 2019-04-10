import React from 'react';
import API from "../../config/API";
import FixImageUtils from "../../helpers/FixImageUtils";

export default class SponsorsRouter extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
            error: null,
            isLoaded: false,
            sponsors:[]
        };
    }

    componentDidMount() {
        //1. Call to service via AJAX
        const url = `${API.serverURL}/api/sponsors/`;
        fetch(url).then(response => response.json())
            .then(result => {
                this.setState({
                    isLoaded: true,
                    sponsors: result,
                });
                //console.log(result);
            });
    }

    render() {
        const {sponsors} = this.state;
        return <div>
            <section className="b-section b-section--news mt-5">
                <div className="container">
                    <div className="row">
                        <div className="col-12">
                            <h2>
                                Sponsors
                            </h2>

                            {sponsors.map(sponsor =>
                                    <article className="b-schedule-item" key={sponsor.id}>

                                        <div className="b-schedule-item-header__date">
                            <span className="b-schedule-item-header__time">
                                {sponsor.name}
                            </span>
                                        </div>

                                        <div className="b-schedule-item-body">
                                            <div className="row">
                                                <div className="col-12 col-sm-7 col-md-5 col-lg-4 col-xl-4">
                                                    <img src={sponsor.thumbnail} alt={sponsor.name}
                                                         className="img-fluid rounded" />
                                                </div>
                                                <div className="col-12 col-sm-7 col-md-7 col-lg-8 col-xl-8">
                                                    <span className="b-schedule-item__place text-uppercase"></span>
                                                    <a href="#">
                                                        <h4 className="b-schedule-item__title">
                                                            {sponsor.type}
                                                        </h4>
                                                    </a>

                                                    <p>
                                                        <strong></strong>
                                                        <span className="b-schedule-item__speaker">{sponsor.description}</span>
                                                    </p>

                                                    <p className="b-schedule-item__summary">

                                                    </p>
                                                </div>
                                            </div>
                                        </div>
                                    </article>,

                            )}
                        </div>
                    </div>
                </div>
            </section>
        </div>;
    }



}