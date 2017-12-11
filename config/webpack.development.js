const path = require("path");
const	commonConfig = require("./webpack.common.js");

const	webpackMerge = require("webpack-merge");

module.exports = webpackMerge(commonConfig, {
	devtool : "inline-source-map",
  devServer: {
    historyApiFallback: false,
    hot: true,
    overlay: true,
    headers: {"Access-Control-Allow-Origin": "*"},
    contentBase: path.resolve("../dist"),
  },

	performance : {
		hints : false
	}
});
