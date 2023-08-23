import React from 'react'
import Logo from "../../assets/Logo.svg"
import {IoIosClose}  from "react-icons/io"
import {GiHamburgerMenu}  from "react-icons/gi"

const Sidebar = ({isOpen , toggle}) => {
    return (
        <div>
            <div className="mobile_navbar_wrapper">
            <button className="closebtn" onclick="">
            <IoIosClose 
                    style={{
                            color:'#fff', 
                            width:'40px',
                            height:'40px'
                           }}
            /></button>


<div className="navlinks_wrapper">
   
   <a href="#" >Home</a>
   <a href="#" >Pages</a>
   <a href="#" >Services</a>
   <a href="#" >Projects</a>
   <a href="#" >Blog</a>
   <a href="#" >Contact</a>

</div>
</div>


    <div className="navbar_container_mobile ">
    <div className="logo_wrapper">
    <img src={Logo} className="Logo" alt=""/>
    </div>
    <div className="menuhamburger"> 
    <GiHamburgerMenu/>
     </div>
    </div>
        </div>
    )
}

export default Sidebar;
