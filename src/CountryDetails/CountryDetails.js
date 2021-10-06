import React, {useEffect, useState} from 'react';
import {useParams} from "react-router-dom";
import countryFakeData from '../countryFakeData/countryFakeData.json'

const CountryDetails = () => {
    let { name } = useParams();
    const [country, setCountry] = useState({});

    useEffect(() => {
        const clickedCountry = countryFakeData.find(ctData => ctData.name === name);
        setCountry(clickedCountry);
    },[])
    return (
        <div>
            <h3>Country details</h3>
            <p>Country: {country.name}</p>
            <p>Capital: {country.capital}</p>
            <p>Dialling_code: {country.dialling_code}</p>
        </div>
    );
};

export default CountryDetails;