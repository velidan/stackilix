const path = require('path');
const webpack = require('webpack');
const ForkCheckerPlugin = require('fork-ts-checker-webpack-plugin');
const glob = require('glob');
const nodeExternals = require('webpack-node-externals');

const srcPath = path.resolve(__dirname, "../src");

module.exports = {
  entry: glob.sync('./src/**/*.test.ts'),
  output: {
    path: path.resolve(__dirname, '../dist'),
    publicPath: '/dist/',
    filename: 'tests.js'
  },
  resolve: {
    extensions: [".js", ".ts"],
    alias: {
      vue: "vue/dist/vue.js",
      core: `${srcPath}/core`,
      assets: `${srcPath}/assets`,
      modules: `${srcPath}/modules`
    }
  },
  externals: [nodeExternals()],
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        use: [
          {loader: 'ts-loader', options: {transpileOnly: true}}
        ]
      },
      {
        test: /\.css$/,
        use: [
          'vue-style-loader',
          'css-loader'
        ],
      },
      {
        test: /\.(png|jpg|gif|svg)$/,
        loader: 'file-loader',
        options: {
          name: '[name].[ext]?[hash]'
        }
      }
    ]
  },
  plugins: [
    new ForkCheckerPlugin({tslint: true}),
    new webpack.DefinePlugin({
      'process.env': {NODE_ENV: JSON.stringify(process.env.NODE_ENV)}
    })
  ],
  performance: {
    hints: false
  },
  devtool: '#eval-source-map'
};
