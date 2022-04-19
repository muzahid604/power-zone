import React from 'react';
import { Button } from 'react-bootstrap';
import './About.css';
const About = () => {
    return (
        <div className='mission mt-5'>
            <img className='my-img' src="https://i.ibb.co/KW0X05D/S5027-copy-removebg-preview-1.png" alt="" />
            <div className='m-5'>
                <h1>JUBAER AL MUZAHID</h1>
                <p className='fs-5'>
                    I want to do my best to be the most successful and happy person in the world. I am very ambitious when it comes to my life goals, the more challenging the obstacles in life, the more excited and persevering I become. Therefore, the few goals I want to achieve in my life are quite complex. I have three main purposes in life
                    I want to be a software engineer, which is one of my three main goals in life. To be the most successful person at work. To be successful in this world and the next.</p>
                <Button className="btn-light btn-outline-dark mt-1 rounded-pill fw-bold">CONTRACT ME
                </Button>
            </div>
        </div>
    );
};

export default About;