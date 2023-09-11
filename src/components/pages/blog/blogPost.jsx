import React from 'react'
import { blogData } from './data'
import Blogcard from '../../resuable/blogCard'

const BlogPost = () => {
  return (
    <div className='blogpost section'>
    <h2> Articles & News</h2>
    
    <div className='article-wrapper'>
     
     {
        blogData.map((item) =>(
            <Blogcard
                image={item.blogImg}
                tag={item.tag}
                title={item.title}
                date={item.date}
            />
        ))
     }
     

    </div>


    </div>
  )
}

export default BlogPost
