import React from 'react'
import Logo from '../../assets/Logo.svg'
import {FaTwitter , FaInstagram , FaLinkedin , FaFacebookSquare} from 'react-icons/fa'
import styled from 'styled-components';
import {Link as LinkR} from 'react-router-dom';
import { MenuData , FooterData , ContactData } from '../../data';


const devices = {
    xs: `(min-width: ${'320px'})`,
    sm: `(min-width: ${'640px'})`,
    Msm: `(max-width: ${'640px'})`,
    md: `(min-width: ${'768px'})`,
    Mlg: `(max-width: ${'1024px'})`,
    lg: `(min-width: ${'1024px'})`,
    xl: `(min-width: ${'1280px'})`,
    
  }
  




export const FooterContainer = styled.div`

width:100%;
max-width:1000px;
margin:60px auto;
display:flex;
flex-direction:row;
justify-content:flex-start;
align-items:flex-start;


@media only screen and ${devices.md} and ${devices.Mlg} {
    
    display:flex;
flex-direction:column;
justify-content:center;
align-items:center;
    
    
  }

  @media only screen and ${devices.xs} and ${devices.Msm} {

    display:flex;
flex-direction:column;
justify-content:center;
align-items:center;
    
    }



` 
export const FooterVerticalWrapper = styled.div`

width:100%;
display:flex;
flex-direction:column;
justify-content:center;
align-items:flex-start;
padding-right:100px;

span{
    margin:20px 0px;
    width:100%;
    max-width:360px;
}

@media only screen and ${devices.md} and ${devices.Mlg} {

    display:flex;
    flex-direction:column;
    justify-content:center;
    align-items:center;
    text-align:center;
    padding-right:0px;

    span{
    font-size:22px
}
  }

  @media only screen and ${devices.xs} and ${devices.Msm} {

    display:flex;
    flex-direction:column;
    justify-content:center;
    align-items:center;
    text-align:center;
    padding-right:0px;

}



` 
export const NavLogo = styled.div`

width:100%;
max-width:100px;
` 

export const SocialIconWrapper = styled.div`
display:flex;
flex-direction:row;
justify-content:center;
align-items:center;
gap:20px;
` 
export const NavlinkWrpper = styled.div`
width:100%;
display:flex;
flex-direction:column;
justify-content:center;
align-items:start;
gap:10px;

h4{
    margin:0 0 10px 0;
    font-size:22px;
    font-weight:400;

}
@media only screen and ${devices.md} and ${devices.Mlg} {

display:flex;
flex-direction:column;
justify-content:center;
align-items:center;
text-align:center;
margin-top:40px;

h4{
    margin:0 0 10px 0;
    font-size:26px;
    font-weight:400;

}

}

@media only screen and ${devices.xs} and ${devices.Msm} {

    display:flex;
flex-direction:column;
justify-content:center;
align-items:center;
text-align:center;
margin-top:40px;
width:100%;
max-width:280px;

}



` 
export const Navlink = styled(LinkR)`
color: #4D5053;
font-size:18px;

@media only screen and ${devices.md} and ${devices.Mlg} {

    font-size:22px;

}





` 




const Footer = () => {

  return (
   <>
    <FooterContainer>
        <FooterVerticalWrapper>
        <NavLogo >
        <img src={Logo} alt="" height="100%" width="100%"/>
        </NavLogo>
        <span>It is a long established fact that a reader will be distracted lookings.</span>
        <SocialIconWrapper>

            <FaTwitter/>
            <FaInstagram/>
            <FaLinkedin/>
            <FaFacebookSquare/>

        </SocialIconWrapper>
        </FooterVerticalWrapper>

        
        <NavlinkWrpper>
            <h4>Pages</h4>
            {MenuData.map((item) =>
            (
                <Navlink to={item.Link}>{item.MenuItem}</Navlink>
            ))}
            
        </NavlinkWrpper>
       

       
        <NavlinkWrpper>
            <h4>Services</h4>
            {FooterData.map((item) =>
            (
                <Navlink >{item.MenuItem}</Navlink>
            ))}
        </NavlinkWrpper>
       

       
        <NavlinkWrpper>
            <h4>Contact</h4>
            <Navlink>{ContactData.Address}</Navlink>
            <Navlink>{ContactData.Email}</Navlink>
            <Navlink>{ContactData.Phone}</Navlink>
            
        </NavlinkWrpper>
       
        




    </FooterContainer>
   </>
  )
}

export default Footer
