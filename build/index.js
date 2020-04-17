const webpack = require("webpack")
const config = require("./webpack.dev")

const compiler = webpack(config)
compiler.run((err, stat) => {
  if (err) throw err
  console.log(stat.toString({
    colors: true
  }))
})