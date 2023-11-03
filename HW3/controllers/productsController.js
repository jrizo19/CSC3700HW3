const dataRoutes = require("../routes/dataRoutes");
const Product = require("../models/products");

exports.getProducts = (req, res, next) => {
    Product.fetchAll()
        .then((rows, fieldData) =>{
            res.render('products',{
                title: "All Products",
                from: 'products',
                item: rows[0]
            })
        })
    // res.render('products',{
    //     title: "All Products",
    //     from: 'products'
    //     // make sure this corresponds with the nav bar
    // })
}

exports.postProducts = (req, res, next) => {
    res.render('products', {
        from: 'products'
        // make sure this corresponds with the nav bar
    })
}
