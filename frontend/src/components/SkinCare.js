import React from 'react';
import './SkinCare.css';
import image from "../assets/hare.jpg";
import { AllSkinCareProducts } from './AllSkinCareProducts';

export const SkinCare = () => {
  return (
    <div className='Skincare'>
      <div className='skincare-top'>
        <h2>Skin Care</h2>
      </div>
      <div className='skincare-section-2'>
        <div className='container'>
          <div className='row'>
            <div className='col-md-6'>
                <div className='skincare-section-2-left'>
                  <div className='skincare-section-2-left-header'>
                        <span className='left-separator'></span>
                        
                        <div className='skincare-section-2-left-header-heading'>
                          <h2>Skin Care
                          </h2>
                        </div>

                         <span className='right-separator'></span>
                    </div>
                    <div className='skincare-section-2-left-header-heading2'>
                      <p>Committed to Quality</p>
                    </div>
                  <div className='skincare-section-2-left-content'>
                    <p>Offering a wide array of organic skincare products, Glow And Bloom utilizes natural and ethically sourced ingredients, including herbs and essential oils, in their formulations. We focus on high-quality, non-toxic skincare formulations. Remember, when selecting skincare products, it's essential to consider your skin type, concerns, and any specific ingredient preferences or allergies you may have.</p>
                  </div>
                </div>
            </div>
            <div className='col-md-6'>
              <div className='skincare-section-2-left'>
                <div className='image-container'>
                  <img src={image} alt="hare"></img>
                </div>
              </div>
              </div>
          </div>
        </div>
      </div>
      <div className='skincare-section3'>
        <div className='container'>
          <div className='skincare-section3-heading'>
                        <span className='left-separator'></span>
                        
                        <div className='skincare-section-2-left-header-heading'>
                          <h2>Shop By Skin Type
                          </h2>
                        </div>

                         <span className='right-separator'></span>
        </div>
        <div className='skincare-section3-products'>
        <AllSkinCareProducts/>
        </div>
          </div>
        </div>
      </div>
  
  )
}
