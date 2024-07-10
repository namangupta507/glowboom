import React from 'react';
import i1 from '../assets/i1.png';
import i2 from '../assets/i2.png';
import i3 from '../assets/i3.png';
import '../components/Section8.css';

export const Section8 = () => {
  return (
    <div className='section8'>
        <div className='container'>
        <div className='row'>
            <div className='col-md-4'>
                <div className='section8-inner'>
                    <div className='section8-imageblock'>
                        <img src={i1} alt="i1"></img>
                    </div>
                    <div className='section8-heading'>
                        <p>Quality Products</p>
                    </div>
                    <div className='section8-info'>
                        <p>We believe, quality is the best policy to gain happy customers. Our stringent QA process ensures our products abide by this philosophy.</p>
                    </div>
                </div>
            </div>
            <div className='col-md-4'>
            <div className='section8-inner oddone'>
            <div className='section8-imageblock'>
                        <img src={i2} alt="i2"></img>
                    </div>
                    <div className='section8-heading'>
                        <p>100% Natural</p>
                    </div>
                    <div className='section8-info'>
                        <p>Artificial and synthetic elements do not have a place in our growth plan. Instead, it’s all about healthy, skin-friendly, natural ingredients.</p>
                    </div>
                    </div>
            </div>
            <div className='col-md-4'>
            <div className='section8-inner'>
            <div className='section8-imageblock'>
                        <img src={i3} alt="i3"></img>
                    </div>
                    <div className='section8-heading'>
                        <p>Best Price</p>
                    </div>
                    <div className='section8-info'>
                        <p>Quality does come at a price. But, it should be democratic. So we have strived maximum to offer the best price for the quality you demand.</p>
                    </div>
            </div>
            </div>
        </div>
    </div>
    </div>
  )
}
