/**
 * Created by ripzery on 2/27/17.
 */
// import {add, area, PI as PIE, volume} from './math';
import * as math from './math';
// Colorful log
let trace = require('tracer').colorConsole({
    level: 'info',
});

// trace.info(math.add(1, 2));
math.readFileSync('./hello.txt').then(data => {
    console.log(data);
    return data;
});
