import React from "react";

export default function Project(props){
    return(
        <div className="main-container" style={props.darkMode ? {color:"white"} : {color:"black"}}>
            <h1>My projects</h1>
            {!props.isMobile && 
            <br/> &&
            <br/> &&
            <br/>
            }
            <p>This current website is the one and only project I have managed to finish so far. I found a way to implement Three.js in React.js to finish this project.</p>
            <p>Please find the source code in github.</p>
            <div className="main-rows-btns-container">
                <a href="https://github.com/NkaLight/myWebsite" target="_blank" rel="noreferrer" className={props.darkMode ? "projects-btns-darkMode" : "projects-btns-lightMode"}>Github</a>
                
                <a href="https://github.com/NkaLight/myWebsite/blob/main/README.md" target="_blank" rel="noreferrer" className={props.darkMode ? "projects-btns-darkMode" : "projects-btns-lightMode"}>Documentation</a>
            </div>
        </div>
    )
}