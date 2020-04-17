/**
 * COPYRIGHT NOBODY !!! Or somebody, I am not sure?
 * Dodgers are actually a fairly good team, but they haven't won the
 * World Series in a while !!!
 */

'use strict';
process.env.NODE_PATH = __dirname;
require("module").Module._initPaths();

const http = require('http');
const express = require('express');
const bodyParser = require('body-parser');

const config = require("config");

const app = express();

app.use(bodyParser.urlencoded({extended:true}));
app.use(bodyParser.json());

app.use('/api/v1', require('api/v1'));

// Initialize middleware
require("lib/startup")(app);

const server = app.listen(config.server.port, function(){
    console.log(`Server listening on port: ${config.server.port}`);
});