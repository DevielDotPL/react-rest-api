import axios from "axios"
import React from "react"
import './css/style.css'
import { Card } from "./Components/Card"
export const Home = () => {
  const [data, setData] = React.useState([])
  React.useEffect(() => {
    const fetchData = () => {
      return axios.get("https://restcountries.com/v3.1/all")
      .then((response) => setData(response.data))
    }
    fetchData()
  }, [])

  const [inputValue, SetInputValue] = React.useState("")
  const [isSearching, setIsSearching] = React.useState(false)
  const Search = (e) => {
    SetInputValue(e.target.value)
    if(e.target.value) setIsSearching(true)
    else setIsSearching(false)
  }
  const Sort = (e) => {
    SetInputValue(e.target.value)
  }

  const countries = data.map(country => {
    return( 
      <Card 
          key={country.name.common}
          {...country}
          search={inputValue}
      />
    )
  })
  return(
    <>
    <div className="container">
      <div className="form">
        <input placeholder="Search for a country" onChange={Search}></input>
        <select onChange={Sort}>
          <option value="" selected={isSearching}>All</option>
          <option>Africa</option>
          <option>Americas</option>
          <option>Asia</option>
          <option>Europe</option>
          <option>Oceania</option>
        </select>
      </div>
      <div className="countries">
        {countries}
      </div>
    </div>
    </>
  )
}


