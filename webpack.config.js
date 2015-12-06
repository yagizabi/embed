module.exports = {
  entry: './index.js',

  output: {
    path: __dirname,
    filename: '[name].js'
  },

  resolve: {
    root: __dirname,
  },

  module: {
    loaders: [
      {
        test: /\.js$/,
        loader: 'babel-loader',
        query: {
          presets: 'es2015',
        },
      }
    ]
  }
}
