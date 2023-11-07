const db = require("../util/database");

module.exports = class Products {

    constructor(i, ts) {
        this.item = i;
        this.totalSales = ts;
    }

    static fetchAll(){
        return db.execute("SELECT i.itemID, i.itemName, SUM(i.itemPrice * s.quantity) AS TotalSales " +
        "FROM item i JOIN sales s ON i.ItemID = s.ItemID " +
        "GROUP BY s.itemID " +
        "ORDER BY TotalSales DESC;")
    }
}
// add the methods that will access the database for the product object
