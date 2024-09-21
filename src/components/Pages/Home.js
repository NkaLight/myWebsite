import React from "react";
import Masthead from "../Masthead";

export default function Home(props){
    <div className="main-container">
        <Masthead
            darkMode={props.darkMode}
            typed={props.isMobile? false: true}
            isMobile={props.isMobile}
        />
    </div>
}