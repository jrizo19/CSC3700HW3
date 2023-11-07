const db = require("../util/database");

module.exports = class Customers {

    constructor(n, e, ts) {
        this.
        this.name = n;
        this.email = e;
        this.totalSales = ts;
    }

    // ^^^^^^^^ make sure this matches the database

    static fetchAll() {
        return db.execute("SELECT c.CustomerID, c.CustomerName, c.CustomerEmail, " +
            "IFNULL((SUM(i.ItemPrice * s.Quantity)),0) AS TotalSales " +
            "FROM customer c \n" +
            "JOIN sales s  ON c.CustomerID = s.CustomerID " +
            "JOIN item i ON s.ItemID = i.ItemID " +
            "GROUP BY c.CustomerName " +
            "ORDER BY TotalSales DESC")
    }

    static findById( id ){
        return db.execute( "select * from customers where id = ?",
            [id] );
    }

    updateCustomer(id) {
        return db.execute('update customer set CustomerName = ?, CustomerEmail = ? where id = ?',
            [this.CustomerName, this.CustomerEmail, id])
    }
}


// add the methods that will access the database for the Customer object

