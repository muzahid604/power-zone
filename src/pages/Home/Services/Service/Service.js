import React from 'react';
import { Button } from 'react-bootstrap';
import './service.css';
import { Link } from 'react-router-dom'

const Service = ({ service }) => {
    const { name, about, picture, prices } = service
    return (

        <div className='service-card text-center'>
            <img className='w-100' src={picture} alt="" />
            <div className='m-3'>
                <h3>{name}</h3>
                <p>{about}</p>
                <h5>{prices}</h5>
                <Link to='/pricing'>
                    <Button variant="outline-dark rounded-pill fw-bold">Start Now</Button></Link>
            </div>
        </div>
    );
};

export default Service;