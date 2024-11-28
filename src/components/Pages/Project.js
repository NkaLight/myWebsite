import React from "react";
import PCards from "../PCards";

function Project(props){
    let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9]
    return(
        <div className="main-container" style={props.darkMode ? {color:"white"} : {color:"black"}}>
            <h1>My projects</h1>
            <div className="project-list-container">
                {arr.map((i) => {
                    return <PCards id={i}/>
                })}
            </div>
        </div>
    )
}

export default Project;