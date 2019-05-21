const CleanWebpackPlugin = require('clean-webpack-plugin');
const webpack = require('webpack');
const utils = require('./utils');
const packager = require(utils.resolve('../package.json'));
const entries = utils.getEntry(utils.resolve('../src/**/index.js'));
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
        globalObject: 'this'
    },
    module: {
        rules: [
            {
                enforce: 'pre',
                test: /\.js$/,
                exclude: /node_modules/,
                loader: 'eslint-loader',
                options: {
                    // 这里的配置项参数将会被传递到 eslint 的 CLIEngine
                    formatter: require('eslint-friendly-formatter') // 指定错误报告的格式规范
                }
            },
            {
                test: /\.js$/,
                exclude: /node_modules/,
                loader: 'babel-loader'
            }
        ]
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
