import React from "react";

export default function Contact(props){
    return(
        <div className="main-container" style={props.darkMode ? {color:"white"} : {color:"black"}}>
            <h1>Contacts</h1>
            {!props.isMobile && 
            <br/> &&
            <br/> &&
            <br/>
            }
            <p>You can contact me through:</p>
            <div className="main-btns-container">
                <a href="tel:+64223062870" t target="_blank" rel="noreferrer" className={props.darkMode ? "main-btns-darkmode" : "main-btns-lightMode"}>Phone call</a><br/><br/><br/>
                <a href="mailto:nkanyisoowethu@gamil.com" t target="_blank" rel="noreferrer" className={props.darkMode ? "main-btns-darkmode" : "main-btns-lightMode"}>Email</a><br/><br/><br/>
                <a href="https://linkedin.com/in/nkanyiso-ndlovu-46a30821b" target="_blank" rel="noreferrer" className={props.darkMode ? "main-btns-darkmode" : "main-btns-lightMode"}>LinkedIn</a><br/><br/>
            </div>
        </div>
    )
}