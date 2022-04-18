import React from 'react';
import Banner from '../Banner/Banner';
import Claim from '../Claim/Claim';
import Footer from '../Footer/Footer';
import Mission from '../Mission/Mission';
import Services from '../Services/Services/Services';

const Home = () => {
    return (
        <div>

            <Banner></Banner>
            <Services></Services>
            <Claim></Claim>
            <Mission></Mission>
            <Footer></Footer>
        </div>
    );
};

export default Home;