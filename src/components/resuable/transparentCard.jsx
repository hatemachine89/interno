import React from "react";
import { PlainButton } from "./button";
import { FaArrowRight } from "react-icons/fa"


function TransparentCards(props){
    
return(
    <div className="intro_card">
        <h3>{props.title}</h3>
        <span>{props.description}
        </span>
        <PlainButton
        transparent={true}
        dark={true}
        big={false}

        
        > Get Started 
        <FaArrowRight
        style={{
            color:'#CDA274',
            marginLeft: '20px',
        }}


        />
        </PlainButton>

    </div>
)};




export default TransparentCards;
