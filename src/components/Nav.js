import React from "react";
import Cross from "../images/Vector(1).png" 
import whiteCross from "../images/x-mark-16.png"
import HomeIcon from "../images/Saly-11.svg"
import toggleLight from "../images/SwitchLight.png"
import toggleDark from "../images/toggleDark.png"
import { Link } from "react-router-dom"

export default function Nav(props){

    const [isNavOpen, setIsNavOpen] = React.useState(false)

    function toggleNav(){
        if(props.isMobile){
            setIsNavOpen(prevState => !prevState)
        }
    }

    
    return(
        <div className="nav-container" style={isNavOpen ? {display: "flex", justifyContent:"center"} : {}}>
            {props.isMobile ?
                <Link onClick={toggleNav}><img  style={isNavOpen ? {display: "none"} : {} } alt="Navigation" src={HomeIcon} className="home-icon"/></Link>
                :
                <Link to={"/home"}><img alt="Home" src={HomeIcon} className="home-icon"/></Link> 
            }
            <ul>
                <li><Link className="nav-items" to="/projects" style={props.darkMode ? {color: "white"} : {color:"black"}}>Projects</Link></li>
                <li><Link className="nav-items" to="/about" style={props.darkMode ? {color: "white"} : {color:"black"}}>About</Link> </li>
                <li><Link className="nav-items" to="/contact" style={props.darkMode ? {color: "white"} : {color:"black"}}>Contact</Link> </li>
            </ul>
            <img onClick={props.handleClick} src={props.darkMode ? toggleLight : toggleDark} alt="" title={props.darkMode ? "light mode" : "dark mode"} className="nav-toggle-theme"/>
            {isNavOpen && 
                <div className={props.darkMode ? "nav-items-container-darkMode" : "nav-items-container-lightMode"} >
                    <img src={props.darkMode ? whiteCross :Cross} alt="" className= "nav-icon" onClick={toggleNav} />
                    <div className="nav-links-container">
                        <Link className={props.darkMode ? "nav-items-darkMode" : "nav-items-lightMode"}  to="/home" onClick={toggleNav}>Home</Link>
                        <hr/>
                        <br/>
                        <br/>
                        <br/>
                        <br/>
                        <br/>
                        <Link className={props.darkMode ? "nav-items-darkMode" : "nav-items-lightMode"}   to="/about" onClick={toggleNav}>About</Link>
                        <hr/>
                        <br/>
                        <br/>
                        <br/>
                        <br/>
                        <br/>
                        <Link className={props.darkMode ? "nav-items-darkMode" : "nav-items-lightMode"}   to="/projects" onClick={toggleNav}>Projects</Link>
                        <hr/>
                        <br/>
                        <br/>
                        <br/>
                        <br/>
                        <br/>
                        <Link className={props.darkMode ? "nav-items-darkMode" : "nav-items-lightMode"}   to="/contact" onClick={toggleNav}>Contact</Link>
                    </div>
                </div>
            }
        </div>
    )
}