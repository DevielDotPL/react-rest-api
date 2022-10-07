import React from "react"
export const Card = (props) => {
  const [isSearch, setIsSearch] = React.useState(false)
  React.useEffect(() => {
    if(props.search){
      setIsSearch(false)
      if(props.search === props.name) setIsSearch(true)
      else setIsSearch(false)
    }
    else setIsSearch(true)
  }, [props.search])
  return(
    isSearch && 
    <div className="country-card">
      <div className="country-flag">
        <img src={props.flag} alt=""></img>
      </div>
      <div className="country-data">
        <h2>{props.name}</h2>
        <p><span>Population:</span> {props.population}</p>
        <p><span>Region:</span> {props.region}</p>
        <p><span>Capital:</span> {props.capital}</p>
      </div>
    </div>
  )
}