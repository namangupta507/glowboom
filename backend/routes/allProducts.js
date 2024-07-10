const express=require('express');
const router=express.Router();
const allProducts=require('../controllers/allProductsController');

router.get('/',allProducts);

module.exports=router;