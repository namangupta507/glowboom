import React from 'react';
import '../components/Section5.css';
import { RandomProductSection } from './RandomProducts';

export const Section5 = () => {
  return (
    <div className='section5'>
        <div className='container-fluid'>
            <div className='section5-top'>
            <span className='left-separator'></span>
            <div className='section-5-heading'>
                <h2>Best Sellers Trending Products</h2>
            </div>
            <span className='right-separator'></span>
            </div>
        </div>
        <div className='section5-bottom'>
            <RandomProductSection/>
        </div>
    </div>
  )
}
