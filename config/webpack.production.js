const commonConfig = require("./webpack.common.js");
const webpack      = require("webpack");

const webpackMerge = require("webpack-merge");

module.exports = webpackMerge(commonConfig, {
	devtool : "source-map",

	plugins : [
		new webpack.optimize.CommonsChunkPlugin({
			name : "vendor",
			minChunks : Infinity,
			filename : "vendor.bundle.js"
		}),

    /* Here we should use some minifier like Uglify or Babili */

		new webpack.optimize.OccurrenceOrderPlugin()
	],
  performance : {
    hints : "warning"
  }
});
