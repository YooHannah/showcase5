const path = require('path')

module.exports = {
  entry: path.join(__dirname, './src'),
  module: {
    rules: [
      {
        test: /\.js$/,
        include: path.join(__dirname, './src'),
        use: 'babel-loader'
      }
    ]
  },
  output: {
    path: path.join(__dirname, './dist'),
    filename: 'bundle.js'
  }
}