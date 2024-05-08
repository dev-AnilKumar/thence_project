import React from 'react';
import './navbar.css'
import { Link } from 'react-router-dom';
import Logo from '../logo/Logo';

const Navbar = () => {
    return (
        <nav>
            <div className='navbar'>
                <Logo />
                <div className='nav_buttons'>
                    <Link to="/getproject-form">
                        <button className='get_project'>
                            Get Projects
                        </button>
                    </Link>
                    <button className='onboard_talent'>Onboard Talent</button>
                </div>
            </div>
        </nav>
    )
}

export default Navbar