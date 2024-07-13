import React, { useState, useEffect } from "react";
import axios from "axios";

export const AllSkinCareProducts = () => {
    const [skinCareProducts, setSkinCareProducts] = useState([]);

    useEffect(() => {
        const fetchProducts = async () => {
            try {
                const res = await axios.get('https://glowboom-eem8.vercel.app/allproducts');
                const filtered = res.data.filter(product => product.category.includes('Skin Care'));
                setSkinCareProducts(filtered);
            } catch (error) {
                console.error('Error fetching products:', error);
            }
        };

        fetchProducts();
    }, []);

    return (
        <div className="products-main">
            <div className="row">
                {skinCareProducts.map((product) => (
                    <div className="col-md-3 mb-5" key={product._id}>
                        <div className="products-block">
                            {product?.images?.map((image, index) => (
                                <div className="image-block" key={index}>
                                    <img className='product_image' src={`https://glowboom-eem8.vercel.app/${image}`} alt="product_image" />
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
