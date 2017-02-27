/**
 * Created by ripzery on 2/27/17.
 */

// Colorful log
let trace = require('tracer').colorConsole({level: 'info'});
trace.info('This is info!!!');
trace.warn('This is warning!!!');
trace.error('This is error!!!');