import React from "react";
import Cross from "../images/Vector(1).png" 
import HomeIcon from "../images/Saly-11.svg"
import toggleLight from "../images/SwitchLight.png"
import toggleDark from "../images/toggleDark.png"


export default function Nav(props){

    const [isNavOpen, setIsNavOpen] = React.useState(false)

    function toggleNav(){
        if(props.isMobile){
            setIsNavOpen(prevState => !prevState)
        }else{
            const a = document.createElement('a')
            a.href = "/home"
            a.click()
        }
    }

    
    return(
        <div className="nav-container" style={isNavOpen ? {display: "flex", justifyContent:"center"} : {}}>
            <img onClick={toggleNav} style={isNavOpen ? {display: "none"} : {} } alt="" src={HomeIcon} className="home-icon"/>
            
            <ul>
                <li><a className="nav-items" href="/projects" style={props.darkMode ? {color: "white"} : {color:"black"}}>Projects</a></li>
                <li><a className="nav-items" href="/about" style={props.darkMode ? {color: "white"} : {color:"black"}}>About</a> </li>
                <li><a className="nav-items" href="/contact" style={props.darkMode ? {color: "white"} : {color:"black"}}>Contact</a> </li>
            </ul>
            <img onClick={props.handleClick} src={props.darkMode ? toggleLight : toggleDark} alt="" title={props.darkMode ? "light mode" : "dark mode"} className="nav-toggle-theme"/>
            {isNavOpen && 
                <div className="nav-items-container">
                    <img src={Cross} alt="" onClick={toggleNav} />
                    <ul>
                        <li><a className="nav-items" href="/about" onClick={toggleNav}>About</a> </li>
                        <hr/>
                        <li><a className="nav-items" href="/projects" onClick={toggleNav}>Projects</a> </li>
                        <hr/>
                        <li><a className="nav-items" href="/contact" onClick={toggleNav}>Contact</a> </li>
                    </ul>
                </div>
            }
        </div>
    )
}