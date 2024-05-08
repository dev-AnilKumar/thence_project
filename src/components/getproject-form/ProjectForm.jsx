import React, { useState } from 'react';
import "./projectform.css"
import Logo from '../logo/Logo';
import { Link } from 'react-router-dom';
import { close, errorIcon } from '../../assets';

const ProjectForm = ({ setSuccess }) => {
    const [data, setdata] = useState({
        name: "",
        email: "",
    })

    const [error, setError] = useState({
        name: "",
        email: "",
    });

    const changeHandler = (e) => {
        setdata((prevData) => ({
            ...prevData,
            [e.target.name]: e.target.value,
        }));
    }
    const submithandler = (e) => {
        e.preventDefault();
        const checkemail = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(data.email);
        if (!checkemail) {
            setError((prevData) => ({
                ...prevData,
                email: "Enter a valid email address",
            }));
        } else {
            setError((prevData) => ({
                ...prevData,
                email: "",
            }));
        }
        if (data.name.length > 2) {
            setError((prevData) => ({
                ...prevData,
                name: "",
            }));
        } else {
            setError((prevData) => ({
                ...prevData,
                name: "Name should contain atleast 3 characters",
            }));
        }
        const canSubmit = data.name.length > 2 && checkemail;
        if (canSubmit) {
            setSuccess(true);
        }
    }

    return (
        <>
            <div className='getproject_top'>
                <Logo />
                <Link to="/">
                    <div className='cancel'>
                        <img src={close} alt="" />
                    </div>
                </Link>
            </div>
            <div className='projectform'>
                <div className='projectform_in'>
                    <h2>Registration Form</h2>
                    <h1>Start your success<br />Journey here!</h1>
                    <div className='form_fields'>
                        <form onSubmit={submithandler} formnovalidate>
                            <input type="text" placeholder='Enter your name' className='input_name' name='name' onChange={changeHandler} value={data.name} />
                            {error.name && <div className='error'>
                                <img src={errorIcon} alt="" />
                                <p>{error.name}</p>
                            </div>}
                            <input type="text" placeholder='Enter your email' className='input_email' name='email' onChange={changeHandler} value={data.email} />
                            {error.email && <div className='error'>
                                <img src={errorIcon} alt="" />
                                <p>{error.email}</p>
                            </div>}
                            <button type='submit' className={`submit_btn ${(data.name && data.email) ? "btn_active" : ""} `}>Submit</button>
                        </form>
                    </div>
                </div>
            </div>
        </>
    )
}

export default ProjectForm