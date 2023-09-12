import React from 'react'
import PageHero from '../../resuable/PageHero';
import  {bannerData }  from './data'
import PriceCardSection from './priceCardSection';



const Pricing = () => {
  return (
    <>
      <PageHero 
          banner={bannerData.bannerImage}
          pageName={bannerData.title}
          pageBreadcrumb={bannerData.breadcrumb}
        />
      <PriceCardSection />
    </>
  )
}

export default Pricing
