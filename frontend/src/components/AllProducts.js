import React, { useState, useEffect } from "react";
import axios from "axios";
import Modal from 'react-modal';

export const AllProducts = () => {
    const [products, setProducts] = useState([]);
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [filteredProducts, setFilteredProducts] = useState([]);
    const [currentProduct, setCurrentProduct] = useState(null);
    const [title, setTitle] = useState('');
    const [category, setCategory] = useState('');
    const [price, setPrice] = useState('');
    const [description, setDescription] = useState('');
    const [images, setImages] = useState([]);
    const [previewImages, setPreviewImages] = useState([]);
    const [selectedCategory, setSelectedCategory] = useState('');
    const categories = ['Face moisturiser,Skin Care','Lip Care','Essentials','Absolute Must-Haves, Bestseller, Face Moisturiser, Skin Care','Face Gels (moisturiser) for Oily skin, Skin Care','Combos', 'Skin Care', 'Creams,Skin Care', 'Facial Serum,Skin Care','Face packs & srcubs,Skin Care'];

    useEffect(() => {
        const fetchProducts = async () => {
            try {
                const res = await axios.get('https://glowboom-eem8.vercel.app/allproducts');
                setProducts(res.data);
                setFilteredProducts(res.data); 
            } catch (error) {
                console.error('Error fetching products:', error);
            }
        };

        fetchProducts();
    }, []);
    useEffect(() => {
       
        if (selectedCategory) {
            const filtered = products.filter(product => product.category.includes(selectedCategory));
            setFilteredProducts(filtered);
        } else {
            setFilteredProducts(products); 
        }
    }, [selectedCategory, products]);

    const openModal = (product) => {
        setCurrentProduct(product);
        setTitle(product.title);
        setCategory(product.category);
        setPrice(product.price);
        setDescription(product.description);
        setPreviewImages(product.imagePath);
        setIsModalOpen(true);
    };

    const closeModal = () => {
        setIsModalOpen(false);
        setCurrentProduct(null);
        setTitle('');
        setCategory('');
        setPrice('');
        setDescription('');
        setImages([]);
        setPreviewImages([]);
    };

    const handleEditSubmit = async (e) => {
        e.preventDefault();
        const formData = new FormData();
        formData.append('title', title);
        formData.append('category', category);
        formData.append('price', price);
        formData.append('description', description);
        images.forEach(image => formData.append('images', image));

        try {
            const res = await axios.put(`https://glowboom-eem8.vercel.app/products/editProduct/${currentProduct._id}`, formData, {
                headers: {
                    'Content-Type': 'multipart/form-data'
                }
            });
            // Update the products state with the edited product
            setProducts(products.map(product => product._id === currentProduct._id ? res.data.product : product));
            closeModal();
        } catch (error) {
            console.error('Error updating product:', error);
        }
    };

    const handleFileChange = (e) => {
        const files = Array.from(e.target.files);
        setImages(files);
        const previews = files.map(file => URL.createObjectURL(file));
        setPreviewImages(previews);
    };

    const handleDelete = async (id) => {
        try {
            await axios.delete(`https://glowboom-eem8.vercel.app/products/deleteProduct/${id}`);
            setProducts(products.filter(product => product._id !== id));
        } catch (error) {
            console.error('Error deleting product:', error);
        }
    };

    return (
        <div className="container">
            <div className="admin-header">
            <div className="heading">
                <h1>All Products</h1>
            </div>
            <select value={selectedCategory} onChange={(e) => setSelectedCategory(e.target.value)}>
                    <option value="">All Categories</option>
                    {categories.map((cat, index) => (
                        <option key={index} value={cat}>{cat}</option>
                    ))}
                </select>
            </div> 
            <div className="products-main">
                <div className="row">
                    {filteredProducts.map((product) => (
                        <div className="col-md-3 mb-5" key={product._id}>
                            <div className="products-block">
                                {product?.images?.map((image, index) => (
                                    <div className="image-block">
                                    <img key={index} className='product_image' src={`https://glowboom-eem8.vercel.app/${image}`} alt="product_image" />
                                    </div>
                                ))}
                                <div className="inner-block">
                                    <p className="product_category">{product.category}</p>
                                    <p className="product_title">{product.title}</p>
                                    <p className="product_price">₹ {product.price}</p>
                                    <div className="products-button">
                                        <button className="product-edit-button" onClick={() => openModal(product)}>Edit</button>
                                        <button className="product-delete-button" onClick={() => handleDelete(product._id)}>Delete</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
            <Modal isOpen={isModalOpen} onRequestClose={closeModal}>
                <h2 className="modal-heading">Edit Product</h2>
                <div className="updation-form">
                <form onSubmit={handleEditSubmit}>
                    <div className="updation-fields">
                        <label>Title:</label>
                        <input type="text" value={title} onChange={(e) => setTitle(e.target.value)} />
                    </div>
                    <div className="updation-fields">
                        <label>Category:</label>
                        <select value={category} onChange={(e) => setCategory(e.target.value)}>
                            <option value="">Select a category</option>
                            {categories.map((cat, index) => (
                                <option key={index} value={cat}>{cat}</option>
                            ))}
                        </select>
                    </div>
                    <div className="updation-fields">
                        <label>Price:</label>
                        <input type="number" value={price} onChange={(e) => setPrice(e.target.value)} />
                    </div>
                    <div className="updation-fields">
                        <label>Description:</label>
                        <textarea value={description} onChange={(e) => setDescription(e.target.value)}></textarea>
                    </div>
                    <div className="updation-fields">
                        <label>Image:</label>
                        <input type="file" multiple onChange={handleFileChange} />
                        {/* {previewImages.length > 0 && (
                            <div>
                                {previewImages.map((preview, index) => (
                                    <img key={index} src={preview} alt={`Preview ${index}`} />
                                ))}
                            </div>
                        )} */}
                        {previewImages && previewImages.length > 0 && (
                          <div className="updation-image">
                              {previewImages.map((preview, index) => (
                                  <img key={index} src={preview} alt={`Preview ${index}`} />
                              ))}
                          </div>
                        )}
                      </div>
                      <div className="updation-buttons">
                    <button className='updation-button-update' type="submit">Update Product</button>
                    <button className='updation-button-cancel' type="button" onClick={closeModal}>Cancel</button>
                    </div>
                </form>
                </div>
            </Modal>
        </div>
    );
};
