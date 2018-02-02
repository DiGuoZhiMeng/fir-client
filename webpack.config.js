const path = require('path')

module.exports = {
  entry: path.resolve(__dirname, 'src/entry.js'),
  output: {
    filename: "entry.js",
    path: path.resolve(__dirname, 'dist'),
  },
  devServer: {
    contentBase: __dirname,
  },
  module: {
    loaders: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: 'babel-loader',
      }
    ]
  },
  target: 'web',
  externals: {
    cc: 'cc',
  }
}