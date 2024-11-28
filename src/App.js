import "./App.css"
import { Suspense, lazy } from "react"
import React from "react"
import Nav from "./components/Nav"
import Footer from "./components/Footer"
import Animation from "./components/Three"
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import PageNotFound from "./components/Pages/404-Not-found"

//Lazy loading all components
const About = lazy(()=> import("./components/Pages/About"))
const Project = lazy(()=> import("./components/Pages/Project"))
const Contact = lazy(()=> import("./components/Pages/Contact"))
const Masthead = lazy(()=> import("./components/Masthead"))


function App(){

  //determining if the user is using mobile or web
  const  [isMobile, setIsMobile] = React.useState(window.innerWidth <= 480);

  React.useEffect(() => {
  const handleResize = () => {
    setIsMobile(window.innerWidth <= 480);
  };
  window.addEventListener('resize', handleResize);
  return () => {
    window.removeEventListener('resize', handleResize);
  };
}, []);

  //State to track light and darkmode
  const [darkMode, setDarkMode] = React.useState(JSON.parse(localStorage.getItem("darkMode")) || false);
  function toggleMode(){
    setDarkMode(prevState => !prevState)
  }
  //setting html to dakrkMode
    //setting the html document backgroundColor to correspond to darkMode ?
    document.getElementsByTagName('html')[0].style.backgroundColor = darkMode ? "black" : "white";

  /*Saving theme preference to localStorage*/
  React.useEffect(() =>{
    localStorage.setItem("darkMode", JSON.stringify(darkMode))
  },[darkMode])

  /*For transitions*/
  //const location = useLocation();
  return(
    <BrowserRouter>
        <div className="app-container" style={{
              backgroundColor: darkMode ? "black" : "white",
              transition: 'background-color 0.5s ease'
            }}
          ><Nav
            isMobile={isMobile}
            darkMode={darkMode}
            handleClick={toggleMode}
          />
          <Suspense fallback={<Animation darkMode={darkMode} animationId={"orbitingSpheres"} />}>
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
                  <Project
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
              <Route path="*" element={<PageNotFound darkMode={darkMode} isMobile={isMobile}/>} /> 
            </Routes>
          </Suspense>
          <Footer/>
        </div>
    </BrowserRouter>
  )
}
export default App