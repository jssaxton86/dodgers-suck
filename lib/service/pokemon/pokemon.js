const request = require("request");
const { PokemonRedisDAL } = require("lib/dal/redis");

// make this configurable later
const url = "https://pokeapi.co/api/v2/pokemon/";

function buildURL(number){
    return url + number;
}

// Returns as readable or a stream !!
exports.getPokemon = (number, writeStream) => {
    let toCache = number ? true : false;
    if (!number) number = Math.floor( Math.random() * 807 );
    // return request({ method: "get", url: buildURL(number) }); 

    PokemonRedisDAL.get(number)
    .then( data => {
        if (!data) {
            // Why am I even streaming this if I am storing each chunk in memory anyways? ...
            // I had a good idea at some time, I guess ??
            let build = '';

            request({ method: "get", url: buildURL(number) })
            .on('data', chunk => {
                build += chunk.toString();
            })
            .on( 'response', (res) => {
                if (!toCache) delete res.headers['cache-control'];
            })
            .on( 'end', () => {
                PokemonRedisDAL.set(number, build);
            })
            .pipe(writeStream);
        } else {
            writeStream.setHeader("Content-Type", "application/json");
            writeStream.write(data);
            writeStream.end();
        }
    });
}