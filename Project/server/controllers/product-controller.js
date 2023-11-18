const Product = require('../model/products');

module.export.getAllProducts = (req,res,next)=>{
    res.json(Product.getAllProducts());
}