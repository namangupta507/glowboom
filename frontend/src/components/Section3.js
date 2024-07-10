import React from 'react';
import {Link} from "react-router-dom";
import '../components/Section3.css';
import sectionImage from "../assets/section3.png";

export const Section3 = () => {
  return (
    <div className='section-3'>
        <div className='container'>
            <div className='row'>
                <div className='col-md-6'>
                    <div className='section-inner'>
                        <div className='left-inner-top'>
                            <span className='left-separator'></span>
                        
                        <div className='left-inner-heading'>
                            <h2>Welcome to Glow & Bloom
                            </h2>
                        </div>
                        <span className='right-separator'></span>
                        </div>
                        <div className='left-inner-description'>
                            <p>Committed to Quality</p>
                        </div>
                        <div className='left-inner-content'>
                            <p>As a leader in the industry since 2017, Glow & Bloom has a wealth of knowledge and experience in everything related to the manufacturing of excellent products. We’re committed to providing a variety of companies and individuals with quality products and innovations. The industry is constantly changing, so we're constantly working to keep up with the latest advancements.</p>
                        </div>
                        <div className='left-inner-button'>
                            <Link to='/about-us' className="read-more-button">Read More</Link>
                        </div>
                    </div>
                </div>
                <div className='col-md-6'>
                    <div className='right-inner'>
                        <img src={sectionImage} alt="section-image"></img>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}
