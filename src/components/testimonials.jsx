import React from "react";
import TestimonialCards from "./resuable/testimonialcard";
import {testimonials , Images} from "./data"

function Testimonials(){
    return(<div>
        <div className="testimonial_wrapper">
        <h2>What the People Think
 About Us</h2>
 <div className="testimonial_cardwrapper">
 
 {testimonials.map((item, index) => ( 
 <TestimonialCards 
  profilepic={item.img}
  clientName={item.clientName}
  location={item.location}
  description={item.review}
 />
 ))}


 </div>
        </div>
        <div className="brand_images">

            {Images.map((item) => (
                <img src={item.image} alt=""/>
            ))}
          
        </div>

        </div>
    )};

    export default Testimonials;