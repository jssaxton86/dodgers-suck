const router = require('express').Router();
const { Pokemon } = require("lib/service/pokemon");

router.get("/pokemon", (req, res, next) => {
    Pokemon.getPokemon(req.query.number)
    .on( 'response', (res) => {
        delete res.headers['cache-control'];
    })
    .pipe(res)
});

exports = module.exports = router;
