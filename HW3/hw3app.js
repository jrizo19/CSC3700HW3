const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const path = require("path");
const http = require("http");

app.set('view engine', 'pug');
app.set('views', 'views');

const dataRoutes = require('./routes/dataRoutes')

const db = require("./util/database");

// db.execute( "select * from customer") Test For Database connection Successful
//     .then( result => {
//         console.log( "Results=");
//         console.log( result );
//     })
//     .catch( err => {
//         console.log( "DB ERR:"); console.log( err );
//     })

app.use(bodyParser.urlencoded({extended: false})); // middleware for body
app.use(express.static( path.join(__dirname, 'public')));
app.use(dataRoutes.routes)

app.get('*', function(req, res){ // page not found
    res.render( 'pageNotFound', {
        title:"Page Not Found!",
        subtitle:"Surely this is your fault, not mine...",
    });
})

let port = 1030;
const server = http.createServer(app);
server.listen( port );
console.log( `Listening on http://localhost:${port}`);