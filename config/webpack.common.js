const path = require("path");
const webpack = require("webpack");

const ForkCheckerPlugin = require("fork-ts-checker-webpack-plugin");
const ExtractTextPlugin = require("extract-text-webpack-plugin");
const HtmlWebpackPlugin = require("html-webpack-plugin");

const srcPath = path.resolve(__dirname, "../src");

const tsLoaders = process.env.NODE_ENV === "development"
  ? [
    {loader: path.resolve("./config/hot.js")},
    {loader: "ts-loader", options: {transpileOnly: true}}
  ]
  : [
    {loader: "ts-loader", options: {transpileOnly: true}}
  ];

module.exports = {
  entry: {
    main: `${srcPath}/index.ts`
  },
  output: {
    path: path.resolve(__dirname, "../dist"),
    publicPath: "/",
    filename: "[name].bundle.js"
  },
  resolve: {
    extensions: [".js", ".ts"],
    alias: {
      vue: "vue/dist/vue.js",
      core: `${srcPath}/core`,
      assets: `${srcPath}/assets`,
      modules: `${srcPath}/modules`,
      shared: `${srcPath}/shared`
    }
  },
  module: {
    rules: [
      {
        test: /\.ts$/,
        use: tsLoaders
      },
      {
        test: /.sass/,
        use: ExtractTextPlugin.extract({fallback: "style-loader",
          use: ["css-loader", "sass-loader"]
        })
      },
      {
        test: /\.(png|jpg|gif|svg)$/,
        loader: "file-loader",
        options: {
          name: "[name].[ext]?[hash]"
        }
      }
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: "./index.html"
    }),
    new ForkCheckerPlugin({tslint: true}),
    new ExtractTextPlugin("style.css"),
    new webpack.DefinePlugin({
      "process.env": {NODE_ENV: JSON.stringify(process.env.NODE_ENV)}
    })
  ]
};

