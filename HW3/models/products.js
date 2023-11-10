const db = require("../util/database");

module.exports = class Products {

    constructor(i, p, ts) {
        this.item = i;
        this.price = p;
        this.totalSales = ts;
    }

    static fetchAll(){
        return db.execute("SELECT i.itemID, i.itemName, IFNULL((SUM(i.itemPrice * s.quantity)),0) AS TotalSales " +
        "FROM item i JOIN sales s ON i.ItemID = s.ItemID " +
        "GROUP BY s.itemID " +
        "ORDER BY TotalSales DESC;")
    }

    saveProduct() {
        // console.log('insert into item (ItemName, ItemPrice)' +
        //     'values( ?, ?)',
        //     [this.item, this.price]
        // )
        // console.log("Flag Name");
        // console.log(this.item);
        // console.log("Flag Price");
        // console.log(this.price);
        return db.execute('insert into item (ItemName, ItemPrice)' +
            'values(?, ?)',
            [this.item, this.price]
        )
    }
}
