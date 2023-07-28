import React from "react";
import { FaPhone } from "react-icons/fa"

function Cta(){
    return(
        <div className="cta_wrapper">
        <div className="data_wrapper">
            <h2>We Create The Art
                Of Stylish Living
                Stylishly</h2>
                <span>
                It is a long established fact that a reader will be distracted by the of readable content of a page 
                when lookings at its layouts the points of using 
                that it has a more-or-less normal.
                </span>
                <div className="horizontal_wrapper">
                    <div className="icon_wrapper">
                    <FaPhone
                        style={{
                            color:'#CDA274'
                        }}

                    />

                    </div>
                    <div className="vertical_wrapper_phone">
                    <h5>012345678</h5>
                    <p>Call Us Anytime</p>
                    </div>
                </div>

        </div>

        <div className="image_wrapper"></div>
        </div>
    )};

    export default Cta;