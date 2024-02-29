import "./App.css"
import React from "react"
import Nav from "./components/Nav"
import Masthead from "./components/Masthead"
import About from "./components/About"
import Projects from "./components/Projects"
import Contact from "./components/Contact"
import Animation from "./components/Three"
import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";


function App(){

  //determining if the user is using mobile or web
  const  [isMobile, setIsMobile] = React.useState(/Mobi|Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent))
  React.useEffect(()=>
    ()=> setIsMobile(/Mobi|Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent))
  , [])

  //State to track light and darkmode
  const [darkMode, setDarkMode] = React.useState(JSON.parse(localStorage.getItem("darkMode")) || false);
  function toggleMode(){
    setDarkMode(prevState => !prevState)
  }
  /*Saving theme preference to localStorage*/
  React.useEffect(() =>{
    localStorage.setItem("darkMode", JSON.stringify(darkMode))
  },[darkMode])



  return(
    <BrowserRouter basename={process.env.PUBLIC_URL}>
      <div className="app-container" style={{
          backgroundColor: darkMode ? "black" : "white",
          transition: 'background-color 0.5s ease'

         }}
        ><Nav
          isMobile={isMobile}
          darkMode={darkMode}
          handleClick={toggleMode}
         />
          <Routes>
            <Route path="/" element={
              <Masthead
                darkMode={darkMode}
                typed={true}
              />
              } 
            />
            <Route path="/home" element={
              <div>
                <Masthead
                  darkMode={darkMode}
                  typed={false}
                />
                <Animation/>
              </div>
              
              } 
            />
            <Route path="/about" element={
              <About
                darkMode={darkMode}
              />
            }/>
            <Route path="/projects" element={
              <Projects
                darkMode={darkMode}
              />
            }/>
            <Route path="/contact" element={
              <Contact
                darkMode={darkMode}
              />
            }/>
            <Route path="/three" element={
              <Animation
                darkMode={darkMode}
                animationId={"example"}
              />
            }/>
          </Routes>
      </div>
    </BrowserRouter>
  )
}
export default App