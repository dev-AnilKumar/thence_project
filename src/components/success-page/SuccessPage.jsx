import React, { useEffect, useState } from 'react';
import "./successpage.css"
import Logo from '../logo/Logo';
import { green_tick } from '../../assets';
import { useNavigate } from 'react-router-dom';

const SuccessPage = () => {
    const [count, setCount] = useState(5);
    const navigate = useNavigate();

    useEffect(() => {
        const timer = setTimeout(() => {
            navigate("/")
        }, 5000);
        const interval = setInterval(() => {
            setCount((count) => count - 1);
        }, 1000);

        return () => {
            clearTimeout(timer)
            clearInterval(interval)
        }
    }, [navigate]);

    return (
        <div className='successpage'>
            <Logo />
            <div className='successpage_in'>
                <div className='successpage_in_img'>
                    <img src={green_tick} alt="Success" />
                </div>
                <h4>Success Submitted</h4>
                <h3>Congratulations</h3>
                <p>Your request has been successfully submitted to us. We will validate your information and reach out to your shortly with updates</p>
            </div>
            <div className='redirect'>
                <h4>Redirecting you to Homepage in <span>{count} Seconds</span></h4>
            </div>
        </div>
    )
}

export default SuccessPage