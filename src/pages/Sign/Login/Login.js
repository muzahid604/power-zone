import React, { useRef } from 'react';
import './Login.css'
import { Button, Form, Spinner } from 'react-bootstrap';
import { useSendPasswordResetEmail, useSignInWithEmailAndPassword } from 'react-firebase-hooks/auth';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import auth from '../../../firebase.init';
import SocialSign from '../SocialSign/SocialSign';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import './Login.css';
const Login = () => {

    const [
        signInWithEmailAndPassword,
        user,
        loading,
        error,
    ] = useSignInWithEmailAndPassword(auth);
    const [sendPasswordResetEmail, sending] = useSendPasswordResetEmail(
        auth
    );
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
    if (loading || sending) {
        return <div className='d-flex m-5 align-items-center justify-content-center mx-auto'>
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
    const resetPassword = async () => {
        const email = emailRef.current.value;
        await sendPasswordResetEmail(email);
        toast('email send for reset');
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
                <div className='w-50 w-sm-100 text-center mx-auto'>
                    <Button variant="text-light px-4 btn-outline-dark fw-bold hover-color btn-light rounded-pill m-2 w-50" type="submit">
                        Log in
                    </Button>
                </div>
                <p className='p-2'>New to Power Zone? <Link to='/register' className='text-danger' onClick={navigateRegister}>Please Register</Link></p>
                <p className=''><Button className='px-0 btn-md-size w-25 w  btn-danger' onClick={resetPassword}>Reset Password </Button></p>
            </Form>

            <hr className='w-50 mx-auto' />
            <SocialSign></SocialSign>
            <ToastContainer />
        </div>
    );
};

export default Login;
