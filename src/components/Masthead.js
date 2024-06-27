import React from "react";
import Typewriter from 'typewriter-effect';
import whiteArrow from "../images/icon.png";
import blackArrow from "../images/Fill.png";
import { Link } from "react-router-dom";

export default function Masthead(props){
    const welcomeText = 
            `Hello there!<br/> my name is<strong> Nkanyiso Ndlovu</strong>,<br/> I am a software enthusiast and aspiring software engineer.
            `
    return(
        <div className="masthead-container">
            <div className="masthead-typedtext" id="typedText" style={props.darkMode ? {color: "white"} : {color: "black"}}>
            {props.typed ? <Typewriter
                onInit={(typewriter) => {
                    
                    typewriter.pauseFor(1000)
                    .changeDelay(80)
                    .typeString(welcomeText)
                    .callFunction(() => {

                    })
                    .stop()
                    .start();
                }}
            /> : <div>Hello there!<br/> my name is<strong> Nkanyiso Ndlovu</strong>,<br/> I am a software enthusiast and aspiring software engineer.</div>}
            </div>
            <div className={props.typed ? "lower-masthead-anim" : "lower-masthead"}>
                <br/>
                <div className="masthead-btn-container">
                    <Link to="/about"><div className={props.darkMode ? "masthead-btns-darkMode" : "masthead-btns-lightMode"}>More about me</div></Link>
                    <Link to="/projects"><div className={props.darkMode ? "masthead-btns-darkMode" : "masthead-btns-lightMode"}>Projects</div></Link>
                    <img src={props.darkMode ? whiteArrow : blackArrow } alt="" className="masthead-icons" style={props.darkMode ? {width: "40px ", height:"30px", marginTop:"23px"} : {width:"30px", height:"20px", marginTop:"28px"}}/>
                </div>
            </div>
        </div>
        
    )
}