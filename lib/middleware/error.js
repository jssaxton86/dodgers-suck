exports = module.exports = (app) => {
    app.use( (err, req, res, next) => {
        const status = err && err.status ? err.status : 500;
        const message = err && err.message ? err.message : "Server encountered an error.";

        res.setHeader("Content-Type", "application/json");
        res.send({
            status: status,
            message: message
        });
    });
};