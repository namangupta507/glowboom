// controllers/productController.js

const Product = require('../models/Product');

const createProduct = async (req, res) => {
    try {
        if (!req.files || req.files.length === 0) {
            return res.status(400).json({ message: 'No files uploaded' });
        }

        console.log(req.files,'fff')
        const imagePaths = req.files.map(file => file.path.replace('public\\', '')); // Adjust path format if necessary
        console.log(imagePaths,'ip');
        const product = new Product({
            title: req.body.title,
            category: req.body.category,
            price: req.body.price,
            description: req.body.description,
            images: imagePaths
        });

        await product.save();
        res.status(200).json({ message: 'Product added successfully', product });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};
const updateProduct = async (req, res) => {
  try {
      const imagePaths = req.files.map(file => file.path.replace('public\\', ''));
      const updatedProduct = {
          title: req.body.title,
          category: req.body.category,
          price: req.body.price,
          description: req.body.description,
          images: imagePaths
      };

      const product = await Product.findByIdAndUpdate(req.params.id, updatedProduct, { new: true });
      res.status(200).json({ message: 'Product updated successfully', product });
  } catch (error) {
      res.status(500).json({ message: error.message });
  }
};
const deleteProduct = async (req, res) => {
  try {
      await Product.findByIdAndDelete(req.params.id);
      res.status(200).json({ message: 'Product deleted successfully' });
  } catch (error) {
      res.status(500).json({ message: error.message });
  }
};

module.exports = {createProduct,updateProduct,deleteProduct};

