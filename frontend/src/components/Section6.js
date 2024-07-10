import React from 'react';
import '../components/Section6.css';
import { SkinCareProducts } from './SkinCareProducts';

export const Section6 = () => {
  return (
    <div className='section6'>
        <div className='container'>
            <div className='section6-top'>
            <span className='left-separator'></span>
            <div className='section-6-heading'>
                <h2>Shop For Skin Care</h2>
            </div>
            <span className='right-separator'></span>
            </div>
            <div className='section6-bottom'>
                <SkinCareProducts/>
            </div>
        </div>
    </div>
  )
}
