const db = require("../util/database");

module.exports = class Products {

    constructor(i, ts) {
        this.item = i;
        this.totalSales = ts;
    }
    // ^^^^^^^^ make sure this matches the database
    static fetchAll(){
        return db.execute("SELECT i.itemname, SUM(i.itemprice * s.quantity) AS TotalSales " +
        "FROM item i JOIN sales s ON i.ItemID = s.ItemID " +
        "GROUP BY s.itemid " +
        "ORDER BY TotalSales DESC;")
    }
}
// add the methods that will access the database for the product object
