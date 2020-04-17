const request = require("request");

// make this configurable later
const url = "https://pokeapi.co/api/v2/pokemon/";

function buildURL(number){
    return url + number;
}

// Returns as readable
exports.getPokemon = (number) => {
    if (!number) number = Math.floor( Math.random() * 807 );
    return request({ method: "get", url: buildURL(number) });
}