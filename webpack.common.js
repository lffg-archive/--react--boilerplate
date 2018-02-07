const webpack = require('webpack');

module.exports = {
  entry: {
    bundle: './src/index.js'
  },
  output: {
    filename: '[name].js',
    path: __dirname + '/public'
  },
  resolve: {
    extensions: [ '.js', '.jsx' ]
  },
  module: {
    loaders: [{
      test: /.js[x]?$/,
      loader: 'babel-loader',
      exclude: /node_modules/,
      query: {
        presets: [ 'env', 'react' ],
      }
    }]
  }
};
