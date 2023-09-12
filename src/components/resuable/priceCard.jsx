import React from 'react'
import {styled} from 'styled-components'
import {Button} from './button'
import {FaArrowRight} from 'react-icons/fa'
import propTypes from 'prop-types';



const devices = {
    xs: `(min-width: ${'320px'})`,
    sm: `(min-width: ${'640px'})`,
    Msm: `(max-width: ${'640px'})`,
    md: `(min-width: ${'768px'})`,
    Mlg: `(max-width: ${'1024px'})`,
    lg: `(min-width: ${'1024px'})`,
    xl: `(min-width: ${'1280px'})`,
    
  }
  


export const  PricingCardWrapper = styled.div `

width:100%;
max-width:300px;
display:flex;
flex-direction:column;
justify-direction:center;
align-items:center;
background-color:#F4F0EC;
padding:40px 20px;
border-radius:30px;

h4{
    font-size:20px;
    font-weight:400;
    color:#292F36;
}


@media only screen and ${devices.md} and ${devices.Mlg} {
    
    width:100%;
    max-width:200px !important;
    
  }

  @media only screen and ${devices.xs} and ${devices.Msm} {

    width:100%;
    display:flex;
    justify-content:space-between;
    align-items: center;
    
    h4{
    font-size:24px;
    font-weight:400;
    color:#292F36;
}


    }





`
export const  PriceContainer = styled.div `
margin-top:-20px;

h2{
    font-weight:400;
    font-size:60px;
    margin:0;
    color:${({isPopular}) => (isPopular ? '#CDA274' : '#292F36')};
}

h2:first-letter{
    font-weight:400;
    font-size:26px;
    margin:0;
    color:#292F36;
}

h5{
    font-weight:400;
    font-size:20px;
    margin:0px;
}


`
export const  Divider = styled.div `
width:100%;
height:2px;
background-color:${({isPopular}) => (isPopular ? '#292F36' : '#CDA274')};
position:relative;
display:flex;
justify-content:center;
align-content:center;
margin:40px 0px;



h6{
    
    display:${({isPopular}) => (isPopular ? 'block' : 'none')};
    background-color:#292F36;
    position:absolute;
    top:-16px;
    color:#fff;
    font-size:14px;
    border-radius:12px;
    padding:10px 40px;
    margin:0;
}

`
export const  FeatureCard = styled.div `

display:flex;
flex-direction:column;
justify-content:center;
align-content:center;
gap:10px;
text-align:center;
margin:20px 0px; 
font-size:18px;
font-weight:500;




`
export const  Feature = styled.div `
`





const PriceCard = (props) => {

    PriceCard.propTypes = {
        title: propTypes.string,
        isPopular: propTypes.bool,
        price: propTypes.string,
        per: propTypes.string,
        buttonText: propTypes.string,
        
    }



  return (
    <PricingCardWrapper>
        <h4>{props.title}</h4>

        <PriceContainer
        isPopular={props.isPopular}
        >
            <h2>{props.price}</h2>
            <h5>{props.per}</h5>
        </PriceContainer>

        <Divider
        isPopular={props.isPopular}
        >
            <h6>Most Polpular Plans</h6>
        </Divider>

        <FeatureCard>
        {
            props.features.map((item) => (
                <Feature>{item.feature}</Feature>

            ))
        }
        

        </FeatureCard>

        
        <Button
                  primary={props.isPopular}
                  big={true}
                  dark={false}
                  smallButton={true}
                  >{props.buttonText}

                    <FaArrowRight />


                  </Button>

    </PricingCardWrapper>
  )
}

export default PriceCard
