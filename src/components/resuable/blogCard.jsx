import React from "react";
import {FaArrowRight} from "react-icons/fa"
import propTypes from 'prop-types';

function Blogcard(props){


    Blogcard.propTypes = {
        image: propTypes.string,
        title: propTypes.string,
        tag: propTypes.string,
        date: propTypes.string
    }

return(
    <div className="blog_cardoutline">
        <div className="blog_container">
            <div className="blog_imagewrapper">
                <img className="blogImage" src={props.image} alt="" />
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