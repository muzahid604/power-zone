import { Button } from 'react-bootstrap';
import './Banner.css';
const Banner = () => {



    return (
        <div className='banner-div'>
            <img src="https://i.ibb.co/YcwPdC3/banner-4-1.jpg" alt="" />
            <div className='banner-text'>
                <h1>Take Your Fitness
                    To The Next Level</h1>
                <h4>PREMIUM ONLINE & INDIVIDUAL PERSONAL TRAINING IN FAREHAM WITH ROBERT COTTERILL</h4>
                <Button variant="outline-light fw-bold rounded-pill">Start Now</Button>
            </div>
        </div>
    );
};

export default Banner;