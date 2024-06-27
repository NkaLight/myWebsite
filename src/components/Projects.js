import React from "react";

export default function Projects(props){
    return(
        <div className="projects-container" style={props.darkMode ? {color:"white"} : {color:"black"}}>
            <h1>My projects</h1>
            {!props.isMobile && 
            <br/> &&
            <br/> &&
            <br/>
            }
            <p>This current website is the one and only project I have managed to finish so far. I found a way to implement Three.js in React.js to finish this project.</p>
            <p>Please find the source code in github.</p>
            <div className="project-btns-container">
                <a href="https://github.com/NkaLight/myWebsite" target="_blank" rel="noreferrer"><div className={props.darkMode ? "projects-btns-darkMode" : "projects-btns-lightMode"}>Github</div></a>
                {/* <a href="https://linkedin.com/in/nkanyiso-ndlovu-46a30821b" target="_blank" rel="noreferrer"><div className={props.darkMode ? "projects-btns-darkMode" : "projects-btns-lightMode"}>LinkedIn</div></a>  */}
            </div>
        </div>
    )
}