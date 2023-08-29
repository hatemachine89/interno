import React from "react"
import { Button } from "./button";
import {FaArrowRight} from "react-icons/fa"

function JoinUs(props){

    return(
    <div className="JoinUs"> 
        <h2>{props.title}</h2>
        <span>{props.description}</span>
        <Button
        primary={false}
        big={false}
        smallButton={true}
        >{props.buttonText} 
        <FaArrowRight
        style={{
             color:'#fff',
             marginLeft:'20px'
            }}
        />
        </Button>
    </div>
    );


}

export default JoinUs;