import { Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './Banner.css';
const Banner = () => {



    return (
        <div className='banner-div'>
            <img src="https://i.ibb.co/YcwPdC3/banner-4-1.jpg" alt="" />
            <div className='banner-text'>
                <h1>Take Your Fitness
                    To The Next Level</h1>
                <h4>PREMIUM ONLINE & INDIVIDUAL PERSONAL TRAINING IN FAREHAM WITH ROBERT COTTERILL</h4>
                <Link to='/pricing'> <Button variant="outline-light fw-bold rounded-pill">Start Now</Button>
                </Link>
            </div>
        </div>
    );
};

export default Banner;