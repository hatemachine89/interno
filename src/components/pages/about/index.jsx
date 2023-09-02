import React from 'react';
import PageHero from '../../resuable/PageHero';
import Testimonial from './Testimonial';
import ColumnSection from './columnsection'
import TeamCard from './teamCard';
import ContactForm from './contactForm';
import  {bannerData}  from './data'


const About = () => {
  return (
    <div  >
      <PageHero 
        banner={bannerData.bannerImage}
        pageName={bannerData.title}
        pageBreadcrumb={bannerData.breadcrumb}
      />
      <Testimonial/>
      <ColumnSection/>
      <TeamCard/>
      <ContactForm/>
    </div>
  )
}

export default About;


