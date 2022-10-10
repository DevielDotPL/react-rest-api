import moon from '../img/moon-regular.svg'
import sun from '../img/sun-regular.svg'
export const Header = (props) => {
  return(
    <header>
      <h1>React Rest Api</h1>
      <button onClick={props.darkModeFn}>{props.darkMode ? <><img src={sun}></img>Light Mode</> : <><img src={moon}></img>Dark Mode</>}</button>
    </header>
  )
}