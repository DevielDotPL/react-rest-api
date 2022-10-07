import axios from "axios"
import React from "react"
import style from './css/style.css'
import { Card } from "./Components/Card"
export const App = () => {
  const [data, setData] = React.useState([])
  React.useEffect(() => {
    const fetchData = () => {
      return axios.get("https://restcountries.com/v3.1/all")
      .then((response) => setData(response.data))
    }
    fetchData()
  }, [])

  const [inputValue, SetInputValue] = React.useState("")
  const Search = (e) => {
    SetInputValue(e.target.value)
    // console.log(inputValue)
  }
  React.useEffect(() => {
    SetInputValue(inputValue)
    console.log(inputValue)
  },[inputValue])


  const countries = data.map(country => {
    // console.log(country.flags.png)
    return(
      <Card 
          key={country.name.common}
          flag={country.flags.svg} 
          name={country.name.common} 
          population={country.population} 
          region={country.region} 
          capital={country.capital}
          search={inputValue}
      />
    )
  })
  return(
    <div className="container">
      <div>
        <input placeholder="Search for a country" onChange={Search}></input>
        <select>
          <option value="Africa">Africa</option>
          <option value="America">America</option>
          <option value="Asia">Asia</option>
          <option value="Europe">Europe</option>
          <option value="Oceania">Oceania</option>
        </select>
      </div>
      <div className="countries">
        {countries}
      </div>
    </div>
  )
}


