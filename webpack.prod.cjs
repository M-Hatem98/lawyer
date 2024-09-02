// WebPack Constants
const path = require("path");

// Plugins
const TerserPlugin = require("terser-webpack-plugin");
const ImageMinimizerPlugin = require("image-minimizer-webpack-plugin");
const CopyPlugin = require("copy-webpack-plugin");

// Paths
const src = './src';
const dist = './dist';

module.exports = {
  mode: "production",
  entry: path.resolve(__dirname, src + "/js/app.js"),
  output: {
    path: path.resolve(__dirname, dist),
    filename: "js/bundle.min.js"
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: ["babel-loader"],
      }
    ]
  },
  optimization: {
    concatenateModules: true,
    minimize: true,
    minimizer: [
      new TerserPlugin({
      terserOptions: {
        compress: {
          drop_console: true,
          ecma: 2015
        },
        format: {
          comments: false,
        }
      }
    }),
      new ImageMinimizerPlugin({
        loader: true,
        minimizer: {
          implementation: ImageMinimizerPlugin.imageminMinify,
          options: {
            plugins: [
              "imagemin-gifsicle",
              "imagemin-mozjpeg",
              "imagemin-pngquant",
              "imagemin-svgo",
            ],
          },
        },
        generator: [
          {
            type: "asset",
            implementation: ImageMinimizerPlugin.imageminGenerate,
            options: {
              plugins: ["imagemin-webp"],
            },
          },
        ],
      })
    ]
  },
  plugins: [
    new CopyPlugin({
      patterns: [
        {
          from: src + '/img',
          to: 'img'
        },
        {
        from : src + '/views/pages/contact',
        to : 'pages/contact'
        },
      ],
    })
  ]
};
