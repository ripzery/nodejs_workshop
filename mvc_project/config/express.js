/**
 * Created by ripzery on 2/24/17.
 */

const express = require('express');
const morgan = require('morgan');
const bodyParser = require('body-parser');
const compression = require('compression');
const indexRoute = require('../app/routes/index.routes');

module.exports = function () {
    const app = express();
    if (process.env.NODE_ENV === 'development') {
        app.use(morgan('dev'));
    } else {
        app.use(compression());
    }

    app.use(bodyParser.urlencoded({
        extended: true
    }));
    app.use(bodyParser.json());
    indexRoute(app);
    return app;
};
