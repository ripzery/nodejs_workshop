/**
 * Created by ripzery on 2/24/17.
 */
// express is a middleware handling about logging and parse http body
const connect = require('connect');
const app = connect();

const logger = function (req, res, next) {
    console.log(req.method, req.url);
    next();
};

const helloWorld = function (req, res, next) {
    res.setHeader('Content-Type', 'text/plain');
    res.end('Hello World');
};

app.use(logger);
app.use(helloWorld);
app.listen(3000);

console.log("Server is running at http://localhost:3000");
