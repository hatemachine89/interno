import React from "react";
import { PlainButton } from "./button";
import { FaArrowRight } from "react-icons/fa"


function TransparentCards(){
    
return(
    <div className="intro_card">
        <h3>Project Plan</h3>
        <span>There are many variations of the passages of lorem Ipsum from 
        available, majority.
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
