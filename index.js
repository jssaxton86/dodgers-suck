/**
 * COPYRIGHT NOBODY !!! Or somebody, I am not sure?
 * Dodgers are actually a fairly good team, but they haven't won the
 * World Series in a while !!!
 */

'use strict';
process.env.NODE_PATH = __dirname;
require("module").Module._initPaths();

const cluster = require('cluster');
const config = require('config');
const os = require('os')

const cpuCount = config.server.threads || os.cpus().length;

if (cluster.isMaster){
    for (let i = 0; i < cpuCount; i++){
        cluster.fork();
    }
} else {
    require("worker")();
}

