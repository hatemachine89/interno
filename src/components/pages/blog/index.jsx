import React from 'react';
import PageHero from '../../resuable/PageHero';
import  {bannerData}  from './data'
import Latest from './latest';
import BlogPost from './blogPost';


const Articles = () => {
  return (
    <div  >
      <PageHero 
        banner={bannerData.bannerImage}
        pageName={bannerData.title}
        pageBreadcrumb={bannerData.breadcrumb}
      />
      <Latest/>
      <BlogPost/>
      
    </div>
  )
}

export default Articles;


