const dp = require("../util/database");

module.exports = class Sales {

    constructor(d, c, p, q, ts) {
        this.date = d;
        this.customer = c;
        this.product = p;
        this.quantity = q;
        this.totalSales = ts;
    }
    // ^^^^^^^^ make sure this matches the database
    // add the methods that will access the database for the Customer object
}