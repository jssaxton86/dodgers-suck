/**
 * Contains function that connects to MongoDB. 
 * Function automatically will attempt to retry. Delay time is exponential.
 * Max attempts is configured in the configuration file.
 */
const config = require('config');
const Promise = require('bluebird');

const mongoose = require('mongoose');
mongoose.Promise = Promise;

function connect(retry=0){
    return mongoose.connect(config.mongo.host+":"+config.mongo.port+"/"+config.mongo.database, config.mongo.options)
    .then( () => {
        console.log("Connected to mongo. Initializing schemas ...");
        require('./schemas'); // require this so that the schemas defined in this folder get set in mongoose for import
        return Promise.resolve();
    })
    .catch( err => {
        console.log(`Mongoose error on connect attempt ${retry}: ${err.message}`);
        if (++retry <= config.mongo.maxAttempts) return Promise.delay( retry * retry * 1000).then( () => connect(retry));
        return Promise.reject(err);
    });
}

// no client to export, use mongoose !!!
exports = module.exports = connect;