/**
 * Created by Yauri on 10/13/13.
 */
var config = {};

config.server = {
    protocol: "http",
    host: "127.0.0.1",
    port: 1337
}

config.mongo = {
    host: "127.0.0.1",
    port: "27017",
    dbname:  (process.env.NODE_ENV == "production") ? "databasedev" : "databaseprod",
    getConString: function(){
        return "mongodb://" + this.host + ":" + this.port + "/" + this.dbname;
    }
}

config.secret = "thisismysecretkeyforencryption";


module.exports = config;