import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import slide1 from '../assets/ss4.jpg';
import slide2 from '../assets/ss1.jpg';
import slide3 from '../assets/ss2.jpg';
import slide4 from '../assets/ss3.jpg';
import '../components/HomeSlider.css';

export const HomeSlider=()=> {
  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    autoplay: true,         
    autoplaySpeed: 2000,    
    pauseOnHover: true ,
    slidesToShow: 1,
    slidesToScroll: 1,
  };
  return (
    <div className="section-2">
    <Slider className="vt-homeslider"{...settings}>
      <div className="slide-inner">
        <img src={slide1} alt="slide1"></img>
      </div>
      <div className="slide-inner">
      <img src={slide2} alt="slide2"></img>
      </div>
      <div className="slide-inner">
      <img src={slide3} alt="slide3"></img>
      </div>
      <div className="slide-inner">
      <img src={slide4} alt="slide4"></img>
      </div>
    </Slider>
    </div>
  );
}
