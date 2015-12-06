module.exports = {
  entry: './src/embed.js',

  output: {
    path: __dirname,
    filename: '[name].js'
  },

  resolve: {
    root: __dirname + '/src',
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
