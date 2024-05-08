import React from 'react';
import "./logo.css"
import { Link } from 'react-router-dom';
import { company_logo } from '../../assets';

const Logo = () => {
    return (
        <div className='company_logo'>
            <Link to="/">
                <img src={company_logo} alt="" />
            </Link>
        </div>
    )
}

export default Logo