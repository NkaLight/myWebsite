import "./App.css"
import React from "react"
import Nav from "./components/Nav"
import Masthead from "./components/Masthead"
import About from "./components/About"
import Projects from "./components/Projects"
import Contact from "./components/Contact"
import Footer from "./components/Footer"
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
    <BrowserRouter>
      <div className="app-container" style={{
            backgroundColor: darkMode ? "black" : "white",
            transition: 'background-color 0.5s ease',
            height: "100%"
          }}
        ><Nav
          isMobile={isMobile}
          darkMode={darkMode}
          handleClick={toggleMode}
         />
          <Routes>
            <Route path="/" element={
              <>
                <Masthead
                  darkMode={darkMode}
                  typed={isMobile? false: true}
                  isMobile={isMobile}
                />
                <Animation
                  darkMode={darkMode}
                  animationId={"orbitingSpheres"}
                  size={2}
                  count={50}
                />
              </>
              } 
            />
            <Route path="/home" element={
              <>
                <Masthead
                  darkMode={darkMode}
                  typed={false}
                  isMobile={isMobile}
                />
                <Animation
                  animationId={"orbitingSpheres"}
                  darkMode={darkMode}
                  size={2}
                  count={50}
                />
              </>
              } 
            />
            <Route path="/about" element={
              <>
                <About
                  darkMode={darkMode}
                  typed={isMobile ? false : true}
                  isMobile={isMobile}
                />
                <Animation
                  animationId={"orbitingSpheres"}
                  darkMode={darkMode}
                  count={70}
                  size={2}
                />
              </>
            }/>
            <Route path='/projects' element={
              <>
                <Projects
                  darkMode={darkMode}
                  isMobile={isMobile}
                />
                <Animation
                    animationId={"sphereZoom"}
                    darkMode={darkMode}
                    size={5}
                />
              </>
            }/>
            <Route path='/contact' element={
              <>
                <Contact
                  darkMode={darkMode}
                  isMobile={isMobile}
                />
                <Animation
                  animationId={"sphereZoom"}
                  darkMode={darkMode}
                  size={3.6}
                />
              </>
            }/>
            <Route path='/three' element={
              <Animation
                darkMode={darkMode}
                animationId={"orbitingSpheres"}
                size={2}
                count={50}
              />
            }/>
          </Routes>
          <Footer/>
      </div>
    </BrowserRouter>
  )
}
export default App