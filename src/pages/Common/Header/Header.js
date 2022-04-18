import React from 'react';
import { Button, Container, Form, Nav, Navbar } from 'react-bootstrap';
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
                        <Nav.Link href="#action1" className=' mx-1 hover-color text-light fw-bold'>Home</Nav.Link>
                        <Nav.Link href="#action2" className=' mx-1 hover-color text-light fw-bold'>ABOUT ME</Nav.Link>

                        <Nav.Link href="#" className=' mx-1 hover-color text-light fw-bold'>
                            SERVICES
                        </Nav.Link>
                        <Nav.Link href="#" className='text-light fw-bold mx-1 hover-color hover-color '>
                            REVIEWS
                        </Nav.Link>
                        <Nav.Link href="#" className='text-light fw-bold mx-1 hover-color '>
                            BLOG
                        </Nav.Link>
                        <Nav.Link href="#" className='text-light fw-bold mx-1 hover-color '>
                            CONTACT ME
                        </Nav.Link>
                    </Nav>
                    <Form className="d-flex me-4">
                        <Button variant="outline-light mx-4 fw-bold">LOGIN</Button>
                        <Button variant="outline-light  fw-bold">REGISTER</Button>
                    </Form>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
};

export default Header;