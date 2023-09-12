import React from 'react'
import SocialIcons from './socialIcons'
import propTypes from 'prop-types';

const CurtainCard = (props) => {


  CurtainCard.propTypes = {
    image: propTypes.string,
    name: propTypes.string,
    field: propTypes.string,
    city: propTypes.string,
    email: propTypes.string,
    phone: propTypes.number,
}


  return (
    <div className='rotatingcard_wrapper' >
    <img src={props.image} alt="" className='rotatingcard_image' />
      <div className='rotatingcard_data'>
      <h5>{props.name} </h5>
      <h6>{props.field} , {props.city}</h6>
      <SocialIcons
        iconColor="#000"
      />
      <span>{props.phone}<br></br>
      {props.email}</span>
      
      </div>
    </div>
  )
}

export default CurtainCard
