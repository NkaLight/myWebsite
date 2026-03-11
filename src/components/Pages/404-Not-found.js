import React from "react";


function PageNotFound(props){

    return(
        <div className="main-container" style={props.darkMode ? {color:"white"} : {color:"black"}}>
            <h2>404 Page not found</h2>
            {!props.isMobile && 
            <br/> &&
            <br/> &&
            <br/>
            }
            <p>You must be lost you go back to the previous page or go to the home page.</p>
            <div className="main-rows-btns-container">
                <a href="#home" className={props.darkMode ? "main-btns-darkmode" : "main-btns-lightMode"}>Home</a>
                <a href={-1} className={props.darkMode ? "main-btns-darkmode" : "main-btns-lightMode"}>Go Back</a>
            </div>

        </div>
    )
}
export default PageNotFound;
