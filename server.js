/**
 * Created by Yauri on 10/13/13.
 */

var express = require("express"),
    app = express(),
    config = require("./config/config");

app.configure(function() {
    app.use(express.static(__dirname + "/public"));
    app.use(express.logger('dev'));
    app.use(express.cookieParser());
    app.use(express.bodyParser());
    app.use(express.session({
        secret: config.secret,
        cookie: {expires: new Date(Date.now() + 900000), httpOnly: true}
    }));
    app.set("views", __dirname + "/app/views");
    app.set('view options', { layout: false });
    app.set("view engine", "ejs");
});

app.configure('production', function(){
  app.use(express.errorHandler());
});

app.configure('development', function(){
  app.use(express.errorHandler({ dumpExceptions: true, showStack: true }));
});

//routes handler
require("./config/routes")(app);

var server = require('http').createServer(app);

server.listen(config.server.port, function() {
    console.log("Server starts on: " + config.server.protocol + "://" + config.server.host + ":" + config.server.port);
})
