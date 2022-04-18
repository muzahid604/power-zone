import React from 'react';
import './Mission.css';
const Mission = () => {
    return (
        <div className='d-flex mt-5'>
            <img className='mission-img' src="https://i.ibb.co/Bw4TmZx/banner-3-1.jpg" alt="" />
            <div className='m-5'>
                <h1>My Mission</h1>
                <p className='fs-5'>I love helping people stick with something that they not only get great results from but that they enjoy too. Nowadays, people know that their physical and mental health is worth investing in, recognising the benefits of outsourcing all the management of their health and fitness to a professional.</p>
                <button className="btn btn-outline-dark mt-1 rounded-pill fw-bold">CONTRACT ME
                </button>
            </div>
        </div>
    );
};

export default Mission;