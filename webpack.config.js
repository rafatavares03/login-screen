const path = require("path");
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = {
  mode: "development",
  entry: './src/index.js',
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, './dist'),
  },

  plugins: [
    new MiniCssExtractPlugin({
      filename: "style.css",
    })
  ],

  module: {
    rules: [
      {
        test: /\.css$/,
        use: [
          MiniCssExtractPlugin.loader,
          'css-loader',
          'postcss-loader'
        ]
      }
    ]
  },

  devServer: {
    static: {
      directory: path.join(__dirname, 'dist'),
      watch: true,
    },
    port: 9000,
    open: true
  }
}