import React from "react";
import { useParams } from "react-router-dom";
import dataArr from "../../data"

const Project = ((props)=>{
    const {name} = useParams();
    const data = dataArr.filter(d => d.name == name)[0];
    console.log(data);

    return(
        <div className={props.darkMode ? "project-container-darkMode" :"project-container"}>
            <h1>{data.name}</h1>
            <div className="project-card">

            </div>
        </div>
    )
})


export default Project