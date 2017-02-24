/**
 * Created by ripzery on 2/24/17.
 */

function prefix(pre){
    return function fileHandler(err, data) {
        console.log(pre + " " + data);
    }
}
const say = prefix("Say:");
const shout = prefix("Shout:");

const fs = require('fs');
fs.readFile('hello.txt', say);
fs.readFile('hello.txt', shout);