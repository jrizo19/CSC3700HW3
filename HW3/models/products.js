const db = require("../util/database");

module.exports = class Products {

    constructor(p, ts) {
        this.product = p;
        this.totalSales = ts;
    }
    // ^^^^^^^^ make sure this matches the database
    static fetchALL(){
        return db.execute(" this is where the query will go for the join with items and sales")
    }
}
// add the methods that will access the database for the product object
