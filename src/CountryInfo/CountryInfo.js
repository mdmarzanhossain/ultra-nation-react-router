import React from 'react';
import './CountryInfo.css'
import {Link, useHistory} from "react-router-dom";

const CountryInfo = (props) => {
    const {name, code, capital, language, id} = props.country;
    const history = useHistory();

    const handleCountryAdd = (name) => {
        history.push(`/country/${name}`);
    }
    return (
        <div className="country-container">
            <h4>Country name is {name}</h4>
            <p>Country code is {code}</p>
            <p>{name} capital is {capital}</p>
            <p>This country language is {language.name}</p>
            <Link to={`/country/${name}`}>
                <button>Link</button>
            </Link>
            <br/>
            <br/>
            <button onClick={()=>handleCountryAdd(name)}>Click Function</button>
        </div>
    );
};

export default CountryInfo;