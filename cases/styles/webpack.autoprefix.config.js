var ExtractTextPlugin = require('extract-text-webpack-plugin')
const path = require('path')
module.exports = {
  context: path.join(__dirname, './src'),
  entry: './',
  module: {
    rules: [{
      test: /\.css$/,
      include: [
       path.join(__dirname, './src')
      ],
      use: ExtractTextPlugin.extract({
        fallback: 'style-loader',
        use: ['css-loader', 'autoprefixer-loader']
      })
    }]
  },
  output: {
      path: path.join(__dirname, './dist'),
      filename: '[name].bundle.[hash].js'
  },
  plugins: [
    new ExtractTextPlugin('[name].css')
  ]
};