const redis = require('redis');
const Promise = require("bluebird");
Promise.promisifyAll(redis);

const config = require('config');
const client = redis.createClient({
    host: config.redis.host,
    port: config.redis.port
});

exports = module.exports = client;