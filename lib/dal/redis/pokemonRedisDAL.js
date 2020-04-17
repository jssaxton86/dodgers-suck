const { PokemonCacheItem } = require("./items");
const config = require('config');
const cache = new PokemonCacheItem(config.redis.keys.pokemon);

class PokemonRedisDAL{

    static get(pokemon){
        return cache.get(pokemon);
    }

    static set(pokemon, json){
        return cache.set(pokemon, json);
    }

    static delete(pokemon){
        return cache.delete(pokemon);
    }
    
}

exports = module.exports = PokemonRedisDAL;