/**
 * Created by ripzery on 2/27/17.
 */
const colors = require('colors');

// Colorful log
let trace = require('tracer').colorConsole({
    level: 'info',
});
// trace.info('This is info!!!');
// trace.warn('This is warning!!!');
// trace.error('This is error!!!');

/* Arrow function */
const add = (a, b) => a + b;
const area = (r) => {
    const PI = 3.1416;
    return PI * r * r
};

trace.info(add(1, 2));
trace.info(area(3));