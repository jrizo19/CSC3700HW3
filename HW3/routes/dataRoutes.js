const express = require("express");
const router =  express.Router();
const customerController = require("../controllers/customerController");
const productController = require("../controllers/productsController");
const salesController = require("../controllers/salesController");
const homeController = require("../controllers/homeController");
router.get('/', (req, res) => {
    res.redirect('/home');
});

router.get('/customers', customerController.getCustomer);
router.post('/customers', customerController.postCustomer);

router.get('/products', productController.getProducts);
router.post('/products', productController.postProducts);

router.get('/sales', salesController.getSales);
router.post('/sales', salesController.postSales);

router.get('/home', homeController.getHomeData)

exports.routes = router;
