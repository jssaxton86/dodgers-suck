const router = require('express').Router();
const { Pokemon } = require("lib/service/pokemon");

router.get("/pokemon", (req, res, next) => {
    Pokemon.getPokemon(req.params.number).pipe(res);    
});

exports = module.exports = router;
