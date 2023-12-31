const db = require("../util/database");

module.exports = class Customers {
    constructor(n, e, ts) {
        this.name = n;
        this.email = e;
        this.totalSales = ts;
    }
    save() {
        return db.execute('insert into customer (CustomerName, CustomerEmail)' +
        'values(?, ?)',
            [this.name, this.email]
        )
    }

    static fetchAll() {
        return db.execute("SELECT c.CustomerID, c.CustomerName, c.CustomerEmail, " +
            "IFNULL((SUM(i.ItemPrice * s.Quantity)),0) AS TotalSales " +
            "FROM customer c " +
            " left JOIN sales s  ON c.CustomerID = s.CustomerID " +
            " left JOIN item i ON s.ItemID = i.ItemID " +
            "GROUP BY c.CustomerName "+
            "ORDER BY TotalSales DESC" )
    }

    static findById( id ){
        return db.execute( "select * from customer where CustomerID = ?",
            [id] );
    }

    updateCustomer(id) {
        return db.execute('update customer set CustomerName = ?, CustomerEmail = ? where customer.CustomerID = ?',
            [this.name, this.email, id])
    }
}