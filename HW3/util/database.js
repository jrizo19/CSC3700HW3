const mysql = require("mysql2");

const pool = mysql.createPool({
    host : '45.55.136.114',
    user : 'F2023_jrizo02',
    database : 'F2023_jrizo02',
    password: "GoliathHer0n!"
});

module.exports = pool.promise();