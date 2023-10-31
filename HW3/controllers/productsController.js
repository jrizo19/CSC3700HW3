const dataRoutes = require("../routes/dataRoutes");
const Customer = require("../models/products");

exports.getProducts = (req, res, next) => {
    res.render('products',{
        from: 'products'
        // make sure this corresponds with the nav bar
    })
}

exports.postProducts = (req, res, next) => {
    res.render('products', {
        from: 'products'
        // make sure this corresponds with the nav bar
    })
}
