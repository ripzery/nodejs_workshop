/**
 * Created by ripzery on 2/24/17.
 */
const express = require('./config/express');
const app = express();
app.listen(3000);
console.log('Server running at http://localhost:3000');

module.exports = app;