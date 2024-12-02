import React from "react";
import { useParams } from "react-router-dom";
import dataArr from "../../data"

const Project = ((props)=>{
    const {name} = useParams();
    const data = dataArr.filter(d => d.name == name)[0];
    console.log(data);

    return(
        <div className="main-container" style={props.darkMode ? {color:"white"} : {color:"black"}}>
            <h1>Hello World</h1>
            <p>{data.name}</p>
        </div>
    )
})


export default Project