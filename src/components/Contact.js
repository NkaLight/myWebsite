import React from "react";

export default function Contact(props){
    return(
        <div className="projects-container" style={props.darkMode ? {color:"white"} : {color:"black"}}>
            <h1>Contacts</h1>
            <br/>
            <br/>
            <br/>
            <p>You can contact me through:</p>
            <div className="project-btns-container">
                <a href="https://linkedin.com/in/nkanyiso-ndlovu-46a30821b" target="_blank" rel="noreferrer"><div className={props.darkMode ? "projects-btns-darkMode" : "projects-btns-lightMode"}>LinkedIn</div></a>
                <a href="mailto:nkanyisoowethu@gamil.com" t target="_blank" rel="noreferrer"><div className={props.darkMode ? "projects-btns-darkMode" : "projects-btns-lightMode"}>Email</div></a> 
                <a href="tel:+64223062870" t target="_blank" rel="noreferrer"><div className={props.darkMode ? "projects-btns-darkMode" : "projects-btns-lightMode"}>Call</div></a>  
            </div>
        </div>
    )
}