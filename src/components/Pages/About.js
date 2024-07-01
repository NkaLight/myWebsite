import React from "react";
import Typewriter from "typewriter-effect";


function About(props){

    const aboutMe = `Well I am a software enthusiast who also loves going out to themed parties. I am a huge lover of <strong>skateboarding too!</strong><br/>I initially fell in love with the
    adrenaline from skateboarding whilst I was in <strong>South Africa</strong> before I came to Otago for my Uni studies. My time here in <strong>New Zealand</strong> has been nothing short of amazing.<br/>
    As I work on my degree I wish to have a more holistic understanding of programming and computing in general uitilizing and mastering many tools to solve real world problem. 
    `

    return(
        <div className="projects-container" style={props.darkMode ? {color:"white"} : {color:"black"}}>
            <h2>More about me?</h2>
            {!props.isMobile && 
            <br/> &&
            <br/> &&
            <br/>
            }
            <div className={props.darkMode ? "about-text-darkMode" : "about-text-lightMode"}>
                <div>
                    <p>Well I am a software enthusiast who also loves going out to themed parties. I am a huge lover of <strong>skateboarding too!</strong><br/>I initially fell in love with the
                        adrenaline from skateboarding whilst I was in <strong>South Africa</strong> before I came to Otago for my Uni studies. My time here in <strong>New Zealand</strong> has been nothing short of amazing.<br/>
                        As I work on my degree I wish to have a more holistic understanding of programming and computing in general uitilizing and mastering many tools to solve real world problem.
                    </p>
                </div>
            </div>
        </div>
    )
}
export default About;