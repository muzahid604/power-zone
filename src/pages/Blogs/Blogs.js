import React from 'react';
import './Blogs.css';
const Blogs = () => {
    return (
        <div>
            <div className='w-50 mx-auto border p-3 mt-2'>
                <h3> Difference between authorization and authentication?</h3>
                <div>
                    <p><span className='fw-bold'>Authentication</span> is about validating your credentials like User Name/User ID and password to verify your identity.
                        The system determines whether you are what you say you are using your credentials. The system authenticates the user identity via login passwords.
                    </p>
                    <p><span className='fw-bold'>Authorization</span> Decides if you have permission to access  a resources
                        if your your identity is successfully authenticated by the system
                        which ultimately want to gives you full permission to access the resources such as information, files, databases almost anything.Once your identity is verified by the system after successful authentication, you are then authorized to access the resources of the system.
                    </p>
                </div>
            </div>
            <div className='w-50 mx-auto border p-3 mt-2'>
                <h3>Why are you using firebase? What other options do you have to implement authentication?</h3>
                <div>
                    <p>Firebase can be seen as a server-less backend for your mobile apps, web apps, etc. It is a service provided by Google. It has many features like Realtime database, Cloud functions, Analytics, hosting etc.Firebase is a full package that can help in developing your mobile or web applications faster with fewer resources and more efficiency.
                    </p>
                    <p>yes, The other options of implement authentication MONGODB, DJANGO</p>
                </div>
            </div>
            <div className='w-50 mx-auto border p-3 mt-2'>
                <h3>What other services does firebase provide other than authentication</h3>
                <div>
                    <h6>There are many services which Firebase provides, Most useful of them are:</h6>
                    <li>Cloud Firestore</li>
                    <li>Cloud Functions</li>
                    <li>Authentication</li>
                    <li>Hosting</li>
                    <li>Cloud Storage</li>
                    <li>Google Analytics</li>
                    <li>Predictions</li>
                    <li>Cloud Messaging</li>
                    <li>Dynamic Links</li>
                    <li>Remote Config</li>
                </div>
            </div>


        </div>
    );
};

export default Blogs;