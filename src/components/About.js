import React from "react";
import Typewriter from "typewriter-effect";


function About(props){

    const aboutMe = `Well I am a software enthusiast who I also love going out to themed parties. I am a huge lover of <strong>skateboarding too!</strong><br/>I initially fell in love with the
    adrenaline from skateboarding whilst I was in <strong>South Africa</strong> before I came to Otago for my Uni studies. My time here in <strong>New Zealand</strong> has been nothing but amazing. 
    `

    return(
        <div className="projects-container" style={props.darkMode ? {color:"white"} : {color:"black"}}>
            <h1>More about me!</h1>
            <br/>
            <br/>
            <br/>
            <div className="about-text">
                <Typewriter
                    onInit={(typewriter) => {
                    typewriter.pauseFor(1000)
                    .changeDelay(80)
                    .typeString(aboutMe)
                    .callFunction(() => {
                    })
                    .stop()
                    .start();
                }}/>
            </div>
        </div>
    )
}
export default About;
