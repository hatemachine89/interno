import React from 'react'
import Form2 from '../../resuable/Form2'
import mapimg from '../../../assets/contactmap.png'
import {FaTwitter , FaInstagram , FaLinkedin , FaFacebookSquare} from 'react-icons/fa'
import { socialData } from './data'


const ContactDetails = () => {
  return (
    <div className='contactwrapper section'>
    <h2>We love meeting new people and helping them.</h2>
    <div className='contactgrid'>
        <div className='socialwrapper '>
        {
          socialData.map((item) =>(
            <div className='horizontalwrapper'>
            <img src={item.icon} alt="" />
            <span>{item.title}</span>
          </div>
          ))
        }
         
          
          <div className='horizontalwrapper contacticons'>
            <FaTwitter/>
            <FaInstagram/>
            <FaLinkedin/>
            <FaFacebookSquare/>
          </div>
         
        </div>

        <div className='contactformwrapper'>
            <Form2/>
        </div>
    </div>

    <div className='mapcontainer'>
        <img src={mapimg} alt="" height="100%" width="100%"/>
    </div>
      
    </div>
  )
}

export default ContactDetails
