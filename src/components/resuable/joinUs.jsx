import React from "react"
import { Button } from "./button";
import {FaArrowRight} from "react-icons/fa"
import propTypes from 'prop-types';





function JoinUs(props){

    JoinUs.propTypes = {
       
        title: propTypes.string,
        description: propTypes.string,
        buttonText: propTypes.string
    }


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