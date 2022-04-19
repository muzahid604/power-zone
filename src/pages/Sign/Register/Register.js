import React, { useRef } from 'react';
import { Button, Form, Spinner } from 'react-bootstrap';
import { Link, useNavigate } from 'react-router-dom';
import auth from '../../../firebase.init'
import { useCreateUserWithEmailAndPassword } from 'react-firebase-hooks/auth';
import SocialSign from '../SocialSign/SocialSign';


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
        navigate('/home')
    }
    if (loading) {
        return <div className='d-flex align-items-center justify-content-center mx-auto'><Spinner className='d-flex align-items-center justify-content-center' animation="grow" />
            <h4 className='fs-1 text-success' >Loading...</h4>
        </div>
    }
    if (error) {
        return <div className='d-flex align-items-center justify-content-center mx-auto'>
            <Spinner className='d-flex align-items-center justify-content-center' animation="grow" />
            <h4 className='fs-1 text-success' >OOPS {error.message}</h4>
        </div>
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
                <div className='w-50 text-center mx-auto'>
                    <Button variant="text-light px-5 w-100 btn-outline-dark fw-bold hover-color btn-light rounded-pill" type="submit">
                        Register
                    </Button>
                </div>
                <p className='m-2'>Already have an account? <Link to='/register' className=' text-danger' onClick={navigateRegister}>Please LogIn</Link></p>
            </Form>
            <hr className='w-50 mx-auto' />

            <SocialSign></SocialSign>
        </div>
    );
};

export default Register;