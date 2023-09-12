import React from 'react';
import PageHero from '../../resuable/PageHero';
import  {bannerData}  from './data'
import ContactDetails from './contactdetails';


const Contact = () => {
  return (
    <div>
        <PageHero 
          banner={bannerData.bannerImage}
          pageName={bannerData.title}
          pageBreadcrumb={bannerData.breadcrumb}
        />
        <ContactDetails />
    </div>
  )}

export default Contact;


