import React from 'react';
import PageHero from '../../resuable/PageHero';
import Testimonial from './Testimonial';
import ColumnSection from './columnsection'

const About = () => {
  return (
    <div className="App" >
      <PageHero 
        pageName="About Us"
        pageBreadcrumb="Home / About Us"
      />
      <Testimonial/>
<ColumnSection/>
    </div>
  )
}

export default About;


