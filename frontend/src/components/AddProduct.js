import React, { useState } from 'react';
import axios from 'axios';
import { EditorState} from 'draft-js';
import 'react-draft-wysiwyg/dist/react-draft-wysiwyg.css';
import { Editor } from 'react-draft-wysiwyg';
import '../index.css';

export const AddProduct = () => {
    const [title, setTitle] = useState('');
    const [category, setCategory] = useState('');
    const [price, setPrice] = useState('');
    const [images, setImages] = useState([]);
    const [previewImages, setPreviewImages] = useState([]);
    const [showFileInput, setShowFileInput] = useState(true);
    const [editorState, setEditorState] = useState(() =>
        EditorState.createEmpty()
    );

    const categories = ['Face moisturiser,Skin Care','Lip Care','Essentials','Absolute Must-Haves, Bestseller, Face Moisturiser, Skin Care','Face Gels (moisturiser) for Oily skin, Skin Care','Combos', 'Skin Care', 'Creams,Skin Care', 'Facial Serum,Skin Care','Face packs & srcubs,Skin Care','Hair Care','Hair Care,Shampoo',
        'Hair Care,Serums','Absolute Must-Haves,Hair Care','Bestseller,Hair Care,Shampoo','Absolute Must-Have,Bestseller,Hair Care,Shampoo','Combos,Hair Care'
    ];

    const handleCategoryChange = (e) => {
        setCategory(e.target.value);
    };

    const onEditorStateChange = (editorState) => {
        setEditorState(editorState);
    };

    const handleFileChange = (e) => {
        const files = Array.from(e.target.files);
        setImages(files);
        const previews = files.map(file => URL.createObjectURL(file));
        setPreviewImages(previews);
        setShowFileInput(false);
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        const formData = new FormData();
        formData.append('title', title);
        formData.append('category', category);
        formData.append('price', price);
        const contentState = editorState.getCurrentContent();
        const plainTextDescription = contentState.getPlainText(); 
        formData.append('description', plainTextDescription);
        for (const image of images) {
            formData.append('images', image);
        }

        try {
            const res = await axios.post('https://glowboom.onrender.com/products/addProduct', formData, {
                headers: {
                    'Content-Type': 'multipart/form-data'
                }
            });
            console.log(res.data);
            alert("product adeded successfully");
            setTitle('');
            setCategory('');
            setPrice('');
            setImages([]);
            setPreviewImages([]);
            setShowFileInput(true);
            setEditorState(EditorState.createEmpty()); 
        } catch (err) {
            console.error(err);
        }
    };

    const handleEditField = (setter, value) => {
        setter(value);
        setShowFileInput(true);
    };

    return (
        <div className='admin-panel'>
            <div className='addproduct'>
                <div className='container'>
                    <div className='row'>
                        <div className='col-md-2'></div>
                        <div className='col-md-8'>
                            <div className='content'>
                                <form onSubmit={handleSubmit}>
                                    <div className='admin-fields'>
                                        <label>Title:</label>
                                        <input type="text" value={title} onChange={(e) => setTitle(e.target.value)} />
                                        <button className='edit-button' type="button" onClick={() => handleEditField(setTitle, '')}>Edit</button>
                                    </div>
                                    <div className='admin-fields'>
                                        <label>Category:</label>
                                        <select value={category} onChange={handleCategoryChange}>
                                            <option value="">Select a category</option>
                                            {categories.map((category, index) => (
                                                <option key={index} value={category}>{category}</option>
                                            ))}
                                        </select>
                                        <button className='edit-button' type="button" onClick={() => handleEditField(setCategory, '')}>Edit</button>
                                    </div>
                                    <div className='admin-fields'>
                                        <label>Price:</label>
                                        <input type="number" value={price} onChange={(e) => setPrice(e.target.value)} />
                                        <button className='edit-button' type="button" onClick={() => handleEditField(setPrice, '')}>Edit</button>
                                    </div>
                                    <div className='admin-fields'>
                                        <label>Image:</label>
                                        {showFileInput ? (
                                            <input type="file" multiple onChange={handleFileChange} />
                                        ) : (
                                            previewImages.length > 0 && (
                                                <div className={previewImages.length === 1 ? 'single-image-preview' : 'multiple-images-preview'}>
                                                    {previewImages.map((preview, index) => (
                                                        <img key={index} src={preview} alt={`Preview ${index}`} className="preview-image" />
                                                    ))}
                                                </div>
                                            )
                                        )}
                                        <button className='edit-button' type="button" onClick={() => setShowFileInput(true)}>Edit</button>
                                    </div>
                                    <div className='admin-fields'>
                                        <label>Description:</label>
                                        <Editor
                                            editorState={editorState}
                                            toolbarClassName="toolbar-class"
                                            wrapperClassName="wrapper-class"
                                            editorClassName="editor-class"
                                            onEditorStateChange={onEditorStateChange}
                                        />
                                    </div>
                                    <button type="submit" className='admin-button'>Add Product</button>
                                </form>
                            </div>
                        </div>
                        <div className='col-md-2'></div>
                    </div>
                </div>
            </div>
        </div>
    );
};


