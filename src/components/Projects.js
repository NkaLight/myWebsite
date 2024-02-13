import React from "react";

export default function Projects(props){
    return(
        <div className="projects-container" style={props.darkMode ? {color:"white"} : {color:"black"}}>
            <h1>Projects Page</h1>
        </div>
    )
}