import React from "react";
import Logo from "../assets/Logo.svg"
import searchIcon  from "../assets/Search.png"




function Header(){
    
return(
    <div className="navbar_container">
    <div className="logo_wrapper">
    <img src={Logo} className="Logo"/>
    </div>
    <div className="navlinks_wrapper">
   
        <div>Home</div>
        <div>Pages</div>
        <div>Services</div>
        <div>Projects</div>
        <div>Blog</div>
        <div>Contact</div>
        <div><img  src={searchIcon}/></div>
   
    </div>

    </div>
)

}

export default Header;
