import React from "react";


function Counter(props){
     
    return(
        <div className="counter">
            <h2>{props.number}</h2>
            <span>{props.tagline}</span>
        </div>
    );



}

export default  Counter;