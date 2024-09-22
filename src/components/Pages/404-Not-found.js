import React from "react";
import { Link } from "react-router-dom";


function PageNotFound(props){

    return(
        <div className="main-container" style={props.darkMode ? {color:"white"} : {color:"black"}}>
            <h2>404 Page not found</h2>
            {!props.isMobile && 
            <br/> &&
            <br/> &&
            <br/>
            }
            <p>You may have taken a wrong turn somewhere haha.</p>
            <div className="main-rows-btns-container">
                <Link to="/home" className={props.darkMode ? "main-btns-darkmode" : "main-btns-lightMode"}>Home</Link>
            </div>

        </div>
    )
}
export default PageNotFound;
