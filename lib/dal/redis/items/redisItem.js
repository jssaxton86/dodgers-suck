const config = require('config');

class RedisItem{
    constructor(keyPrefix='', basePrefix=config.redis.keys.default){
        this.basePrefix = basePrefix;
        this.keyPrefix = keyPrefix;
    }  

    buildKey(key){
        return this.basePrefix + ":" + this.keyPrefix + ":" + key;
    }
}

exports = module.exports = RedisItem;