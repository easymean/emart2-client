const { merge } = require("webpack-merge");
const common = require("./webpack.config.js");

module.exports = merge(common, {
  mode: "development",
  devtool: "eval-source-map",
  devServer: {
    hot: true,
    compress: false,
    historyApiFallback: true,
    host: "localhost",
    port: 3000,
    contentBase: path.join(__dirname, "dist"),
  },
});
