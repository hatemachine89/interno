import React from 'react'
import PageHero from '../../resuable/PageHero';
import  {bannerData}  from './data'
import CardSection from './cardsection';
import WorkProcess from './workProcess';


const Services = () => {
  return (
    <>
    <PageHero 
        banner={bannerData.bannerImage}
        pageName={bannerData.title}
        pageBreadcrumb={bannerData.breadcrumb}
      />
    <CardSection/>
<WorkProcess/>


      </>
  )
}

export default Services
