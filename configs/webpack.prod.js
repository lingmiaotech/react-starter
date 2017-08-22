var path = require('path');
var webpack = require('webpack');

var devFlagPlugin = new webpack.DefinePlugin({
  __DEV__: JSON.stringify(JSON.parse(process.env.DEBUG || 'false'))
});

module.exports = {
  entry: {
    bundle: './client/js/index.js',
    vendor: [
      'react',
      'react-redux',
      'react-router',
      'react-dom',
      'react-fastclick',
      'redux',
      'react-router-redux',
      'babel-polyfill'
    ]
  },
  output: {
    path: path.join(__dirname, 'dist'),
    publicPath: '/static/js/',
    filename: '[name].js'
  },
  plugins: [
    new webpack.optimize.CommonsChunkPlugin({name: 'vendor', filename: 'vendor.js', minChunks: Infinity}),
    new webpack.optimize.UglifyJsPlugin({compress: {warnings: false}}),
    new webpack.optimize.OccurenceOrderPlugin(),
    new webpack.NoErrorsPlugin(),
    new webpack.DefinePlugin({
      __DEV__: process.env.NODE_ENV == 'development',
      'process.env.NODE_ENV': '"' + process.env.NODE_ENV + '"'
    })
  ],
  module: {
    loaders: [
      {
        test: /\.js$/,
        loaders: ['babel'],
        include: [
          path.resolve(__dirname, "client/js"),
          path.resolve(__dirname, "node_modules/react-proxy")
        ]
      },
      {
        test: /\.css$/,
        loader: 'style-loader!css-loader'
      },
      {
        test: /.(gif|png|woff(2)?|eot|ttf|svg)(\?[a-z0-9=\.]+)?$/,
        loader: 'url-loader?limit=100000'
      }
    ]
  },
  resolve: {
    extensions: ['', '.js', '.json']
  }
};
