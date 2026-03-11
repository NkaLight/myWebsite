import React from "react";
import SwipeStack from "../SwipeStack";


function About(props){
    const data=           [
                    { src: "your-image1.jpg", caption: "Music 🎵" },
                    { src: "your-image2.jpg", caption: "Coding 💻" },
                    { src: "your-image3.jpg", caption: "Gaming 🎮" },
                    { src: "your-image4.jpg", caption: "Travel ✈️" },
                    { src: "your-image5.jpg", caption: "Photography 📷" },
                ]
    console.log("Rendering <About />");
    return(
        <div className="main-container" style={props.darkMode ? {color:"white"} : {color:"black"}}>
            <h2>More about me?</h2>
            {!props.isMobile && 
            <br/> &&
            <br/> &&
            <br/>
            }
            <div className="polaroid-scatter-container">
                <SwipeStack
                cards={data}
                renderCard={(data, isTop, i) => (
                    <div className={`polaroid polaroid-${i + 1}`} key={i}>
                        <img src={data.src} alt={data.caption} />
                        <p>{data.caption}</p>
                    </div>
                )}
            />
            </div>
        </div>
    )
}
export default About;
