import React from 'react';
import "./Loader.css";

//Functional stateless react component
const Loader = (props) =>{

    return (      <div className="app-loading">
        <div className="logo">
            Conference
        </div>
        <svg className="spinner" viewBox="25 25 50 50">
            <circle className="path" cx="50" cy="50" r="20" fill="none"
                    strokeWidth="2" strokeMiterlimit="10"/>
        </svg>
    </div>);
};

export default  Loader;