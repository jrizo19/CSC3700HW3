const db = require("../util/database");

module.exports = class Sales {

    constructor(d, c, p, q, ts) {
        this.date = d;
        this.customer = c;
        this.product = p;
        this.quantity = q;
        this.totalSales = ts;
    }
    // ^^^^^^^^ make sure this matches the database
    static fetchAll(){
        return db.execute("SELECT s.SalesDate, c.CustomerName, i.ItemName as Product" +
            ", s.Quantity, SUM(i.ItemPrice * s.Quantity) as TotalSales " +
            "FROM customer c " +
            "JOIN sales s ON c.CustomerID = s.CustomerID " +
            "JOIN item i ON s.ItemID = i.ItemID " +
            "WHERE MONTH(s.SalesDate) = MONTH(CURDATE()) " +
            "GROUP BY i.ItemName " +
            "ORDER BY s.SalesDate")
    }


    // add the methods that will access the database for the Customer object
}