import React from "react";
import propTypes from 'prop-types';


function Counter(props){

    Counter.propTypes = {
        number: propTypes.number,
        tagline: propTypes.string,
       
    }

     
    return(
        <div className="counter">
            <h2>{props.number}</h2>
            <span>{props.tagline}</span>
        </div>
    );



}

export default  Counter;