import React from 'react';
import "../components/Section4.css";
import image1 from "../assets/section4_one.png";
import image2 from "../assets/section4_two.png";
import image3 from "../assets/section4_three.png";

export const Section4 = () => {
  return (
    <div className='section4'>
        <div className='container'>
            <div className='section-4-top'>
            <span className='left-separator'></span>
            <div className='section-4-heading'>
                <h2>Our Products Are</h2>
            </div>
            <span className='right-separator'></span>
            </div>
            <div className='section-4-bottom'>
                
                            <div className='section4-bottom-inner'>
                                <img src={image1} alt="clean"></img>
                            </div>
                        
                        <div className='section4-bottom-inner'>
                                <img src={image2} alt="kind"></img>
                          </div>
                        
                            <div className='section4-bottom-inner'>
                                <img src={image3} alt="effective"></img>
                            </div>
                        </div>
                       
                    </div>
                    </div>
               
  )
}
