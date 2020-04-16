/**
 * COPYRIGHT NOBODY !!! Or somebody, I am not sure?
 * Dodgers are actually a fairly good team, but they haven't won the
 * World Series in a while !!!
 */

const http = require('http');
const express = require('express');
const bodyParser = require('body-parser');

const config = require("config");

const app = express();

app.use(bodyParser.urlencoded({extended:true}));
app.use(bodyParser.json());

app.get("/headers", (req, res, next) => {
    const asJson = {
        status: 200,
        headers: req.headers
    };

    res.setHeader("Content-Type", "application/json");
    res.status(200).send(asJson);
});

app.use("*", (req, res, next) => {
    // make new error object later to extend error with status code
    const error = new Error("Page not found with path: ", req.baseUrl ? req.baseUrl : "/");
    error.code = 404;

    next(error);
});

const server = app.listen(config.server.port, function(){
    console.log(`Server listening on port: ${config.server.port}`);
});

app.use( (err, req, res, next) => {
    const status = err && err.status ? err.status : 500;
    const message = err && err.message ? err.message : "Server encountered an error.";

    res.setHeader("Content-Type", "application/json");
    res.send({
        status: status,
        message: message
    });
});