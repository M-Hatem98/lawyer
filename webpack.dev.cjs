// WebPack Constants
const path = require("path");

// Paths
const src = './src';
const dist = './dist';

module.exports = {
  mode: "development",
  entry: path.resolve(__dirname, src + "/js/app.js"),
  output: {
    path: path.resolve(__dirname, dist + "/js"),
    filename: "bundle.min.js"
  },
  devtool: 'source-map',
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: ["babel-loader"]
      },
      {
        test: /\.js$/,
        use: ["source-map-loader"],
        enforce: "pre"
      }
    ]
  }
};

