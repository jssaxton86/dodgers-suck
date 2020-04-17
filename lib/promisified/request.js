const Promise = require("bluebird");

const request = Promise.promisify(require("request"), {multiArgs: true});
Promise.promisifyAll(request, {multiArgs: true});

exports = module.exports = request;