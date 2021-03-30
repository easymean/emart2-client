const HtmlWebpackPlugin = require("html-webpack-plugin");
const path = require("path");

module.exports = {
  entry: "./src/index.tsx",
  devtool: "eval-source-map",
  resolve: {
    extensions: [".js", ".jsx", ".ts", ".tsx"],
    alias: {
      "@": path.resolve(__dirname, "src/"),
      "@asset": path.resolve(__dirname, "src/asset/"),
      "@component": path.resolve(__dirname, "src/component/"),
      "@container": path.resolve(__dirname, "src/container/"),
      "@view": path.resolve(__dirname, "src/view/"),
      "@module": path.resolve(__dirname, "src/module/"),
    },
  },
  module: {
    rules: [
      {
        loader: "babel-loader",
        test: /\.tsx?$/,
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
    filename: "bundle.js",
    path: path.join(__dirname + "dist"),
    publicPath: "/",
  },
  mode: "none",

  plugins: [
    new HtmlWebpackPlugin({
      template: "./src/index.html",
      path: path.resolve(__dirname, "./dist"),
      filename: "index.html",
    }),
  ],
};
