import React from 'react';
import FixImageUtils from "../../helpers/FixImageUtils";
import API from "./../../config/API";
import DateUtils from "../../helpers/DateUtils"

export default class ProgramAgenda extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
            error: null,
            isLoaded: false,
            talks:[]
        };
    }


    componentDidMount() {
        //1. Call to service via AJAX
        const url = `${API.serverURL}/api/talks/`;
        fetch(url).then(response => response.json())
            .then(result => {
                this.setState({
                   isLoaded: true,
                   talks: result,
                });
               //console.log(result);
            });
    }

    handleClick = (talk) => {
        this.props.history.push(`/program/${talk.slug}`)
    };

    render() {
        const {talks} = this.state;
        return <div>
            <section className="b-section b-section--news mt-5">
            <div className="container">
                <div className="row">
                    <div className="col-12">
                        <h2>
                            Agenda
                        </h2>

                {talks.map(talk =>
                    <article className="b-schedule-item" key={talk.id}>

                        <div className="b-schedule-item-header__date">
                            <span className="b-schedule-item-header__time">
                                {DateUtils.formatDate(talk.starts_at, "YYYY-MM-DD HH:mm:ss", "HH:mm")}
                                &nbsp;-&nbsp;
                                {DateUtils.formatDate(talk.ends_at, "YYYY-MM-DD HH:mm:ss", "HH:mm")}

                                {/*
                                <Moment format="HH:mm">
                                    {talk.starts_at}
                                </Moment>
                                &nbsp;-&nbsp;
                                <Moment format="HH:mm">
                                    {talk.ends_at}
                                </Moment>
                                */}
                            </span>
                        </div>

                        <div className="b-schedule-item-body">
                            <div className="row">
                                <div className="col-12 col-sm-7 col-md-5 col-lg-4 col-xl-4">
                                    <img src={FixImageUtils.fixImageUrl(talk.thumbnail)} alt={talk.speaker.name}
                                         className="img-fluid rounded" />
                                </div>
                                <div className="col-12 col-sm-7 col-md-7 col-lg-8 col-xl-8">
                                    <span className="b-schedule-item__place text-uppercase">{talk.room.name}</span>
                                    <a href="#" onClick={() => this.handleClick(talk)}>
                                        <h4 className="b-schedule-item__title">
                                            {talk.title}
                                        </h4>
                                    </a>

                                    <p>
                                        <strong>Conferencista: </strong>
                                        <span className="b-schedule-item__speaker">{talk.speaker.name}</span>
                                    </p>

                                    <p className="b-schedule-item__summary">
                                        {talk.summary}
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