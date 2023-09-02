import './App.css';
import React, { useState } from 'react'
import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './components/pages/home';
import MobileMenu from './components/resuable/mobilemenu';
import Header from './components/resuable/header';
import About from './components/pages/about';
import Services from './components/pages/services';
import Pricing from './components/pages/pricing';





function App() {


  const[isOpen,setIsOpen] = useState(false);

  const toggle = () => {
      setIsOpen(!isOpen);
  }


  return (
    <Router>
    <MobileMenu   isOpen={isOpen} toggle={toggle}/>
    <Header  toggle={toggle}/>
    <Routes>
    <Route path="/"   element={<Home />}/>
    <Route path="/about-us"   element={<About/>}/>
    <Route path="/services"   element={<Services/>}/>
    <Route path="/pricing"   element={<Pricing/>}/>


      </Routes>
    </Router>
  )
}

export default App;
