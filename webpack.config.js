const path = require('path');
const sassPaths = ['./style'];
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const extractCssPlugin = new ExtractTextPlugin('css/[name].css');
const NodemonPlugin = require('nodemon-webpack-plugin'); // Ding

module.exports = {


  entry: ['./js/index.js','./style/index.scss','./js/location.js'],

  output: {
    path: path.resolve(__dirname, 'dist'),
    publicPath: '/dist/',
    filename: 'bundle.js'
  },
  mode: 'development',
  module: {
    rules: [  {
      test: /\.(eot|ttf|woff|woff2|svg)$/,
      include: [path.resolve('./img'),path.resolve('./font')],
      loader: 'file-loader',
      options: {
          name: 'static/img/[name].[ext]'
      }
  },{
    test: /\.(png|jpe?g|gif)$/i,
    include: [path.resolve('./img'),path.resolve('./font')],
    loader: 'file-loader',
    options: {
        name: 'static/img/[name].[ext]'
    }
}, {
        test: /\.scss$/,
        use: extractCssPlugin.extract({
            use: [
             {
                loader: 'css-loader'
               
            }, {
                loader: 'postcss-loader'
            },
            {
                loader: 'fast-sass-loader',
                options: {
                    includePaths: sassPaths
                }
            }]
        })
    }
      ]
    },
    plugins: [
            extractCssPlugin,
            new NodemonPlugin()
     ]
};