import React, { useRef } from 'react';
import { Button, Form } from 'react-bootstrap';
import { Link, useNavigate } from 'react-router-dom';
import auth from '../../../firebase.init'
import { useCreateUserWithEmailAndPassword } from 'react-firebase-hooks/auth';


const Register = () => {
    const [
        createUserWithEmailAndPassword,
        user,
        loading,
        error,
    ] = useCreateUserWithEmailAndPassword(auth);
    const emailRef = useRef('');
    const passRef = useRef('');
    const navigate = useNavigate();
    if (user) {
        navigate('/')
    }

    const handleRegister = event => {
        event.preventDefault();
        const email = emailRef.current.value;

        const password = passRef.current.value;
        console.log(email, password);
        createUserWithEmailAndPassword(email, password)

    }
    const navigateRegister = event => {
        navigate('/register')
    }
    return (
        <div >
            <h1 className='text-center m-3'>Please Register</h1>
            <Form onSubmit={handleRegister} className="w-50 mx-auto">
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control ref={emailRef} required type="email" placeholder="Enter email" />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control ref={passRef} required type="password" placeholder="Password" />
                </Form.Group>
                <Button variant="text-dark px-5 btn-outline-dark fw-bold hover-color btn-light rounded-pill" type="submit">
                    Register
                </Button>
                <p className='m-2'>Already have an account? <Link to='/register' className=' text-danger' onClick={navigateRegister}>Please LogIn</Link></p>
            </Form>
            <hr className='w-50 mx-auto' />
            <div className='w-50 text-center mx-auto d-flex'>
                <Button variant="text-dark px-5 btn-outline-dark fw-bold hover-color btn-light rounded-pill" type="submit">
                    SignIn with Google
                </Button>
            </div>
        </div>
    );
};

export default Register;