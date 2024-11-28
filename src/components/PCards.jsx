import React from "react";


const PCards = (props)=>{
    console.log(props.name)
    return(
        <div className="card">
            {props.name}
        </div>
    )
}

export default PCards