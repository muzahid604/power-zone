import React from 'react';
import { Button } from 'react-bootstrap';
import './service.css';


const Service = ({ service }) => {
    const { name, about, picture } = service
    return (

        <div className='service-card'>
            <img className='w-100' src={picture} alt="" />
            <div className='m-3'>
                <h3>{name}</h3>
                <p>{about}</p>
                <Button variant="outline-dark fw-bold">Start Now</Button>
            </div>
        </div>
    );
};

export default Service;