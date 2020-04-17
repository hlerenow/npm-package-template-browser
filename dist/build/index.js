var webpack = require("webpack");
var config = require("./webpack.dev");
var compiler = webpack(config);
compiler.run(function (err, stat) {
    if (err)
        throw err;
    console.log(stat.toString({
        colors: true
    }));
});
