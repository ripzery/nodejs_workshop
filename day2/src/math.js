/**
 * Created by ripzery on 2/27/17.
 */

/* Named export */
const add = (a, b) => a + b;
const PI = 3.1416;
const volume = 3500;
const area = (r) => {
    return PI * r * r
};

export {
    add,
    PI,
    volume,
    area
}