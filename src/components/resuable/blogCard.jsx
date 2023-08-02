import React from "react";
import {FaArrowRight} from "react-icons/fa"
import blogimage from "../../assets/blogimage.png"

function Blogcard(props){

return(
    <div className="blog_cardoutline">
        <div className="blog_container">
            <div className="blog_imagewrapper">
                <img className="blogImage" src={blogimage} />
                <h4>{props.tag}</h4>
            </div>
            <h3>{props.title}</h3>

            <div className="horizontal_wrapper">

                    <span>{props.date}</span>

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