// @ts-nocheck
var merge = require('webpack-merge');
var baseConfig = require('./webpack.base');
var UglifyJsPlugin = require('uglifyjs-webpack-plugin');
var utils = require('./utils');
module.exports = merge(baseConfig, {
    output: {
        path: utils.resolve('../dist')
    },
    devtool: 'source-map',
    plugins: [
        new UglifyJsPlugin({
            sourceMap: true
        })
    ]
});
if (process.env.npm_config_report) {
    var BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;
    module.exports.plugins.push(new BundleAnalyzerPlugin());
}
