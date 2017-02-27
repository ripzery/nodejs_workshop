/**
 * Created by ripzery on 2/24/17.
 */
const fs = require('fs');

// Asynchronous
// Event-driven or non-blocking io
fs.readFile('hello.txt', function(err, data){
    console.log(data.toString());
});

console.log("Run before");