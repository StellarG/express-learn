const express = require('express');
const router = express.Router();
const controllers = require('../controllers/products');

//getProducts
router.get('/products', controllers.getProducts);
//getProduct by Id
router.get('/products/:id', controllers.getProductById);
//createProduct
router.post('/products', controllers.createProduct);
//update product byId
router.put('/products/:id', controllers.updateProduct);
//delete product byId
router.delete('/products/:id', controllers.deleteProduct);

module.exports = router;