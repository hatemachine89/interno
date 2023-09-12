import React from 'react'
import {FaFacebook , FaInstagram , FaLinkedin , FaTwitter} from 'react-icons/fa'
import propTypes from 'prop-types';



const SocialIcons = (props) => {

  SocialIcons.propTypes = {

    iconColor: propTypes.string,
   
      }



  return (
    <div className='socialicon_wrapper'>

    
      <FaFacebook 
      style={{
             width:'20px',
             height:'20px',
             color:props.iconColor,
             
            }} />
      <FaInstagram
      style={{
             width:'20px',
             height:'20px',
             color:props.iconColor,
             
            }} />
      <FaLinkedin
      style={{
             width:'20px',
             height:'20px',
             color:props.iconColor,
             
            }} />
      <FaTwitter
      style={{
             width:'20px',
             height:'20px',
             color:props.iconColor,
             
            }} />




    </div>
  )
}

export default SocialIcons
