const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");

module.exports = {
  entry: ["@babel/polyfill", "./src/index.tsx"],
  resolve: {
    extensions: [".js", ".jsx", ".ts", ".tsx"],
    alias: {
      "@": path.resolve(__dirname, "src/"),
      "@asset": path.resolve(__dirname, "src/asset/"),
      "@component": path.resolve(__dirname, "src/component/"),
      "@container": path.resolve(__dirname, "src/container/"),
      "@view": path.resolve(__dirname, "src/view/"),
      "@model": path.resolve(__dirname, "src/model/"),
      "@api": path.resolve(__dirname, "src/api/"),
    },
  },

  module: {
    rules: [
      {
        test: /\.tsx?$/,
        loader: "babel-loader",
        exclude: /node_modules/,
      },
    ],
  },
  output: {
    filename: "main.[fullhash].js",
    path: path.join(__dirname, "dist"),
    publicPath: "/",
  },

  plugins: [
    new HtmlWebpackPlugin({
      template: "./src/index.html",
      path: path.resolve(__dirname, "./dist"),
      filename: "index.html",
    }),
    new CleanWebpackPlugin(),
  ],
};
