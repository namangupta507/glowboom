import React from 'react'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import '../components/Section9.css';
    
export const Section9 = () => {
    var settings = {
        dots: false,
        infinite: true,
        speed: 500,
        autoplay: true,         
        autoplaySpeed: 2000,    
        pauseOnHover: true ,
        slidesToShow: 3,
        slidesToScroll: 1,
      };
      const importAll = (r) => r.keys().map(r);


 const images = importAll(require.context('../sliderimages', false, /\.(png|jpe?g|svg)$/));
  return (
    <div className='section9'>
        <div className='container'>
        <div className='section9-top'>
            <span className='left-separator'></span>
            <div className='section-9-heading'>
                <h2>Love From Our Community</h2>
            </div>
            <span className='right-separator'></span>
            </div>
        <Slider className="section9-slider"{...settings}>
        
      {images.map((image, index) => {
                    const imagePath = image.startsWith('/') ? image : `/${image}`;
                    return (
                        <div key={index}>
                            <img src={imagePath} alt={`Slide ${index}`} style={{ width: '100%' }} />
                        </div>
                    );
                })}
     
    </Slider>
        </div>
    </div>
  )
}
