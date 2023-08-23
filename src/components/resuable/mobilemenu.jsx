import React from 'react'
import styled from "styled-components";
import {FaTimes} from 'react-icons/fa';
import {Link as LinkR} from 'react-router-dom'



export const MobileMenuContainer = styled.aside`

position: fixed;
z-index: 90;
height:100%;
width: 100%;
background: #CDA274;
display: flex;
justify-content:center;
align-item:center;
transition: 0.3s ease-in-out;
opacity: ${({ isOpen }) => (isOpen ? "100%" : "0")};
top: ${({ isOpen }) => (isOpen ? "0" : "-100%")};


`
export const CloseIcon = styled(FaTimes)`
color: #fff;

`

export const Icon = styled.div`
position:absolute;
top: 30px;
right: 40px;
background: transparent;
font-size: 2rem;
cursor: pointer;
outline: none;
`

export const MobileMenuWrappper = styled.div`
width:100%;
height:100%;
display:flex;
justify-content:center;
align-items:center;

`
export const MobileMenuMenu = styled.div`
width:100%;
height:100%;
display:flex;
flex-direction:column;
justify-content:center;
align-items:center;
font-size:26px;
font-family: 'DM Serif Display', serif;
gap:40px;
`
export const MobileMenuLink = styled(LinkR)`
text-decoration: None;
list-style: none;
transition: 0.2s ease-in-out;
text-decoration: none;
color:#fff;

&:hover{
    color:#292F36 ;
    transition: 0.2s ease-in-out;
}

&:active{
    color:#292F36 ;
    transition: 0.2s ease-in-out;
}
`




const MobileMenu = ({isOpen , toggle}) =>
{
    return (
        <MobileMenuContainer  isOpen={isOpen} onClick={toggle} >
            <Icon  onClick={toggle} >
                <CloseIcon  />
            </Icon>
            <MobileMenuWrappper>
                <MobileMenuMenu>
                <MobileMenuLink to="/Home">
                        Home
                    </MobileMenuLink>
                    <MobileMenuLink to="/Pages">
                        Pages
                    </MobileMenuLink>
                    <MobileMenuLink to="/services">
                        Services
                    </MobileMenuLink>
                    <MobileMenuLink to="/Projects">
                        Projects
                    </MobileMenuLink>
                    <MobileMenuLink to="/Contact">
                        Contact
                    </MobileMenuLink>
                </MobileMenuMenu>
                
            </MobileMenuWrappper>

        </MobileMenuContainer>
    )
}

export default MobileMenu;
