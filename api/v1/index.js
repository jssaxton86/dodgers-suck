const express = require('express');

const routes = [];
routes.push(require('./headers'));
routes.push(require('./pokemon'));
routes.push(require('./s3'));

const router = express.Router();

routes.forEach( route => {
    router.use(route);
});

exports = module.exports = router;