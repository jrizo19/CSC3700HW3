const db = require("../util/database");
const customers = require("../models/customers");
const products = require("../models/products");
const sales = require("../models/sales");


// May not need this
module.exports = class Home {

    static fetchAll(){
        return customers.fetchAll(), products.fetchAll(), sales.fetchAll();
    }
}