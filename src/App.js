import "./App.css"
import { Suspense, lazy } from "react"
import React from "react"
import Nav from "./components/Nav"
import Footer from "./components/Footer"
import Animation from "./components/Three"
import Projects from "./components/Pages/Projects"

//Lazy loading all components
const About = lazy(()=> import("./components/Pages/About"))
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
    <>
        <div className="app-container" style={{
              backgroundColor: darkMode ? "black" : "white",
              transition: 'background-color 0.5s ease'
            }}
          >
            <Animation
              animationId={"orbitingSpheres"}
              darkMode={darkMode}
              size={2}
              count={50}
            />
            <Nav
            isMobile={isMobile}
            darkMode={darkMode}
            handleClick={toggleMode}
          />
            <Suspense fallback={<Animation darkMode={darkMode} animationId={"orbitingSpheres"} />}>
                <section id="home">
                  <Masthead darkMode={darkMode} typed={false} isMobile={isMobile}/>
                </section>
                <section id="about" >
                  <About darkMode={darkMode} typed={isMobile ? false : true} isMobile={isMobile}
                  />
                </section>
                <section id="projects">
                  <Projects darkMode={darkMode} isMobile={isMobile} />
                </section>
                <section id="contact">
                  <Contact  darkMode={darkMode} isMobile={isMobile} />
                </section>
            </Suspense>
          <Footer/>
        </div>
    </>
  )
}
export default App


/*<Route path='/three' element={
                <Animation
                  darkMode={darkMode}
                  animationId={"orbitingSpheres"}
                  size={2}
                  count={50}
                />
              }/>
            </Routes>*/