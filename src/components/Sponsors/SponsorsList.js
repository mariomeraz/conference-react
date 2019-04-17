import React from 'react';
import API from '../../config/API';

export default class SponsorsList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      error: null,
      isLoaded: false,
      sponsors: [],
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

  getCustomCSSClass(index) {
    return index % 2 === 0 ? 'odd' : 'even';
  }

  render() {
    const {sponsors} = this.state;
    return <div>
      <section className="b-section b-section--sponsors mt-5">
        <div className="container">
          <div className="row">
            <div className="col-12">
              <h2>
                Sponsors
              </h2>

              {sponsors.map(sponsor =>
                  <article className="b-sponsor-item" key={sponsor.id}>

                    <div className="b-sponsor-item-header__name">
                      <span className="b-sponsor-item-header__name-label">
                        {sponsor.name}
                      </span>
                    </div>

                    <div className="b-sponsor-item-body">
                      <div className="row">
                        <div className="col-12 col-sm-7 col-md-5 col-lg-4 col-xl-4">
                          <img src={sponsor.thumbnail} alt={sponsor.name}
                               className={`img-fluid rounded b-sponsor-item__thumbnail b-sponsor-item__thumbnail--${this.getCustomCSSClass(
                                   sponsor.id)}`}/>
                        </div>
                        <div className="col-12 col-sm-7 col-md-7 col-lg-8 col-xl-8">
                          <span className="b-sponsor-item__place text-uppercase"></span>
                          <a href="#">
                            <h4 className="b-sponsor-item__type">
                              {sponsor.type}
                            </h4>
                          </a>

                          <p className="b-sponsor-item__description">
                            {sponsor.description}
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
