'use strict'
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  // file for webpack to watch
  entry: './src/index.js',

  // where to output the bundled js
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js',
    publicPath: '/',
  },

  // loaders or compilers
  module: {
    rules: [
      {
        test: /\.js$|\.jsx$/,
        exclude: [
          path.resolve(__dirname, 'node_modules')
        ],
        loader: 'babel-loader',
        query: {
          presets: ['es2015', 'react'],
        }
      },
      {
        test: /\.(s*)css$/,
        use: ['style-loader', 'css-loader', 'sass-loader']
      },
      {
        test: /\.jpeg$|\.gif$|\.png$|\.svg$|\.woff$|\.ttf$|\.wav$|\.mp3$|\.jpg$/,
        loader: 'file-loader',
        query: {
          name: 'assets/img/[name].[ext]'
        },
      },
    ],
  },
  devServer: {
    historyApiFallback: true,
  },
  performance: {
   hints: process.env.NODE_ENV === 'production' ? "warning" : false
},
  plugins: [new HtmlWebpackPlugin({ template: './src/index.html', filename: 'index.html' })],
};
