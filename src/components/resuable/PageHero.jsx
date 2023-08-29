import React from 'react'

function PageHero(props){
  return (
    <div>
      <div className='herowrapper'> 
      <div className='pagenamewrapper'>
      <h2> {props.pageName} </h2>
      <span>{props.pageBreadcrumb}</span>
      </div>
      </div>



    </div>
  )
}

export default PageHero;
