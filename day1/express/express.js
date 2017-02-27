/**
 * Created by ripzery on 2/24/17.
 */
// express is a middleware handling about logging and parse http body
const express = require('express');
const app = express();

const logger = function (req, res, next) {
    console.log(req.method, req.url);
    next();
};

const helloWorld = function (req, res, next) {
    console.log("Host : " + req.hostname);
    res.send(req.query);
};

const goodbyeWorld = function (req, res, next) {
    res.send({
        text: "Goodbye",
        version: 1
    });

    next();
};


const test = function(req, res, next){
    console.log("Test");
};


// set environment variable
// app.set("euro", 1992);
// get environment variable
// app.get("euro");
// create middleware to handle GET, POST, PUT, DELETE request with specific path
// app.get(path, callback);
// app.post(path, callback);
// app.put(path, callback);
// app.delete(path, callback);

// create middleware to handle request for specific path
app.use(logger);
app.use('/hello', helloWorld);
app.use('/goodbye', goodbyeWorld);
app.use(test);
app.listen(3000);

console.log("Server is running at http://localhost:3000");
