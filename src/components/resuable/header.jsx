import React from 'react';
import styled from 'styled-components';
import {Link as LinkR} from 'react-router-dom';
import Logo from "../../assets/Logo.svg";
import {FaSearch , FaBars}  from "react-icons/fa";
import { MenuData } from "../../data";


export const Nav = styled.nav`

height:120px;
width:100%;
`

export const NavbarContainer = styled.div`
width:100%;
max-width: 1000px;
display: flex;
flex-direction: row;
justify-content: space-between;
align-items: center;
padding: 40px 0px;
margin: auto;

@media screen and (max-width: 768px)
{
width:100%;
max-width: 320px;
}

@media screen and (min-width:768px)  and (max-width: 1024px) 
{
width:100%;
max-width: 720px;
}


`

export const NavLogo = styled(LinkR)`
width: 100%;
max-width: 160px;

@media screen and (max-width: 768px)
{
width:100%;
max-width: 160px;
}


`
export const NavMenu = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  gap: 26px;
  font-family: 'DM Serif Display', serif;
  font-size: 16px;
  font-weight: 500;
  color: #4D5053;

  @media screen and (max-width:768px){
      display:none;

  }


`
export const NavItem = styled.div`
 font-family: 'DM Serif Display', serif;
  font-size: 16px;
  font-weight: 500;
  color: #4D5053;

`
export const NavLinks = styled(LinkR)`
color: #4D5053;
font-size:18px;
`

export const MobileIcons = styled.div `
display:none;

@media screen and (max-width: 768px)
{
    display:block;
    position:relative;
    width:10%;
    top:0;
    right:0;
    transform: translate(-100, 60%);
    font-size:1.8rem;
    cursor:pointer;
    color: #fff;



}

`




const Header = ({toggle}) => {

    
return(
    <>
<Nav>
    <NavbarContainer>
        <NavLogo >
        <img src={Logo} alt="" height="100%" width="100%"/>
        </NavLogo>

        <MobileIcons onClick={toggle} >
            <FaBars 
            style={{
                    color:'#292F36'
                  }}
/>
        </MobileIcons>
        <NavMenu>
        {MenuData.map((item) => (
            <NavItem>
                <NavLinks to={item.Link}>
                {item.MenuItem}
                </NavLinks>
            </NavItem>

                    ))}
            
            
            <NavItem>
                <NavLinks>
                    <FaSearch />
                </NavLinks>
            </NavItem>
        </NavMenu>
    </NavbarContainer>


</Nav>
    
    </>
)

}

export default Header;
