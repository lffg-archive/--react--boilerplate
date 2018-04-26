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
    rules: [{
      test: /\.js[x]?$/,
      exclude: /node_modules/,
      use: [{
        loader: 'babel-loader',
        query: {
          presets: [ 'env', 'react' ]
        }
      }]
    }, {
      test: /\.(?:scss|sass)$/,
      use: [{
        loader: 'style-loader'
      }, {
        loader: 'css-loader'
      }, {
        loader: 'sass-loader',
        options: {
          outputStyle: 'compressed'
        }
      }, {
        loader: 'postcss-loader',
        options: {
          plugins: function() {
            return [
              require('autoprefixer')
            ];
          }
        }
      }]
    }, {
      test: /\.(?:woff|woff2|ttf|eot|svg|png|jpg|jpeg|gif)$/,
      use: [{
        loader: 'file'
      }]
    }]
  }
};
