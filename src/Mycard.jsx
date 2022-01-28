import React from 'react';
import {  Card,  } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
import Markit from "./Img/Markit.jpg"
const Mycard = (props) => {
    return (
        <div className=' col-md-4 col-10 mx-auto '>
        <div className=''>
            <Card >
                <Card.Img className="card-img-top" src={props.imgsrc} />
                <Card.Body>
                    <Card.Title>{props.title}</Card.Title>
                    <Card.Text>
                        Some quick example text to build on the card title and make up the bulk of
                        the card's content.
                    </Card.Text>
                    <NavLink className="btn btn-success" to="" >Go somewhere</NavLink>
                 </Card.Body>
            </Card>
            </div>
        </div>

    )
};

export default Mycard;
