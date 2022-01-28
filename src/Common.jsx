import React from 'react';
import { Row } from "react-bootstrap"
import { NavLink } from 'react-router-dom';
import Img1 from "../src/Img/Img1.jpg"
import "./index.css"
const Common = (props) => {
  return (
    <div>
      <section id="header" className='d-flex my-3 '>
        <div className='container-fluid '>
          <Row>
            <div className='col-10 mx-auto '>
              <Row className='d-flex align-items-center'>
                <div className='col-md-6 pt-5 pt-lg-0 order-2 order-lg-1'>
                  <h1> {props.name} <br /><strong className='text-success'>HR-TECH</strong></h1>
                  <h2 className='my-3'>We are the team of talented Developers making Websites</h2>
                  <div className='mt-3'>
                    <NavLink to={props.visit} className='btn btn-success tran'> {props.btnname} </NavLink>
                  </div>
                </div>
                <div className='col-lg-6 order-1 order-lg-2'>
                  <img src={props.imgsrc} className='img-fluid pic' alt='Common Img' />
                </div>
              </Row>
            </div>

          </Row>
        </div>
      </section>
    </div>
  )
};

export default Common;
