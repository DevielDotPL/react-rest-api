import React from "react"
import { Country } from "./Country"
import { BrowserRouter, Routes, Route, Link, Outlet} from 'react-router-dom'
export const Card = (props) => {
  const [isSearch, setIsSearch] = React.useState(false)
  React.useEffect(() => {
    console.log(props.search)
    if(props.search){
      if(props.search === props.name.common || props.search === props.region) setIsSearch(true)
      else setIsSearch(false)
    }
    else setIsSearch(true)
  }, [props.search])

  return(
    isSearch && 
    <Link to={`/country/${props.name.common}`} className="country-card">
      <div className="country-flag">
        <img src={props.flags.svg} alt=""></img>
      </div>
      <div className="country-data">
        <h2>{props.name.common}</h2>
        <p><span>Population:</span> {props.population}</p>
        <p><span>Region:</span> {props.region}</p>
        <p><span>Capital:</span> {props.capital}</p>
      </div>
    </Link>
  )
}
