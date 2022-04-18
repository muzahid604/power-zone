import React from 'react';
import { Button } from 'react-bootstrap';
import './About.css';
const About = () => {
    return (
        <div className='mission mt-5'>
            <img className='mission-img' src="https://i.ibb.co/KW0X05D/S5027-copy-removebg-preview-1.png" alt="" />
            <div className='m-5'>
                <h1>JUBAER AL MUZAHID</h1>
                <p className='fs-5'>I love helping people stick with something that they not only get great results from but that they enjoy too. Nowadays, people know that their physical and mental health is worth investing in, recognising the benefits of outsourcing all the management of their health and fitness to a professional.</p>
                <Button className="btn btn-outline-dark mt-1 rounded-pill fw-bold">CONTRACT ME
                </Button>
            </div>
        </div>
    );
};

export default About;