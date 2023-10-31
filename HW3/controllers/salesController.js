const dataRoutes = require("../routes/dataRoutes");
const Customer = require("../models/sales");

exports.getSales = (req, res, next) => {
    res.render('/sales',{
        from: 'sales'
        // make sure this corresponds with the nav bar
    })
}

exports.postSales = (req, res, next) => {
    res.render('/sales', {
        from: 'sales'
        // make sure this corresponds with the nav bar
    })
}
