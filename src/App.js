import './App.css';
import React, { useState } from 'react'
import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './components/pages/home';
import MobileMenu from './components/resuable/mobilemenu';
import Header from './components/resuable/header';
import About from './components/pages/about';





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

      </Routes>
    </Router>
  )
}

export default App;
