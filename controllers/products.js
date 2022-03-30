const model = require('../models/product');
const product = {};

//getProducts
product.getProducts = async(req, res) => {
    try {
        const products = await model.findAll();
        res.status(200).json(products);
    } catch (error) {
        res.status(500).json({
            message: error.message
        });
    }
}

//getProduct by Id
product.getProductById = async(req, res) => {
    try {
        const product = await model.findByPk(req.params.id);
        res.status(200).json(product);
    } catch (error) {
        res.status(500).json({
            message: error.message
        });
    }
}

//createProduct
product.createProduct = async(req, res) => {
    try {
        const product = await model.create(req.body);
        res.status(201).json(product);
    } catch (error) {
        res.status(500).json({
            message: error.message
        });
    }
}

//update product byId
product.updateProduct = async(req, res) => {
    try {
        const product = await model.findByPk(req.params.id);
        await product.update(req.body);
        res.status(200).json(product);
    } catch (error) {
        res.status(500).json({
            message: error.message
        });
    }
}

//delete product byId
product.deleteProduct = async(req, res) => {
    try {
        const product = await model.findByPk(req.params.id);
        await product.destroy();
        res.status(200).json(product);
    } catch (error) {
        res.status(500).json({
            message: error.message
        });
    }
}

module.exports = product;