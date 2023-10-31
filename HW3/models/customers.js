const db = require("../util/database");

module.exports = class Customers {

    constructor(n, e, ts) {
        this.name = t;
        this.email = e;
        this.totalSales = ts;
    }
    // ^^^^^^^^ make sure this matches the database

    static fetchAll(){
        return db.execute("SELECT c.CustomerName, c.CustomerEmail, " +
            "IFNULL((SUM(i.ItemPrice * s.Quantity)),0) AS TotalSales " +
            "FROM customer c \n" +
            "LEFT JOIN sales s  ON c.CustomerID = s.CustomerID " +
            "LEFT JOIN item i ON s.ItemID = s.ItemID " +
            "GROUP BY c.CustomerName " +
            "ORDER BY TotalSales DESC")
    }
}
// add the methods that will access the database for the Customer object

