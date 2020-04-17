const router = require('express').Router();
const { S3 } = require("lib/service/aws");

router.get("/idol/:idol", (req, res, next) => {
    S3.getImage(req.params.idol).pipe(res);    
});

exports = module.exports = router;
