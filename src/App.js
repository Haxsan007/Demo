import React from 'react';
import {Navigate, Route, Routes } from 'react-router-dom';
import Contact from './Contact';
import Home from './Home';
import About from './About';
import Service from './Service';
import "../node_modules/bootstrap/dist/css/bootstrap.min.css"
import NavBar from './NavBar';
import Footer from './Footer';



const App=()=> {
  return (
    <div>
    <NavBar/>
    <Routes>
    <Route path="/" element={<Home/>}  />
    <Route path="/About" element={<About/>}  />
    <Route path="/Contact" element={<Contact/>}  />
    <Route path="/Service" element={<Service/>}  />
    <Route path= "*" element={<Navigate to = "/"/>}/>
    </Routes>
    <Footer/>
    
    </div>
  );
}

export default App;
