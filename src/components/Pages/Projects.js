import React from "react";
import PCards from "../PCards.jsx";
import projectList from "../../data.js"

function Projects(props){
    return(
        <div className="main-container" style={props.darkMode ? {color:"white"} : {color:"black"}}>
            <h1>My projects and interests</h1>
            <div className="project-list-container">
                {projectList.map((p) => {
                    return <PCards key={p.id} {...props} {...p}/>
                })}
            </div>
        </div>
    )
}

export default Projects;