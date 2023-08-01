import React from "react";
import {FaArrowRight} from "react-icons/fa"
import blogimage from "../../assets/blogimage.png"


function Blogcard(){

return(
    <div className="blog_cardoutline">
        <div className="blog_container">
            <div className="blog_imagewrapper">
                <img className="blogImage" src={blogimage} />
                <h4>Kitchen Design</h4>
            </div>
            <h3>Let’s Get Solution For Building Construction Work</h3>

            <div className="horizontal_wrapper">

                    <span>26, December 2023</span>

                    <div className="icon_wrapper">
                    <FaArrowRight
                        style={{
                            color:'#CDA274'
                        }}
                    />
                </div>
                </div>

        </div>
    </div>
)

}

export default Blogcard;