import React from "react";

export default function Contact(props){
    return(
        <div>
            <h1 style={props.darkMode ? {color:"white"} : {color:"black"}}>Contact Page</h1>
        </div>
    )
}