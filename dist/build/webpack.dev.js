var path = require('path');
var utils = require('./utils');
var chalk = require('chalk');
var Log = console.log;
var entries = utils.getEntry(utils.resolve('../src/**/index.ts'));
var package = require(utils.resolve('../package.json'));
var webpack = require('webpack');
Object.keys(entries).forEach(function (key) {
    Log("    " + chalk.red(key) + ": " + chalk.green(entries[key]));
});
// const entry =  path.resolve(__dirname, '../src/app.ts')
module.exports = {
    mode: "development",
    entry: entries,
    module: {
        rules: [
            {
                test: /\.[t|j]s$/, exclude: /node_modules/, loader: "babel-loader"
            }
            // {
            //   test: /\.tsx?$/,
            //   use: 'ts-loader',
            //   exclude: /node_modules/,
            // },
        ],
    },
    resolve: {
        extensions: ['.tsx', '.ts', '.js'],
    },
    output: {
        filename: '[name].js',
        libraryTarget: 'umd',
        globalObject: "typeof self !== 'undefined' ? self : this",
        filename: '[name].js',
        path: path.resolve(__dirname, '../dist'),
    },
    resolve: {
        extensions: ['.tsx', '.ts', '.js']
    },
    plugins: [
        new webpack.DefinePlugin({
            'process.env': {
                _VERSION_: "\"" + package.version + "\""
            }
        })
    ]
};
