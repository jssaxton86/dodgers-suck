/**
 * COPYRIGHT NOBODY !!! Or somebody, I am not sure?
 * Dodgers are actually a fairly good team, but they haven't won the
 * World Series in a while !!!
 */

'use strict';

const express = require('express');
const bodyParser = require('body-parser');
const config = require('config');
const app = express();

function initializeDatabases(){
     require('lib/data/redis'); // This should initialize redis just by a require

     const connect = require('lib/data/mongo/connect');
     return connect();     
}

function initializeExpress(){
    app.use(bodyParser.urlencoded({extended:true}));
    app.use(bodyParser.json());

    // Initialize pre route middleware
    require('lib/startup').preRouteMiddleware(app);

    app.use('/api/v1', require('api/v1'));
    
    // Initialize middleware
    require('lib/startup').postRouteMiddleware(app);
    
    const server = app.listen(config.server.port, function(){
        console.log(`Server on ${process.pid} process listening on port: ${config.server.port}`);
    });

    return Promise.resolve(server);
}

function initialize(){
    return initializeDatabases()
    .then( () => initializeExpress() );
}

exports = module.exports = initialize;
