exports = module.exports = (app) => {
    const middleware = require("./middleware");

    const keys = Object.keys(middleware);
    for( const key of keys ){
        const mw = middleware[key];
        mw(app);
    }
}