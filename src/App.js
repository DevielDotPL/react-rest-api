import React from "react"
import './css/style.css'
import { Home } from './Home';
import { Country } from "./Components/Country";
import { Header } from "./Components/Header";
import {
  BrowserRouter,
  Switch,
  Routes,
  Route,
} from "react-router-dom";
export const App = () => {

  const [darkMode, setDarkMode] = React.useState(false)

  const DarkMode = () => {
    setDarkMode(prevState => !prevState)
    console.log(darkMode)
  }

  return(
    <div className={darkMode ? "dark-mode" : "light-mode"}>
      <Header darkModeFn={DarkMode} darkMode={darkMode}/>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/country/:name" element={<Country/>} />
        </Routes>
      </BrowserRouter>
    </div>
  )
}


