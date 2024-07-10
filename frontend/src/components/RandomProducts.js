import React, { useState, useEffect } from 'react';
import axios from 'axios';
import '../components/RandomProducts.css';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const getRandomProducts = (productList, numProducts) => {
  const shuffled = productList.sort(() => 0.5 - Math.random());
  return shuffled.slice(0, numProducts);
};

export const RandomProductSection = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const res = await axios.get('http://localhost:3000/allproducts');
        setProducts(getRandomProducts(res.data, 10)); 
      } catch (error) {
        console.error('Error fetching products:', error);
      }
    };

    fetchProducts();
  }, []);

  const settings = {
    dots: false,
    infinite: true,
    buttons:true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
  };

  const renderProduct = (product) => {
    console.log(product);
    return (
      <div key={product._id} className="random-products-item">
        <div className='random-products-image'>
        <img src={`http://localhost:3000/${product.images[0]}`} alt={product.title} />
        </div>
        <div className='random-products-inner'>
        <p className='random-products-category'>{product.category}</p>
        <p className='random-products-title'>{product.title}</p>
        <p className='random-products-price'>₹ {product.price}</p>
      </div>
      </div>
    );
  };
  return (
    <div className="random-product-section">
        <div className='container'>
      <Slider {...settings}>
        {products.map(product => renderProduct(product))}
      </Slider>
    </div>
    </div>
  );
};
