import React from 'react'
import propTypes from 'prop-types';


function PageHero(props){

  PageHero.propTypes = {
    
    banner: propTypes.string,
    pageName: propTypes.string,
    pageBreadcrumb: propTypes.string
}



  return (
    <div>
      <div className='herowrapper' >
      <img src={props.banner} alt=""/> 
      <div className='pagenamewrapper'>
      <h2> {props.pageName} </h2>
      <span>{props.pageBreadcrumb}</span>
      </div>
      </div>



    </div>
  )
}

export default PageHero;
