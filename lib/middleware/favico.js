exports = module.exports = (app) => {
    app.get('/favicon.ico', (req, res) => res.status(204));
};

exports.priority = module.exports.priority = 10;