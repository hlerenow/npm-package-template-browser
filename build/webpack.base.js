// @ts-nocheck
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const webpack = require('webpack');
const utils = require('./utils');
const packager = require(utils.resolve('../package.json'));
const entries = utils.getEntry(utils.resolve('../src/**/index.ts'));
const chalk = require('chalk');
const Log = console.log;

Log(chalk.hex('#3aca1b').bold('[入口文件]:'));
Object.keys(entries).forEach(key => {
    Log(`    ${chalk.red(key)}: ${chalk.green(entries[key])}`);
});

module.exports = {
    mode: 'development',
    entry: entries,
    output: {
        path: utils.resolve('../dist'),
        filename: '[name].js',
        libraryTarget: 'umd',
        globalObject: "typeof self !== 'undefined' ? self : this"
    },
    module: {
        rules: [
            {
                test: /\.tsx?$/,
                use: 'ts-loader',
                exclude: /node_modules/
            },
            {
                enforce: 'pre',
                test: /\.js$/,
                exclude: /node_modules/,
                loader: 'eslint-loader'
            },
            {
                test: /\.js$/,
                exclude: /node_modules/,
                loader: 'babel-loader'
            }
        ]
    },
    resolve: {
        extensions: [ '.tsx', '.ts', '.js' ]
    },
    plugins: [
        new CleanWebpackPlugin(),
        new webpack.DefinePlugin({
            'process.env': {
                _VERSION_: `"${packager.version}"`
            }
        })
    ]
};
