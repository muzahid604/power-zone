import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
    return (
        <div className='mt-5 bg-dark p-2'>
            <div className='d-flex  justify-content-around p-5'>
                <div className='d-flex flex-column'>
                    <Link to="/" className=' mx-1 hover-color text-light fw-bold'>HOME</Link>
                    <Link to="/about" className=' mx-1 hover-color text-light fw-bold'>ABOUT</Link>

                    <Link to="/services" className=' mx-1 hover-color text-light fw-bold'>
                        SERVICES
                    </Link>

                </div>
                <div className='d-flex flex-column'>

                    <Link to="/blogs" className='text-light fw-bold mx-1 hover-color '>
                        BLOGS
                    </Link>
                    <Link to="/pricing" className='text-light fw-bold mx-1 hover-color hover-color '>
                        PRICING
                    </Link>
                    <Link to="/mission" className='text-light fw-bold mx-1 hover-color '>
                        MISSION
                    </Link>
                </div>
                <Link to="/contact" className='text-light fw-bold mx-1 hover-color '>
                    CONTACT
                </Link>
            </div>
            <p className='text-light text-center fs-5'>Web design by J A Muzahid</p>
        </div>
    );
};

export default Footer; 