import React from "react";
import { Button } from "./resuable/button";
import {FaArrowRight} from "react-icons/fa"



function Hero(){
    
return(
    <div className="main_hero">
        <div className="data-wrapper">
        <h2>Let Your Home Be Unique</h2>
        <span>There are many variations of the passages of lorem Ipsum from available ,
        variations of the passages.</span>
        <Button
        primary={true}
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
    </div>
)}

export default Hero;
