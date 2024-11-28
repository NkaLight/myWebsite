import React from "react";
import Three from "./Three";

const PCards = (props)=>{
    return(//C:\Users\Nka\Documents\Projects\personal-website\myWebsite\src\images\magicpattern-KfFmwa7m5VQ-unsplash.jpg
        <div className="card">
            <section className="card-upper-section">
                <img className="card-img" src={require('../images/magicpattern-KfFmwa7m5VQ-unsplash.jpg')}/>
                <div className="card-title"><h4>{props.name}</h4></div>
                <div className="card-descr">{props.description}</div>
            </section>
            <section className="card-main-section">
                <p><strong>Skills & Technologies</strong></p>
                <ul className="card-skill-list">
                    {props.technologies.map((skill) => {
                        return <li>{skill}</li>
                    })}
                </ul>

            </section>
            <section className="card-lower-section">
                {
                    <a className={props.darkMode ? "main-btns-darkmode" : "main-btns-lightMode"} href={props.link} target="__blank">
                        {props.name.includes("course") ? "HackTheBox" : "GitHub" }
                    </a>
                }
            </section>
            
        </div>
    )
}

export default PCards