const path = require("path");
const VueLoaderPlugin = require("vue-loader/lib/plugin");
const HTMLWebpackPlugin = require("html-webpack-plugin");
const { ModuleFederationPlugin } = require("webpack").container;
const deps = require("./package.json").dependencies;
module.exports = {
  devtool: false,
  entry: "./src/main.js",
  mode: "development",
  devServer: {
    port: 3001,
    contentBase: path.join(__dirname, "dist"),
  },
  module: {
    rules: [
      {
        test: /\.(ttf|eot|woff|woff2)$/,
        loader: 'file-loader',
        options: {
          name: 'fonts/[name].[ext]'
        }
      },
      {
        test: /\.(css)$/,
        use: ["style-loader", "css-loader"],
        // exclude: /node_modules/,
      },
      {
        test: /\.(styl)$/,
        use: ["style-loader", "css-loader", "stylus-loader"],
        // exclude: /node_modules/,
      },
      {
        test: /\.js$/,
        loader: "babel-loader",
        exclude: /node_modules/,
      },
      {
        test: /\.vue$/,
        loader: "vue-loader",
      },
    ],
  },
  plugins: [
    // 请确保引入这个插件！
    new VueLoaderPlugin(),
    new HTMLWebpackPlugin({
      template: path.resolve(__dirname, "./public/index.html"),
    }),
    new ModuleFederationPlugin({
      name: "app2",
      remotes: {
        app1: "app1@http://localhost:3000/remoteEntry.js",
      },
      shared: {
        // ...deps,
        // "host-vue": { // can be referenced by import "my-vue"
        //   import: "vue", // the "vue" package will be used a provided and fallback module
        //   shareKey: "shared-vue", // under this name the shared module will be placed in the share scope
        //   shareScope: "default", // share scope with this name will be used
        //   singleton: true, // only a single version of the shared module is allowed
        //   strictVersion: true, // don't use shared version when version isn't valid. Singleton or modules without fallback will throw, otherwise fallback is used
        //   version: deps.vue, // the version of the shared module
        //   requiredVersion: deps.vue // the required version of the shared module
        // }
      },
    }),
  ],
};
