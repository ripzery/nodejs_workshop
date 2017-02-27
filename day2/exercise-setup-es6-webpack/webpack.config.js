/**
 * Created by ripzery on 2/27/17.
 */
var path = require('path');
module.exports = {
    devtool: 'eval-source-map',
    entry: path.resolve('src/index.js'),
    output: {
        filename: 'bundle.js',
        path: path.resolve('dist'),
        publicPath: '/dist/',
    },
    devServer: {
        port: 3000
    },
    module: {
        loaders: [
            {
                test: /\.js$/,
                loader: 'babel-loader',
            },
            {
                test: /\.css$/,
                loader: 'style-loader!css-loader'
            }
        ]
    }
};