const path = require("path");
const { VueLoaderPlugin } = require("vue-loader");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");
const webpack = require("webpack"); // This line ensures the `webpack` object is defined

module.exports = {
  mode: "development", // Set mode to development or production
  entry: path.resolve(__dirname, "src/main.js"),
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "js/byondcloud.js",
    publicPath: "http://localhost:8082/",
    libraryTarget: "system", // Required for Single-SPA
  },
  resolve: {
    extensions: [".js", ".vue", ".json"],
    alias: {
      vue$: "vue/dist/vue.runtime.esm.js",
      "@": path.resolve(__dirname, "src"),
    },
  },
  module: {
    rules: [
      {
        test: /\.vue$/,
        loader: "vue-loader",
      },
      {
        test: /\.css$/,
        use: ["vue-style-loader", "css-loader"], // This order is important
      },
      {
        test: /\.scss$/,
        use: ["vue-style-loader", "css-loader", "sass-loader"], // Add this if using SCSS
      },
      {
        test: /\.(png|jpe?g|gif|svg)(\?.*)?$/,
        loader: "file-loader",
        options: {
          name: "assets/[name].[hash:8].[ext]",
        },
      },
    ],
  },  
  plugins: [
    new VueLoaderPlugin(),
    new HtmlWebpackPlugin({
      template: path.resolve(__dirname, "public/index.html"),
      inject: true,
    }),
    new CleanWebpackPlugin(),
    new webpack.DefinePlugin({
      BASE_URL: JSON.stringify("/"),
    }),
  ],
  devServer: {
    port: 8082,
    historyApiFallback: true,
    static: {
      directory: path.resolve(__dirname, "public"),
    },
    headers: {
        "Access-Control-Allow-Origin": "*", // Enable CORS
        "Access-Control-Allow-Methods": "GET, POST, PUT, DELETE, PATCH, OPTIONS",
        "Access-Control-Allow-Headers": "X-Requested-With, content-type, Authorization",
      },
      liveReload: true
  },
  externals: {
    vue: "Vue",
    "vue-router": "VueRouter", // Mark vue-router as external
  },
};
