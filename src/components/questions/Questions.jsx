import React from 'react';
import './questions.css'
import Accordian from '../accordian/Accordian';
import { union } from '../../assets';

const Questions = () => {
    return (
        <div className='questions_parent'>
            <div className='questions'>
                <h3>What's on your mind</h3>
                <div className='questions_in'>
                    <div className='questions_left'>
                        <h4>Ask Questions</h4>
                    </div>
                    <div className='questions_right'>
                        <Accordian />
                    </div>
                </div>
            </div>
            <div className='questions_design'>
                <img src={union} alt="" />
            </div>
        </div>
    )
}

export default Questions