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
}

exports.postProducts = (req, res, next) => {
    res.render('products', {
        from: 'products'
    })
}

exports.getAddProduct = (req, res, next) => {
    res.render('addProduct', {
        from: 'products',
        title: 'Add Product'
    })
}

exports.postAddProduct =(req, res, next) => {
    let i = req.body.item;
    let p = req.body.price;
    const product = new Product(i, p);
    product.saveProduct()
    res.redirect('products')

}
