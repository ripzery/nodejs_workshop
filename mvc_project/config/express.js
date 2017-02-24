/**
 * Created by ripzery on 2/24/17.
 */

const express = require('express');
const morgan = require('morgan');
const sass = require('node-sass-middleware');
const bodyParser = require('body-parser');
const compression = require('compression');
const indexRoute = require('../app/routes/index.routes');

module.exports = function () {
    const app = express();
    if (process.env.NODE_ENV === 'development') {
        app.use(morgan('dev'));
        console.log("In development mode...");
    } else {
        app.use(compression());
        console.log("In production mode...");
    }

    app.use(bodyParser.urlencoded({
        extended: true
    }));
    app.use(bodyParser.json());

    app.set("views", "./app/views");
    app.set("view engine", "pug");

    indexRoute(app);

    // use before express static public to compile first then response
    app.use(sass({
        src: './sass',
        dest: './public/css',
        outputStyle: 'compressed',
        prefix: '/css',
        indentedSyntax: true
    }));

    // Recommend to put in the most bottom of the file to improve speed
    app.use(express.static('./public'));
    return app;
};
