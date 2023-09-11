import React from 'react'
import { Button } from '../resuable/button'
import { FaArrowRight } from 'react-icons/fa'

const Form2 = () => {
  return (
    <div className='contactform_wrapper'>

        <form>
        <div className='formcol1'>
        <input type="text" name="name" placeholder="Name" className='input-fields' />
        <input type="email" name="email" placeholder="Email" className='input-fields' />
        </div>
        <div className='formcol1'>
        <input type="text" name="subject" placeholder="Subject" className='input-fields' />
        <input type="phone" name="phone" placeholder="Phone" className='input-fields' />
        </div>

        <div className='formcol2'> 
        <textarea type="text" name="message" placeholder="Hello I'am Intrested in.." className='input-fields textarea'></textarea>
        </div>
        <Button
        primary={true}
        dark={false}
        smallButton={true}
        >Send Now  
        
        <FaArrowRight
        style={{
             color:'#CDA274',
             marginLeft:'10px'
            }}
        />
        
        </Button>
        </form>



    </div>
  )
}

export default Form2

