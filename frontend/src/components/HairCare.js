import React from 'react';
import "../components/HairCare.css";
import image from "../assets/hh.jpeg";
import { HairCareProducts } from './HairCareProducts';

export const HairCare = () => {
  return (
    <div className='haircare'>
        <div className='haircare-top'>
        <h2>Skin Care</h2>
      </div>
      <div className='skincare-section-2'>
        <div className='container'>
          <div className='row'>
            <div className='col-md-6'>
                <div className='haircare-section-2-left'>
                  <div className='haircare-section-2-left-header'>
                        <span className='left-separator'></span>
                        
                        <div className='haircare-section-2-left-header-heading'>
                          <h2>Hair Care
                          </h2>
                        </div>

                         <span className='right-separator'></span>
                    </div>
                    <div className='haircare-section-2-left-header-heading2'>
                      <p>Committed to Quality</p>
                    </div>
                  <div className='haircare-section-2-left-content'>
                    <p>Hair products encompass a diverse range of items designed to care for and style hair. This category includes shampoos, conditioners, lotions, hair serums, hair masks, hair oils, hair pack, hair colour and more. These products serve various purposes such as cleansing, moisturizing, repairing, volumizing, and providing hold or texture to achieve desired hairstyles.</p>
                  </div>
                </div>
            </div>
            <div className='col-md-6'>
              <div className='haircare-section-2-left'>
                <div className='image-container'>
                  <img src={image} alt="haircare"></img>
                </div>
              </div>
              </div>
          </div>
        </div>
      </div>
      <div className='haircare-section3'>
        <div className='container'>
          <div className='haircare-section3-heading'>
                        <span className='left-separator'></span>
                        
                        <div className='haircare-section-2-left-header-heading'>
                          <h2>Our products are
                          </h2>
                        </div>

                         <span className='right-separator'></span>
        </div>
        <div className='haircare-section3-products'>
          <HairCareProducts/>
        </div>
          </div>
        </div>
    </div>
  )
}
