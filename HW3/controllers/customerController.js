const dataRoutes = require("../routes/dataRoutes");
const Customer = require("../models/customers");

exports.getCustomer = (req, res, next) => {
    res.render('/customers',{
        from: 'customers'
        // make sure this corresponds with the nav bar
    })
}

exports.postCustomer = (req, res, next) => {
    res.render('/customers', {
        from: 'customers'
        // make sure this corresponds with the nav bar
    })
}

