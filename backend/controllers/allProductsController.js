const Product=require('../models/Product');

const allProducts=async(req,res)=>{
    try {
    const products = await Product.find();
    res.json(products);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

module.exports=allProducts