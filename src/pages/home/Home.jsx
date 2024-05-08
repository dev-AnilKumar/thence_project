import React from 'react';
import './home.css'
import Navbar from '../../components/navbar/Navbar';
import { girl_img, rocket } from '../../assets';
import Footer from '../../components/footer/Footer';
import Questions from '../../components/questions/Questions';
import Slider from '../../components/slider/Slider';

const Home = () => {
    return (
        <main>
            <Navbar />
            <div className='landing_page'>
                <h2>Success Stories</h2>
                <h1>Every success journey<br />we’ve encountered.</h1>
                <div className='landing_page_in'>
                    <div className='landing_page_in_left'>
                        <div className='landing_page_in_left_img_parent'>
                            <div className='landing_page_in_left_img'>
                                <img src={girl_img} alt="" />
                            </div>
                            {/* Left Floating box */}
                            <div className='img_left_box'>
                                <h4>40%</h4>
                                <p>Achieved reduction in project execution time by optimising team availability</p>
                            </div>
                            {/* Bottom Floating box */}
                            <div className='img_bottom_box'>
                                <div className='img_bottom_box_img'>
                                    <img src={rocket} alt="" />
                                </div>
                                <div className='img_bottom_box_in'>
                                    <h5>10 days</h5>
                                    <p>Staff Deployment</p>
                                </div>
                            </div>
                            {/* Right Floating box */}
                            <div className='img_right_box'>
                                <h4>$0.5 <span>Million</span></h4>
                                <p>Reduced client expenses by saving on hiring and employee costs.</p>
                            </div>
                        </div>

                    </div>
                    <div className='landing_page_in_right'>
                        <Slider />
                    </div>
                </div>
            </div>
            <Questions />
            <Footer />
        </main>
    )
}

export default Home