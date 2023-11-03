const dataRoutes = require("../routes/dataRoutes");
const Customer = require("../models/customers");
const Product = require("../models/products");
const Sales = require("../models/sales");
const Home = require("../models/home")


// ToDO figure out how to string the fetch all commands to go through the homeController.
exports.getHomeData = (req, res, next) => {
    Home.fetchAll()
        .then((rows, fieldData) => {
            res.render('home', {
                title: 'Home',
                from: 'home',
                home: rows[0]
            })


    })


    //     .then((rows, fieldData) =>{
    //         res.render('customers',{
    //             title: "All Customers",
    //             from: 'customers',
    //             customer: rows[0]
    //         })
    //     })
    // Product.fetchAll()
    //     .then((rows, fieldData) => {
    //         res.render('products', {
    //             title: "All Products",
    //             from: 'products',
    //             item: rows[0]
    //         })
    //     })
    // Sales.fetchAll()
    //     .then((rows, fieldData) =>{
    //         res.render('sales',{
    //             title: "All Sales",
    //             from: 'sales',
    //             sales: rows[0]
    //         })
    //     })
}

