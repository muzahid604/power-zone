import React from 'react';
import { Container, Form, Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './Header.css'

const Header = () => {
    return (
        <Navbar bg="dark" expand="lg">
            <Container fluid>
                <Navbar.Brand href="#"><img className='ms-4' height={50} src="https://i.ibb.co/Wt5PXfx/Pump-House-removebg-preview-removebg-preview.png" alt="" /></Navbar.Brand>
                <Navbar.Toggle aria-controls="navbarScroll" />
                <Navbar.Collapse id="navbarScroll">
                    <Nav
                        className="me-auto my-2 my-lg-0"
                        style={{ maxHeight: '100px' }}
                        navbarScroll
                    >
                        <Link to="/" className=' mx-1 hover-color text-warning fw-bold'>HOME</Link>
                        <Link to="/about" className=' mx-1 hover-color text-warning fw-bold'>ABOUT</Link>

                        <Link to="/services" className=' mx-1 hover-color text-warning fw-bold'>
                            SERVICES
                        </Link>
                        <Link to="/pricing" className='text-warning fw-bold mx-1 hover-color hover-color '>
                            PRICING
                        </Link>
                        <Link to="/blogs" className='text-warning fw-bold mx-1 hover-color '>
                            BLOGS
                        </Link>
                        <Link to="/contact" className='text-warning fw-bold mx-1 hover-color '>
                            CONTACT
                        </Link>
                        <Link to="/mission" className='text-warning fw-bold mx-1 hover-color '>
                            MISSION
                        </Link>
                    </Nav>
                    <Form className="d-flex me-4">
                        <Link to="/login" className=' m-2 text-dark p-2 btn-outline-danger fw-bold hover-color btn-warning rounded-pill'>LOGIN</Link>
                        <Link to="/register" className='m-2 text-dark p-2 fw-bold btn-outline-danger btn-warning hover-color rounded-pill'>REGISTER</Link>
                    </Form>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
};

export default Header;