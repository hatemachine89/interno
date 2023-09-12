import React from 'react'
import TransparentCards from '../../resuable/transparentCard';
import {servicesData} from './data'

const CardSection = () => {
  return (
    <div className='servicecard_wrapper'>
        <div className="transparent_cardwrapper">
          {servicesData.map((item) => (
            <TransparentCards
              title={item.title}
              description={item.description}

            />))}
        </div>
    </div>
  )}

export default CardSection
