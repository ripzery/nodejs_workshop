/**
 * Created by ripzery on 2/24/17.
 */

// Javascript is a first class function
// ตัวแปรเป็น function ได้

function myName() {
    console.log("Euro ");
}

function say(what){
    what();
}

// say(myName);


// function is able to return from the function
function say2() {
    return function myName() {
        console.log("Euro");
    }
}

say2()();