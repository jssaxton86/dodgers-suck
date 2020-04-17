const router = require('express').Router();

router.get("/headers", (req, res, next) => {
    const asJson = {
        status: 200,
        headers: req.headers
    };

    res.setHeader("Content-Type", "application/json");
    res.status(200).send(asJson);
});

exports = module.exports = router;
