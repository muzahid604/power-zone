import React, { useEffect, useState } from 'react';

import Service from '../Service/Service';
import './Services.css'
const Services = () => {
    const [services, setServices] = useState();
    useEffect(() => {
        fetch('services.json')
            .then(res => res.json())
            .then(data => setServices(data))
    }, [])

    return (

        <div>
            <div className='services-main-div'>
                <h1 className='mb-0 mt-4 text-center'>Services</h1>
                <div className='services-card'>
                    {
                        services?.map(service =>
                            <Service
                                key={service._id}
                                service={service}
                            ></Service>
                        )
                    }
                </div>
            </div>

        </div>
    );
};

export default Services;