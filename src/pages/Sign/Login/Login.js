import React, { useRef } from 'react';
import { Button, Form, Spinner } from 'react-bootstrap';
import { useSignInWithEmailAndPassword } from 'react-firebase-hooks/auth';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import auth from '../../../firebase.init';
import SocialSign from '../SocialSign/SocialSign';
import './Login.css';
const Login = () => {

    const [
        signInWithEmailAndPassword,
        user,
        loading,
        error,
    ] = useSignInWithEmailAndPassword(auth);
    const emailRef = useRef('');
    const passRef = useRef('');
    const navigate = useNavigate();
    const location = useLocation();
    const handleSubmit = event => {
        event.preventDefault();
        const email = emailRef.current.value;
        const password = passRef.current.value;
        signInWithEmailAndPassword(email, password)

    }
    if (loading) {
        return <div className='d-flex align-items-center justify-content-center mx-auto'>
            <Spinner className='d-flex align-items-center justify-content-center' animation="grow" />
            <h4 className='fs-1 text-success' >Loading...</h4>
        </div>
    }
    if (error) {
        return <div className='d-flex align-items-center justify-content-center mx-auto'>
            <Spinner className='d-flex align-items-center justify-content-center' animation="grow" />
            <h4 className='fs-1 text-success' >OOPS {error.message}</h4>
        </div>
    }
    let from = location.state?.from?.pathname || "/";
    if (user) {
        navigate(from, { replace: true });
    }


    const navigateRegister = event => {
        navigate('/register')
    }
    return (
        <div >

            <h1 className='text-center m-3'>Log In</h1>
            <Form onSubmit={handleSubmit} className="w-50 mx-auto">
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
                        Log in
                    </Button>
                </div>
                <p className='p-2'>New to Power Zone? <Link to='/register' className=' text-danger' onClick={navigateRegister}>Please Register</Link></p>
            </Form>
            <hr className='w-50 mx-auto' />
            <SocialSign></SocialSign>
        </div>
    );
};

export default Login;
