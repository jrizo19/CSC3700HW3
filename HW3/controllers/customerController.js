const Customer = require("../models/customers");
exports.getCustomer = (req, res) => {
    Customer.fetchAll()
        .then((rows) =>{
            res.render('customers',{
                title: "All Customers",
                from: 'customers',
                customer: rows[0]
        })
    })
}

exports.getAddCustomer = (req, res) => {
    res.render('addCustomer', {
        from: 'customers',
        title: 'Add Customer'
    })
}

exports.postAddCustomer =(req, res) => {
    let n = req.body.CustomerName;
    let e = req.body.CustomerEmail;
    const customer = new Customer(n, e);
    customer.save()
    res.redirect('customers'
    )

}

exports.postUpdateCustomer = (req, res) => {
    let id = req.body.CustomerID;
    let n = req.body.CustomerName;
    let e = req.body.CustomerEmail;

    const customer = new Customer( n, e);
    customer.updateCustomer( id ).then (() =>{
        res.redirect('customers');
    }).catch ( err => {
        console.log("What the heck ->");
        console.log(err)
    })
}
exports.updateCustomer = (req, res) => {
    let id = req.params.id;
    Customer.findById(id)
        .then ((rows) =>{
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

exports.getUpdateCustomer = (req, res) => {
    let id = req.params.id;
    Customer.findById(id)
        .then ((rows) =>{
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

exports.postCustomer = (req, res) => {
    res.render('customers', {
        from: 'customers'
    })
}

