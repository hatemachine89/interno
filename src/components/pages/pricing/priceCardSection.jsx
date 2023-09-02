import React from 'react'
import PriceCard from '../../resuable/priceCard';
import  {priceListData }  from './data'



const PriceCardSection = () => {
  return (
    <div className='price_card section'>
    {priceListData.map((item) => (
      <PriceCard
        title={item.title}
        price={item.price}
        per={item.per}
        features={item.features}
        buttonText={item.buttonText}  
        isPopular={item.popular}

      />

    ))}
    </div>
  )
}

export default PriceCardSection
