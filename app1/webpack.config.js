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
    port: 3000,
    contentBase: path.join(__dirname, "dist"),
  },
  module: {
    rules: [
      {
        test: /\.(css|styl)$/,
        use: ["style-loader", "css-loader", "stylus-loader"],
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
      // 提供给其他服务加载的文件
      filename: "remoteEntry.js",
      // 唯一ID，用于标记当前服务
      name: "app1",
      library: { type: "var", name: "app1" },
      // 需要暴露的模块，使用时通过 `${name}/${expose}` 引入
      exposes: {
        "./Header": "./src/components/Header.vue",
        "./App": "./src/App.vue",
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
