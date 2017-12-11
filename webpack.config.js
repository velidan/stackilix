const NODE_ENV = process.env.NODE_ENV || "development";

module.exports = require(`./config/webpack.${NODE_ENV}.js`);