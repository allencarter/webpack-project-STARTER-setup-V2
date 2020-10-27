const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    entry: ['babel-polyfill', './src/js/index.js'],
    output: {
      filename: 'bundle.js',
      path: path.resolve(__dirname, 'dist/js'),
    },
    devServer: {

      contentBase: './dist',
 
    },
    plugins: [
      new HtmlWebpackPlugin({
        title: 'Forkify Training App',
        filename: 'index.html',
        template: './src/index.html'
      })
    ],
    module: {
        rules: [
          {
            test: /\.s[ac]ss$/i,
            use: [
              // Creates `style` nodes from JS strings
              'style-loader',
              // Translates CSS into CommonJS
              'css-loader',
              // Compiles Sass to CSS
              'sass-loader',
            ],
          },
          {
            test: /\.m?js$/,
            exclude: /(node_modules|bower_components)/,
            use: {
              loader: 'babel-loader',
              options: {
                presets: ['@babel/preset-env']
              }
            }
          }
        ],
      },
  };