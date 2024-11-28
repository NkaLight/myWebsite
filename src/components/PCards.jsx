import React from "react";


const PCards = (props)=>{
    return(
        <div className="card">
            <section className="card-upper-section">
                <div className="card-title"><strong>{props.name}</strong></div>
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
                    <a className={props.darkMode ? "main-btns-darkmode" : "main-btns-lightMode"}>
                        {props.name.includes("course") ? "HackTheBox" : "GitHub" }
                    </a>
                }
            </section>
            
        </div>
    )
}

export default PCards