import React from 'react';
import { Button, Spinner } from 'react-bootstrap';
import { useSignInWithGoogle } from 'react-firebase-hooks/auth';
import { useNavigate } from 'react-router-dom';
import auth from '../../../firebase.init';


const SocialSign = () => {
    const navigate = useNavigate();
    const [signInWithGoogle, user, loading, error] = useSignInWithGoogle(auth);
    if (user) {
        navigate('/home')
    }
    if (error) {
        return (
            <div>
                <p>Error: {error.message}</p>
            </div>
        );
    }
    if (loading) {
        return <Spinner animation="grow"></Spinner>;
    }
    return (
        <div className='w-50 text-center mx-auto'>
            <Button onClick={() => signInWithGoogle()} variant="text-light px-5 btn-outline-dark fw-bold hover-color btn-light rounded-pill m-2 w-50" type="submit">
                SignIn with Google
            </Button>
            <br />
            <Button variant="text-light px-4 btn-outline-dark fw-bold hover-color btn-light rounded-pill m-2 w-50" type="submit">
                SignIn with Facebook
            </Button>
            <br />
            <Button variant="text-light px-5 btn-outline-dark fw-bold hover-color btn-light rounded-pill m-2 w-50" type="submit">
                SignIn with Github
            </Button>
        </div>);
};

export default SocialSign;