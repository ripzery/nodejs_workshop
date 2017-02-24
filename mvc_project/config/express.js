/**
 * Created by ripzery on 2/24/17.
 */

const express = require('express');
const indexRoute = require('../app/routes/index.routes');

module.exports = function () {
    const app = express();
    indexRoute(app);
    return app;
};
