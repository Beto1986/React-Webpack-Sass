const ReactRefreshWebpackPlugin = require("@pmmmwh/react-refresh-webpack-plugin");
const { HotModuleReplacementPlugin } = require("webpack");
const { merge } = require("webpack-merge");
const common = require("./webpack.common");

/** @type {import('webpack').Configuration} */
const devConfig = {
  mode: "development",
  // devServer: {
  //   port: 3000,
  //   contentBase: "../dist",
  //   open: "chrome", //No olviden cambiar esta opcion por su navegador preferido
  //   hot: true
  // },
  devServer: {
    port: 3000,
    static: "./",
    hot: true
  },
  target: "web",
  plugins: [new HotModuleReplacementPlugin(), new ReactRefreshWebpackPlugin()],
  devtool: "eval-source-map"
};

module.exports = merge(common, devConfig);
