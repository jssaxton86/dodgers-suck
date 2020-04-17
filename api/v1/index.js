const express = require('express');

const routes = [];
routes.push(require('./headers'));
routes.push(require('./pokemon'));

const router = express.Router();

routes.forEach( route => {
    router.use(route);
});

exports = module.exports = router;