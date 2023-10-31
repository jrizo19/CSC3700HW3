const dataRoutes = require("../routes/dataRoutes");
const Sales = require("../models/sales");

exports.getSales = (req, res, next) => {
    Sales.fetchAll()
        .then((rows, fieldData) =>{
            res.render('sales',{
                title: "All Sales",
                from: 'sales',
                sales: rows[0]
            })
        })
}

exports.postSales = (req, res, next) => {
    res.render('sales', {
        from: 'sales'
        // make sure this corresponds with the nav bar
    })
}
