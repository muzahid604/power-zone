import React from 'react';
import { Button, Container, Form, Nav, Navbar } from 'react-bootstrap';

const Header = () => {
    return (
        <Navbar bg="dark" expand="lg">
            <Container fluid>
                <Navbar.Brand href="#">Navbar scroll</Navbar.Brand>
                <Navbar.Toggle aria-controls="navbarScroll" />
                <Navbar.Collapse id="navbarScroll">
                    <Nav
                        className="me-auto my-2 my-lg-0"
                        style={{ maxHeight: '100px' }}
                        navbarScroll
                    >
                        <Nav.Link href="#action1" className='text-info fw-bold'>Home</Nav.Link>
                        <Nav.Link href="#action2" className='text-info fw-bold'>Link</Nav.Link>

                        <Nav.Link href="#" disabled className='text-info fw-bold'>
                            Link
                        </Nav.Link>
                    </Nav>
                    <Form className="d-flex ">
                        <Button variant="outline-light mx-2 text-info fw-bold">LogIn</Button>
                        <Button variant="outline-light text-info fw-bold">SignUp</Button>
                    </Form>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
};

export default Header; <h1>hello i am from header</h1>