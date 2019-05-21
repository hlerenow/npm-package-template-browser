const merge = require('webpack-merge');
const baseConfig = require('./webpack.base');
const UglifyJsPlugin = require('uglifyjs-webpack-plugin');
const utils = require('./utils');

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
    const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;
    module.exports.plugins.push(new BundleAnalyzerPlugin());
}
