// routes/productRoutes.js

const express = require('express');
const router = express.Router();
const multer = require('multer');
const path = require('path');
const {createProduct,updateProduct,deleteProduct}  = require('../controllers/productController');

const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, 'public/uploads/');
    },
    filename: (req, file, cb) => {
        const ext = path.extname(file.originalname);
        cb(null, file.fieldname + '-' + Date.now() + ext);
    }
});

const upload = multer({ storage: storage });

router.post('/addProduct', upload.array('images', 10), createProduct);
router.put('/editProduct/:id', upload.array('images', 10), updateProduct);
router.delete('/deleteProduct/:id', deleteProduct);

module.exports = router;
