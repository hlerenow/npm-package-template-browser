// @ts-nocheck
var merge = require('webpack-merge');
var baseConfig = require('./webpack.base');
module.exports = merge(baseConfig, {
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                loader: 'babel-loader',
                query: {
                    plugins: ['istanbul']
                }
            }
        ]
    }
});
