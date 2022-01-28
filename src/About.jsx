import React from 'react';
import Common from './Common';
import Img2 from "../src/Img/img2.jpg"

const About = () => {
  return ( 
    <div>
    <Common name="Welcome to About Page" imgsrc={Img2} visit="/Contact" btnname="Contact Now"  />
    </div>)
};

export default About;
