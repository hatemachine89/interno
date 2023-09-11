import React from 'react'
import { FaArrowRight } from "react-icons/fa"

const SinglePostCard = (props) => {
  return (
    <div className='singlepost_wrapper'>
        <div className='image-wrapper' >
            <img src={props.image} alt=""  height="100%" width="100%" />
        </div>
        <div className='data-wrapper'>
            <h4>{props.title}</h4>
            <span> {props.description}</span>

<div className="horizontal_wrapper">
                        <div className="project_datawrapper">
                        <h4>{props.date} </h4>
                        </div>
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

export default SinglePostCard
