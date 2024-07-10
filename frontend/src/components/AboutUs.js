import React from 'react';
import './AboutUs.css';
import image from '../assets/aboutus1.jpg';
import { Link } from 'react-router-dom';
import image1 from '../assets/Q1.jpg';
import image2 from '../assets/Q2.jpg';
import image3 from '../assets/Q3.jpg';
import image4 from '../assets/Q4.jpg';
import image5 from '../assets/Q5.jpg';
import image6 from '../assets/Q6.jpg';
import image7 from '../assets/Award.jpg';

export const AboutUs = () => {
  return (
    <div className='about-us'>
      <div className='about-us-title'>
        <h2>About Us</h2>
      </div>
      <div className='about-us-section2'>
        <div className='container'>
          <div className='row'>
            <div className='col-md-6'>
              <div className='about-us-section2-left'>
                <img src={image} alt="images"></img>
              </div>
            </div>
            <div className='col-md-6'>
              <div className='about-us-section2-right'>
                    <div className='about-us-section2-right-inner'>
                          <span className='left-separator'></span>
                        
                          <div className='about-us-section2-right-heading'>
                            <h2>About Our Company
                            </h2>
                          </div>
                           <span className='right-separator'></span>
                    </div>
                    <div className='about-us-section2-right-heading2'>
                      <p>Committed to Quality</p>
                    </div>
                    <div className='about-us-section2-right-description'>
                            <p>As a leader in our industry, Glow & Bloom possesses a wealth of knowledge and expertise that is truly incomparable. We draw on the extensive experience we’ve gained over our years as a top Skin Care Product Manufacturer to provide companies and individuals with quality, innovative products they can always count on.</p>
                            <p>In addition, we ensure that we stay ahead of the industry curve by becoming early adopters of the latest manufacturing techniques and technologies. Rest assured that no matter what you need, you can rely on Glow & Bloom to provide the absolute best.</p>
                    </div>
            </div>
            <div className='about-us-section2-right-bottom'>
              <div className='row about-us-row'>
                
                <div className='col-md-6'>
                  <div className='about-us-section2-right-bottom-inner'>
                    <h2>GET IN TOUCH</h2>
                    <p>Call now : 8698871943</p>                    
                    <p>Email: <Link to="mailto:glownbloom81@gmail.com">glownbloom81@gmail.com</Link></p>
                  </div>
                </div>
                <div className='col-md-4'>
                <div className='about-us-section2-right-bottom-inner'>
                    <h2>VISIT US</h2>
                    <p>Pune,Maharashtra</p>      
                  </div>
                </div>
                <div className='col-md-2'></div>
              </div>
            </div>
            </div>
          </div>
        </div>
      </div>
      <div className='about-us-section3'>
        <div className='container'>
        <div className='about-us-section3-right-inner'>
                          <span className='left-separator'></span>
                        
                          <div className='about-us-section3-right-heading'>
                            <h2>Featured
                            </h2>
                          </div>

                           <span className='right-separator'></span>
        </div>
        <div className='about-us-section3-right-inner-bottom'>
          <div className='row mt-5'>
            <div className='col-md-4 mb-3'>
              <div className='image-container'>
              <img src={image1} alt="image1"></img>
              </div>
            </div>
            <div className='col-md-4 mb-3'>
              <div className='image-container'>
              <img src={image2} alt="image2"></img>
              </div>
            </div>
            <div className='col-md-4 mb-3'>
              <div className='image-container'>
              <img src={image3} alt="image3"></img>
              </div>
            </div>
            <div className='col-md-4 mb-3'>
              <div className='image-container'>
              <img src={image4} alt="image4"></img>
              </div>
            </div>
            <div className='col-md-4 mb-3'>
              <div className='image-container'>
              <img src={image5} alt="image5"></img>
              </div>
            </div>
            <div className='col-md-4 mb-3'>
              <div className='image-container'>
              <img src={image6} alt="image6"></img>
              </div>
            </div>
          </div>
          <div className='row'>
            <div className='col-md-12'>
            <div className='image-container'>
              <img src={image7} alt="image7"></img>
              </div>
            </div>
          </div>
        </div>
        </div>
      </div>
    </div>
  )
}
