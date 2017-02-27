/**
 * Created by ripzery on 2/24/17.
 */

// Closure is function which contain environment of the parent

function parent(){
    const x = 1;
    function child(){
        console.log(x);
    }
    child();
}

// parent();

// Binding by reference is mean x variable
// var is 
function parent2(){
    let x = 1;

    function child(){
        console.log(x);

        function kid(){
            var u = 99;
        }
        kid();
        console.log(u);
    }
    x = 2;
    return child;
}

const childFn = parent2();
childFn();
// const kid = child();
// kid();