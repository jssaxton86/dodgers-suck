exports = module.exports = (app) => {
    app.use("*", (req, res, next) => {
        console.log(req.url, req.path);

        // make new error object later to extend error with status code
        const error = new Error("Page not found with path: " + req.baseUrl ? req.baseUrl : "/");
        error.code = 404;
    
        next(error);
    });    
}

