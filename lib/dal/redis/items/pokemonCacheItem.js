const redis = require("lib/data/redis");
const RedisItem = require("./redisItem");

class PokemonCacheItem extends RedisItem{
    
    get(key){
        return redis.getAsync(this.buildKey(key))
        .then( JSON.parse );
    }

    delete(key){
        return redis.delAsync(this.buildKey(key));
    }

    set(key, json){
        json = JSON.stringify(json);
        return redis.setAsync(this.buildKey(key), json);
    }
}

exports = module.exports = PokemonCacheItem;