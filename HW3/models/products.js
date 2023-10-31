const dp = require("../util/database");

module.exports = class Products {

    constructor(p, ts) {
        this.product = p;
        this.totalSales = ts;
    }
    // ^^^^^^^^ make sure this matches the database
    // add the methods that will access the database for the product object
}