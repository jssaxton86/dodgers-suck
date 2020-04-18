exports = module.exports = (app) => {
    app.use("*", (req, res, next) => {
        // make new error object later to extend error with status code
        const error = new Error("Page not found with path: " + req.baseUrl)
        error.code = 404;
    
        next(error);
    });    
}

exports.priority = module.exports.priority = 1;