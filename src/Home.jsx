import React from 'react';
import { Row } from "react-bootstrap"
import { NavLink } from 'react-router-dom';
import Img1 from "../src/Img/Img1.jpg"
import Common from './Common';
import "./index.css"
const Home = () => {
  return (
    <div>
      <Common name="Grow Your Busness with" imgsrc={Img1} visit="/Service" btnname="Get Started" />
    </div>
  )
};

export default Home;
