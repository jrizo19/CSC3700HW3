const express = require("express");
const router =  express.Router();
const customerController = require("../controllers/customerController");
const productController = require("../controllers/productsController");
const salesController = require("../controllers/salesController");


router.get('/customers', customerController.getCustomer);
router.post('/customers', customerController.postCustomer);

router.get('/products', productController.getProducts);
router.post('/products', productController.postProducts);

router.get('/sales', salesController.getSales);
router.post('/sales', salesController.postSales);

exports.routes = router;
