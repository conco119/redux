module.exports = {
  entry: './app/index.js',
  output: {
    filename: './public/bundle.js'
  },
  module: {
    loaders: [
      {
        loader: 'babel-loader',
        query: {
          presets: ['react','es2015','stage-0']
        },
        test: /\.jsx?$/,
        exclude: /node_modules/
      }
    ]
  }
}
