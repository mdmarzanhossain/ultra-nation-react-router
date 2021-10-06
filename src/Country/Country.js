import React, {useEffect, useState} from 'react';
import countryFakeData from '../countryFakeData/countryFakeData.json'
import CountryInfo from "../CountryInfo/CountryInfo";

const Country = () => {
    const [countries, setCountries] = useState([]);
    useEffect(()=>{
        setCountries(countryFakeData);
    },[])

    return (
        <div>
            <p>Total Country: {countries.length}</p>
            {
                countries.map(country =>
                    <CountryInfo
                        key={country.id}
                        country={country}
                    >
                    </CountryInfo>
                )
            }
        </div>
    );
};

export default Country;