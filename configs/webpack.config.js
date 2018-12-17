const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const package = require('../package.json');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const webpack = require('webpack');

module.exports = {
  entry: './app.js',
  context: path.resolve(__dirname, '../src'),
  output: {
    filename: '[name].js',
    path: path.resolve(__dirname, '../public')
  },

  mode: 'development',

  module: {
    rules: [
      // {
      //   enforce: 'pre',
      //   test: /\.js$/,
      //   exclude: /node_modules/,
      //   loader: 'eslint-loader',
      // },
      {
        test: /\.js$/,
        exclude: /(node_modules)/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env', '@babel/preset-react'],
            plugins: [
              '@babel/plugin-proposal-class-properties',
            ]
          }
        }
      },
      {
        test: /\s?.css$/,
        use: [
          MiniCssExtractPlugin.loader,
          {loader: "css-loader"},
          {loader: "sass-loader"}
        ]
      }
    ]
  },

  plugins: [
    new HtmlWebpackPlugin({
      title: package.name,
      template: './index.html',
      version: package.version
    }),
    new MiniCssExtractPlugin({filename: 'styles.css'}),
    new webpack.ProvidePlugin({
      React: 'react',
      Component: ['react', 'Component']
    })
  ],

  devServer: {
    publicPath: '/',
    port: 5000
  },

  optimization: {
    splitChunks: {
      chunks: 'all'
    }
  }
};
