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

exports.getAddCustomer = (req, res, next) => {
    res.render('addCustomer', {
        from: 'customers',
        title: 'Add Customer'
    })
}

exports.postAddCustomer =(req, res, next) => {
    let n = req.body.CustomerName;
    let e = req.body.CustomerEmail;
    const customer = new Customer(n, e);
    customer.save()
    // res.render('addCustomer', {
    res.redirect('customers'
    )

}

exports.postUpdateCustomer = (req, res, next) => {
    let id = req.body.CustomerID;
    let n = req.body.CustomerName;
    let e = req.body.CustomerEmail;

    const customer = new Customer( n, e);
    customer.updateCustomer( id ).then ((rows, fieldData) =>{
        res.redirect('customers');
    }).catch ( err => {
        console.log("What the hec ->");
        console.log(err)
    })
}
exports.updateCustomer = ( req, res, next ) => {
    let id = req.params.id;
    console.log( "Inside Edit .... id=" + id );
    // fetch all the records and find the idth one
    Customer.findById(id)
        .then ((rows, fieldData) =>{
            console.log("ROWS=>");
            res.render( 'UpdateCustomer', {
                title : `Update Customer: ${id} `,
                id : rows[0].id,
                from: 'customer',
                product: rows[0][0]
            })
        }).catch( err => {
        console.log( "DB Error=>");
        console.log( err );
    })
}

exports.getUpdateCustomer = (req, res, next) => {
    let id = req.params.id;
    console.log( "Inside Edit .... id=" + id );
    // fetch all the records and find the idth one
    Customer.findById(id)
        .then ((rows, fieldData) =>{
            console.log("ROWS=>");
            res.render( 'updateCustomer', {
                title : `Update Customer: ${id} `,
                id : rows[0].id,
                from: 'customer',
                customer: rows[0][0]
            })
        }).catch( err => {
        console.log( "DB Error=>");
        console.log( err );
    })
}

exports.postCustomer = (req, res, next) => {
    res.render('customers', {
        from: 'customers'
        // make sure this corresponds with the nav bar
    })
}

