import React from 'react'
import SinglePostCard from '../../resuable/singlePostCard'
import { blogData } from './data'


const Latest = () => {
  return (
    <div className='latestpost section'>
        <h2>Latest Post</h2>
        <SinglePostCard 
                title={blogData[0].title}
                description={blogData[0].description}
                image={blogData[0].blogImg}
                date={blogData[0].date}
         />     
    </div>
  )}

export default Latest
