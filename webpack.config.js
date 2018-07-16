const webpack = require('webpack')
const path = require('path')

const config = {
  entry: './client/src/index.js',
  output: {
    path: path.resolve(__dirname, './client/public'),
    filename: 'output.js'
  },
  resolve: {
    extensions: ['.js', '.jsx', '.json', '.scss', '.css', '.jpeg', '.jpg', '.gif', '.png'],
    alias: {
      images: path.resolve(__dirname, '/client/src/images')
    }
  },
  module: {
    rules: [
      {
        test: /\.js$/, // files ending with js
        exclude: /node-modules/,
        loader: 'babel-loader'
      },
      {
        test: /\.jsx$/, // files ending with js
        exclude: /node-modules/,
        loader: 'babel-loader'
      }
    ]
  }
}

module.exports = config
