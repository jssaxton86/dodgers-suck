exports = module.exports = {
    server: {
        port: 80,
        threads: 4
    },
    redis: {
        host: "dummy-server",
        port: "dummy-port",
        keys: {
            default: "serv",
            pokemon: "pkmn"
        }
    },
    mongo:{
        host: "dummy-server",
        port: "dummy-port",
        database: "dummy-db",
        maxAttempts: 10,
        options: {}
    }
};