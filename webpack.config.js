var path = require('path');
var webpack = require('webpack');

module.exports = {
  devtool: 'eval',
  entry: [
    'webpack-dev-server/client?http://localhost:3000',
    'webpack/hot/only-dev-server',
    './src/index'
  ],
  output: {
    path: './',
    filename: 'bundle.js'
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin()
  ],
  module: {
    loaders: [
      {
        test: /\.js$/,
        exclude: /(node_modules)/,
        loaders: ['react-hot', 'babel'],
        include: path.join(__dirname, 'src')
      }, {
        test: /\.scss/,
        loader: 'style!css!autoprefixer!sass?outputStyle=expanded'
      }, {
        test: /\.css$/,
        exclude: [/\.raw\.css$/, /\.useable\.css$/, /node_module/],
        loader: 'style!css!autoprefixer'
      }, {
        test: /\.useable\.css$/,
        loader: 'style/useable!raw!autoprefixer'
      }, {
        test: /\.raw\.css$/,
        loader: 'style!raw!autoprefixer'
      }]
  }
};
