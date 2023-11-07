const dataRoutes = require("../routes/dataRoutes");
const Customer = require("../models/customers");
//toDO update & new
exports.getCustomer = (req, res, next) => {
    Customer.fetchAll()
        .then((rows, fieldData) =>{
            res.render('customers',{
                title: "All Customers",
                from: 'customers',
                customer: rows[0]
        })
    })
}

exports.postCustomer = (req, res, next) => {
    res.render('customers', {
        from: 'customers'
        // make sure this corresponds with the nav bar
    })
}

