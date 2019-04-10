import React from 'react';
import './Header.css';
import {Link} from "react-router-dom";
//Functional stateless react component
const Header = (props) =>{

    return (
        <nav className="navbar navbar-expand-md navbar-light navbar-laravel b-navigation-bar">
            <div className="container">
                <Link to="/" className="navbar-brand" >
                    Conference
                </Link>
                <button className="navbar-toggler" type="button" data-toggle="collapse"
                        data-target="#navbarSupportedContent"
                        aria-controls="navbarSupportedContent" aria-expanded="false"
                        aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>

                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    {/* Left Side Of Navbar */}
                    <ul className="navbar-nav ml-auto">
                        <li className="nav-item">
                            <Link to="/program" className="b-nav-link" >
                                Programa
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link to="/sponsors" className="b-nav-link" >
                                Sponsors
                            </Link>
                        </li>
                    </ul>

                </div>
            </div>
        </nav>
    );
};

export default  Header;