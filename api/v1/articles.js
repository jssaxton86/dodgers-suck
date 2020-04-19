const router = require('express').Router();
const { ArticleDAL } = require('lib/dal/mongo');

router.put("/articles", (req, res, next) => {
    ArticleDAL.upsert(req.body.name || req.body.title, req.body.author, req.body.content)
    .then( () => {
        res.setHeader('Content-Type', 'text/plain');
        res.status(200).send("success");
    })
    .catch( next );
});

router.get("/articles", (req, res, next) => {
    ArticleDAL.getMostRecent(parseInt(req.query.num) || 1)
    .then( data => {
        res.setHeader('Content-Type', 'application/json');
        res.status(200).send(data);
    })
    .catch( next );
});

router.get("/articles/:article", (req, res, next) => {
    ArticleDAL.get(req.body.name)
    .then( data => {
        res.setHeader('Content-Type', 'application/json');
        res.status(200).send(data);
    })
    .catch( next );
});

router.delete("/articles/:article", (req, res, next) => {
    ArticleDAL.delete(req.params.article)
    .then( () => {
        res.status(204).end();
    })
    .catch( next );
});

exports = module.exports = router;
