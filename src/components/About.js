import React from "react";


function About(props){
    return(
        <div>
            <h1 style={props.darkMode ? {color:"white"} : {color:"black"}}>About page</h1>
        </div>
    )
}
export default About;
