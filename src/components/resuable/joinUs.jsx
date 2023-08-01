import React from "react"
import { Button } from "./button";
import {FaArrowRight} from "react-icons/fa"

function JoinUs(){

    return(
    <div className="JoinUs"> 
        <h2>Wanna Join The Interno ?</h2>
        <span>It is a long established fact  will be distracted.</span>
        <Button
        primary={false}
        big={false}
        >Get Started 
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