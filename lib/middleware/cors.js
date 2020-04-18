exports = module.exports = (app) => {
    app.use("*", (req, res, next) => {
        res.set("access-control-allow-origin", "*");
        next()
    });    
};     

exports.priority = module.exports.priority = 0;