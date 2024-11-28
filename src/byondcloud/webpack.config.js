const path = require("path");
const { VueLoaderPlugin } = require("vue-loader");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const webpack = require("webpack");

const BASE_URL = "http://localhost:8082/";

module.exports = {
  entry: "./src/main.js",
  output: {
    filename: "js/byondcloud.js",
    libraryTarget: "system",
    path: path.resolve(__dirname, "dist"),
    publicPath: BASE_URL,
  },
  module: {
    rules: [
      {
        test: /\.vue$/,
        loader: "vue-loader",
      },
      {
        test: /\.js$/,
        loader: "babel-loader",
        exclude: /node_modules/,
      },
      {
        test: /\.css$/,
        use: ["vue-style-loader", "css-loader"],
      },
    ],
  },
  plugins: [
    new VueLoaderPlugin(),
    new HtmlWebpackPlugin({
      template: "./public/index.html",
      templateParameters: {
        BASE_URL: BASE_URL,
      },
    }),
    new webpack.DefinePlugin({
      "process.env": {
        BASE_URL: JSON.stringify(BASE_URL),
        NODE_ENV: JSON.stringify(process.env.NODE_ENV || "development"),
      },
    }),
  ],
  devServer: {
    port: 8080,
    historyApiFallback: true,
    headers: {
      "Access-Control-Allow-Origin": "*",
      "Access-Control-Allow-Methods": "GET, POST, PUT, DELETE, PATCH, OPTIONS",
      "Access-Control-Allow-Headers": "X-Requested-With, content-type, Authorization"
    },
    allowedHosts: 'all'
  },
  externals: ["vue", "vue-router", /^@opusxenta\/.+$/],
};
