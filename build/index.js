const webpack = require("webpack")
const config = require("./webpack.dev")
const webpackDevMiddleware = require('webpack-dev-middleware');
const express = require('express');


const compiler = webpack(config);

const app = express();
// 告诉 express 使用 webpack-dev-middleware，
// 以及将 webpack.config.js 配置文件作为基础配置
app.use(webpackDevMiddleware(compiler, {
  publicPath: config.output.publicPath
}));

// 将文件 serve 到 port 3000。
app.listen(3000, function () {
  console.log('server listening on port http://localhost:3000 !\n');
});
