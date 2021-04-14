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
      "@module": path.resolve(__dirname, "src/module/"),
      "@model": path.resolve(__dirname, "src/model/"),
    },
  },

  module: {
    rules: [
      {
        test: /\.tsx?$/,
        loader: "babel-loader",
        exclude: /node_modules/,
      },
      {
        test: /\.(woff|woff2|eot|ttf|otf)$/,
        use: [
          {
            loader: "url-loader",
            options: {
              limit: 10000,
              fallback: "file-loader",
              name: "fonts/[name].[ext]",
            },
          },
        ],
      },
    ],
  },
  output: {
    filename: "main.[fullhash].js",
    path: path.resolve(__dirname, "./dist"),
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
