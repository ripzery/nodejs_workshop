/**
 * Created by ripzery on 2/24/17.
 */

const express = require('express');
const morgan = require('morgan');
const sass = require('node-sass-middleware');
const validator = require('express-validator');
const bodyParser = require('body-parser');
const compression = require('compression');
const indexRoute = require('../app/routes/index.routes');
const userRoute = require('../app/routes/user.routes');

module.exports = function () {
    const app = express();
    if (process.env.NODE_ENV === 'development') {
        app.use(morgan('dev'));
        console.log("In development mode...");
    } else {
        app.use(compression());
        console.log("In production mode...");
    }

    // set json parser
    app.use(bodyParser.urlencoded({
        extended: true
    }));
    app.use(bodyParser.json());
    app.use(validator());
    // set view engine
    app.set("views", "./app/views");
    app.set("view engine", "pug");

    // define route
    indexRoute(app);
    userRoute(app);

    let outputStyle = process.env.NODE_ENV === 'development' ? 'expanded' : 'compressed';

    // use before express static public to compile first then response
    app.use(sass({
        src: './sass',
        dest: './public/css',
        outputStyle,
        prefix: '/css',
        indentedSyntax: true
    }));

    // Recommend to put in the most bottom of the file to improve speed
    app.use(express.static('./public'));
    return app;
};
