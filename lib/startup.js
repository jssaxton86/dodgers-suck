function getMidddlewareArray(){
    const middleware = require("./middleware");

    const keys = Object.keys(middleware);
    const mws = [];
    for( const key of keys ){
        mws.push(middleware[key]);
    }

    return mws;
}

exports.preRouteMiddleware = module.exports.preRouteMiddleware = (app) => {
    const mws = getMidddlewareArray().filter( a => a.priority === 0);
    mws.forEach( mw => mw(app) );
};

exports.postRouteMiddleware = module.exports.postRouteMiddleware = (app) => {
    const mws = getMidddlewareArray().filter( a => a.priority > 0).sort( (a,b) => a.priority - b.priority );
    mws.forEach( mw => mw(app) );
}
