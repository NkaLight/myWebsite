import React from "react";
import dataArr from "../../data"

const Project = ((props)=>{
    const data = dataArr.filter(d => d.name === "")[0];
    console.log(data);
    console.log("Rendering <Project />");
    return(
        <div className={props.darkMode ? "project-container-darkMode" :"project-container"}>
            <h1>{data.name}</h1>
            <div className="project-card">

            </div>
        </div>
    )
})


export default Project