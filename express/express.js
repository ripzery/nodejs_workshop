/**
 * Created by ripzery on 2/24/17.
 */
// express is a middleware handling about logging and parse http body
const connect = require('connect');
const app = connect();

const helloWorld = app.use(function(req, res, next){
   res.setHeader('Content-Type', 'text/plain');
    res.end('Hello World');
});

app.listen(3000);
app.use(helloWorld);

console.log("Server is running at http://localhost:3000");
