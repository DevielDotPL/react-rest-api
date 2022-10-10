import React from "react"
import axios from 'axios'
import { useParams } from "react-router-dom"
import { useNavigate } from 'react-router-dom'
export const Country = () => {
  const navigate = useNavigate();
  let { name } = useParams()
  const [country, setCountry] = React.useState()
  React.useEffect(() => {
      axios.get(`https://restcountries.com/v3.1/name/${name}`)
      .then((response) => setCountry(response.data[0]))
  },[name])
  if(!country) return <div className="loading"><p>Loading...</p></div>
  const langs = Object.keys(country.languages).map(lang => {
    return(
      <>
        {`${country.languages[lang]} `}
      </>
    )
  });
  const borderCountries = country.borders ? country.borders.map((border, index) => {
    return(
      <div class="b-country">
        {`${country.borders[index]} `}
      </div>
    )
  }) : <div class="b-country">
         There is No borders
       </div>;

  return(
    <div className="countries-detail">
      <div className="back">
        <button onClick={() => navigate(-1)}>Back</button>
      </div>
      <div className="country">
        <div className="country-flag">
          <img src={country.flags.svg} alt=""></img>
        </div>
        <div className="country-data">
          <h2>{country.name.common}</h2>
          <p><span>Native Name:</span> {Object.values(country.name.nativeName)[0].official}</p>
          <p><span>Population:</span> {country.population}</p>
          <p><span>Region:</span> {country.region}</p>
          <p><span>Sub Region:</span> {country.subregion}</p>
          <p><span>Capital:</span> {country.capital}</p>
        </div>
        <div className="country-data">
          <p><span>Top Level Domain:</span> {country.tld[0]}</p>
          <p><span>Currencies:</span> {Object.values(country.currencies)[0].name}</p>
          <p><span>Languages:</span> {langs}</p>
        </div>
        <div className="country-data">
          <h2>Border Countries</h2>
          <div className="border-countries">
            {borderCountries}
          </div>
        </div>
  
      </div>
    </div>
  )
}

// , population, region, subRegion, capital, domain, currencies, lang