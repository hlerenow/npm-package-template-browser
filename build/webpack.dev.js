const path = require('path');
const utils = require('./utils');
const chalk = require('chalk').default;
const Log = console.log;
const entries = utils.getEntry(utils.resolve('../src/**/index.ts'));
const package = require(utils.resolve('../package.json'));
const webpack = require('webpack');

Object.keys(entries).forEach(key => {
  // @ts-ignore
  Log(`    ${chalk.red(key)}: ${chalk.green(entries[key])}`);
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
    ],
  },
  resolve: {
    extensions: [ '.tsx', '.ts', '.js' ],
  },
  output: {
    filename: '[name].js',
    libraryTarget: 'umd',
    globalObject: "typeof self !== 'undefined' ? self : this",
    path: path.resolve(__dirname, '../dist'),
  },
  plugins: [
      new webpack.DefinePlugin({
          'process.env': {
              _VERSION_: `"${package.version}"`
          }
      })
  ]
};