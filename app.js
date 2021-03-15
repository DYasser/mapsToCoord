'use strict';

const express = require("express"),
    bodyParser = require("body-parser"),
    app = express(),
    compression = require('compression'),
    helmet = require('helmet'),
    morgan = require("morgan"),
    cors = require("cors"),
    Router = require("./api/routes/")
require('./api/config/db-config')

//Testing the connection to the server, you can delete this when you push to a server since it is useless to console it there.
connection.query('SELECT 1', (err, result) => {
    console.log({ error: err, ok: result })
    if (err) {
        next(err)
    }
})

app.use(bodyParser.json()); // You need this if you ever need to read a json request.. do not remove this please.

//These next 2 lines are GOOD for production, but are not a necessity. read about them individually
app.use(compression()); //Compress all routes
app.use(helmet());


//middlewares
app.use(cors()); ///!\ For the love of God do not remove this. /!\ if you're clueless about cors read about it here : https://developer.mozilla.org/en-US/docs/Web/HTTP/CORS

app.use(morgan("dev")); // you can remove this for production

//This encodes the data coming in to a readable data, YOU NEED THIS.
app.use(bodyParser.urlencoded({
    extended: true
}));

//Calling route folders using CORS DO NOT REMOVE CORS.
app.use("/api", cors(), Router);

// Declaring what to do on an unknown error.
connection.on('error', async(err) => {
    console.log('there has been an error on the database connection side')
});

// error handler
app.use(function(err, req, res, next) {

    // set locals, only providing error in development
    res.locals.message = err.message;
    res.locals.error = req.app.get("env") === "dev" ? err : {};

    // render the error page
    res.status(err.status || 401);
    // render the error page
    if (err.status == '404' && err.html)
        return res.send(err.html).end();
    else res.json({
        message: err.message
    });
});

module.exports = app;

//This is here to handle all the uncaught promise rejections
process.on("unhandledRejection", error => {
    console.error("Uncaught Error", error);
});