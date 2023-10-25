const express = require("express");
const app = express();
app.set( 'view engine', 'pug'); // set engine
app.set( 'views', 'views'); // set views
const db = require("./util/database");
db.execute( "select * from customer")
    .then( result => {
        console.log( "Results=");
        console.log( result );
    })
    .catch( err => {
        console.log( "DB ERR:"); console.log( err );
    })