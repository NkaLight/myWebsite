import React from "react";
import Cross from "../images/Vector(1).png" 
import whiteCross from "../images/x-mark-16.png"
import HomeIcon from "../images/Saly-11.svg"
import toggleLight from "../images/SwitchLight.png"
import toggleDark from "../images/toggleDark.png"
import {ReactComponent as GithubIcon} from "../images/GitHub_Invertocat_Black_Clearspace.svg"

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
                <>
                    <a onClick={toggleNav}><img  style={isNavOpen ? {display: "none"} : {} } alt="Navigation" src={HomeIcon} className="home-icon"/></a>
                    <a href="https://github.com/NkaLight" target="_blank" rel="noreferrer" className="hover-icon">
                        <div className="github-avatar-wrapper">
                            <img src="https://github.com/NkaLight.png" alt="GitHub Profile" className="github-avatar"/>
                            <GithubIcon className="github-icon-overlay"/>
                        </div>
                    </a>
                </>
                :
                <div className="home-container-nav">
                    <div className="home-icon-wrapper">
                        <a href="#home" className="default-icon">
                            <img alt="Home" src={HomeIcon} className="home-icon"/>
                        </a>
                        <a href="https://github.com/NkaLight" target="_blank" rel="noreferrer" className="hover-icon">
                            <div className="github-avatar-wrapper">
                                <img src="https://github.com/NkaLight.png" alt="GitHub Profile" className="github-avatar"/>
                                <GithubIcon className="github-icon-overlay"/>
                            </div>
                        </a>
                    </div>
                </div>
                
            }
            <ul>
                <li><a className="nav-items" href="#projects" style={props.darkMode ? {color: "white"} : {color:"black"}}>Projects</a></li>
                <li><a className="nav-items" href="#about" style={props.darkMode ? {color: "white"} : {color:"black"}}>About</a> </li>
                <li><a className="nav-items" href="#contact" style={props.darkMode ? {color: "white"} : {color:"black"}}>Contact</a> </li>
            </ul>
            <img onClick={props.handleClick} src={props.darkMode ? toggleLight : toggleDark} alt="" title={props.darkMode ? "light mode" : "dark mode"} className="nav-toggle-theme"/>
            {isNavOpen && 
            <div className={props.darkMode ? "nav-items-container-darkMode" : "nav-items-container-lightMode"} >
                <img src={props.darkMode ? whiteCross :Cross} alt="" className= "nav-icon" onClick={toggleNav} />
                <div className="nav-links-container">
                    <a className={props.darkMode ? "nav-items-darkMode" : "nav-items-lightMode"}  href="#home" onClick={toggleNav}>Home</a>
                    <hr/>
                    <br/>
                    <br/>
                    <br/>
                    <br/>
                    <br/>
                    <a className={props.darkMode ? "nav-items-darkMode" : "nav-items-lightMode"}   href="#about" onClick={toggleNav}>About</a>
                    <hr/>
                    <br/>
                    <br/>
                    <br/>
                    <br/>
                    <br/>
                    <a className={props.darkMode ? "nav-items-darkMode" : "nav-items-lightMode"}   href="#projects" onClick={toggleNav}>Projects</a>
                    <hr/>
                    <br/>
                    <br/>
                    <br/>
                    <br/>
                    <br/>
                    <a className={props.darkMode ? "nav-items-darkMode" : "nav-items-lightMode"}   href="#contact" onClick={toggleNav}>Contact</a>
                </div>
            </div>
            }
        </div>
    )
}