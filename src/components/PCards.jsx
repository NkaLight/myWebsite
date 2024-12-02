import React from "react";
import { Link } from "react-router-dom";

const PCards = (props)=>{
    return(
        <Link to={`/projects/${props.name}`} className="card-link">
        <div className="card">
            <section className="card-upper-section">
                <img className={!props.darkMode ? "card-img":"card-img-darkMode"} src={require(`../images/${props.image}`)}/>
                <div className="card-title"><h4>{props.name}</h4></div>
                <div className="card-descr">{props.description}</div>
            </section>
            <section className={!props.darkMode ? "card-main-section" : "card-main-section-darkMode"}>
                <p><strong>Skills & Technologies</strong></p>
                <ul className="card-skill-list">
                    {props.technologies.map((skill) => {
                        return <li>{skill}</li>
                    })}
                </ul>

            </section>
            <section className={!props.darkMode ? "card-lower-section" : "card-lower-section-darkMode"}>
                <a 
                    onClick={(e) => e.stopPropagation()}
                    className={props.darkMode ? "main-btns-darkmode" : "main-btns-lightMode"} 
                    href={props.link} target="__blank">
                    {(props.id) == 4 ? "HackTheBox" : "GitHub" }
                </a>
            </section>
        </div>
        </Link>
    )
}

export default PCards