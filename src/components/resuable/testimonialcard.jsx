import React from "react";
import img from "../../assets/testimonial1.png"
function TestimonialCards(props){
    
return(
        <div className="testimonial_card">
            <div className="horizontal_wrapper">
            <div className="testimonial_pic"><img src={img} alt="" height="100%" width="100%"/></div>
            <div className="testimonial_data">
                <h5>{props.clientName}</h5>
                <span>{props.location}</span>
            </div>
            </div>
        <p>{props.description}</p>
    </div>
)};

export default TestimonialCards;
