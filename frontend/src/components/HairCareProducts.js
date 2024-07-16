import React, { useState, useEffect } from "react";
import axios from "axios";

export const HairCareProducts = () => {
    const [hairCareProducts, setHairCareProducts] = useState([]);

    useEffect(() => {
        const fetchProducts = async () => {
            try {
                const res = await axios.get('https://glowboom.onrender.com/allproducts');
                const filtered = res.data.filter(product => product.category.includes('Hair Care'));
                setHairCareProducts(filtered);
            } catch (error) {
                console.error('Error fetching products:', error);
            }
        };

        fetchProducts();
    }, []);
   
    return (
      
           
            <div className="products-main">
                <div className="row">
                    {hairCareProducts.map((product) => (
                        <div className="col-md-3 mb-5" key={product._id}>
                            <div className="products-block">
                                {product?.images?.map((image, index) => (
                                    <div className="image-block" key={index}>
                                        <img className='product_image' src={`https://glowboom.onrender.com/${image}`} alt="product_image" />
                                    </div>
                                ))}
                                <div className="inner-block">
                                    <p className="product_category">{product.category}</p>
                                    <p className="product_title">{product.title}</p>
                                    <p className="product_price">₹ {product.price}</p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        
    );
};