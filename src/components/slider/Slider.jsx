import React, { useState } from 'react';
import "./slider.css"
import { arrow } from '../../assets';

const Slider = () => {
    const [imgindex, setImgindex] = useState(0);

    const sliderData = ["Enhance fortune 50 company’s insights teams research capabilities1",
        "Enhance fortune 50 company’s insights teams research capabilities2",
        "Enhance fortune 50 company’s insights teams research capabilities3"];

    return (
        <div className='slider_container'>
            <div className='slider'>
                {sliderData.map((item, index) => {
                    return (
                        <div key={index} className='slide' style={{
                            transform: `translateX(${(-100 * imgindex)}% )`
                        }} >
                            <p>{item}</p>
                        </div>
                    )
                })}
            </div>
            <div className='slider_dots'>
                {sliderData.map((_, index) => {
                    return <div key={index} className={`dot ${imgindex === index ? "slide_active" : ""}`} onClick={() => setImgindex(index)}></div>
                })}
            </div>
            <div className='explore_more'>
                <button>Explore more <img src={arrow} alt="Arrow" /></button>
            </div>
        </div>
    )
}

export default Slider