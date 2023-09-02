import React from 'react'
import ColumnCard from '../../resuable/columncard';
import {aboutData} from './data'


const ColumnSection = () => {
  return (
    <div className='column-section section'>
   
   {aboutData.map((item) => (
    <ColumnCard
      title={item.title}
      description={item.description}
      buttonText={item.buttonText}
      image={item.columnPic}
      reverseColumn={item.reverseColumn}
      />
   ))}

 
     
       
    </div>
  )
}

export default ColumnSection;
