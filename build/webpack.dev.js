const merge = require('webpack-merge');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const baseConfig = require('./webpack.base');
const utils = require('./utils');

module.exports = merge(baseConfig, {
    entry: {
        test: utils.resolve('../srcStatic/index.js')
    },
    devtool: 'source-map',
    devServer: {
        historyApiFallback: false,
        noInfo: true,
        overlay: true,
        publicPath: '/',
        disableHostCheck: true,
        host: '0.0.0.0',
        contentBase: './dist-dev'
    },
    plugins: [
        new HtmlWebpackPlugin({
            // Also generate a test.html
            filename: 'index.html',
            template: 'template/static.html',
            chunks: ['test', 'index']
        })
    ]
});
