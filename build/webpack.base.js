const path = require('path');
const utils = require('./utils');
const webpack = require('webpack');
const package = require(utils.resolve('../package.json'));
// const chalk = require('chalk').default;
// const Log = console.log;
const entries = utils.getEntry(utils.resolve('../src/**/index.ts'));

// Object.keys(entries).forEach(key => {
//   Log(`    ${chalk.red(key)}: ${chalk.green(entries[key])}`);
// });

module.exports = {
  mode: 'development',
  entry: entries,
  module: {
    rules: [
      {
        test: /\.[t|j]s$/, exclude: /node_modules/, loader: "babel-loader"
      }
    ],
  },
  resolve: {
    extensions: ['.tsx', '.ts', '.js'],
  },
  output: {
    filename: '[name].js',
    libraryTarget: 'umd',
    globalObject: "typeof self !== 'undefined' ? self : this",
    path: path.resolve(__dirname, '../dist'),
    publicPath: './'
  },
  plugins: [
    new webpack.DefinePlugin({
      'process.env': {
        _VERSION_: `"${package.version}"`
      }
    })
  ]
};