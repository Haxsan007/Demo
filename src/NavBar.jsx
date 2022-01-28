import React from 'react';
import { Navbar, Container, Nav, } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
import "../node_modules/bootstrap/dist/css/bootstrap.min.css"

const NavBar = () => {
    return (
        <div className='container-fluid bg-light '>

            <Navbar bg="light" expand="lg row col-10 mx-auto">
                <Container fluid>
                    <Navbar.Brand className='fs-4 text-success fw-bold' to="/">HR-TECH</Navbar.Brand>
                    <Navbar.Toggle aria-controls="navbarScroll" />
                    <Navbar.Collapse id="navbarScroll">
                        <Nav
                            className="ms-auto my-2 my-lg-0 fs-5 nav-tabs"
                            style={{ maxHeight: '100px' }}
                            navbarScroll>
                            <NavLink to="/" className="nav-link ">Home</NavLink>
                            <NavLink to="/About"className="nav-link">About</NavLink>
                            <NavLink to="/Contact" className="nav-link">Contact</NavLink>
                            <NavLink to="/Service" className="nav-link">Services</NavLink>

                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>

        </div>
        )};

export default NavBar;
