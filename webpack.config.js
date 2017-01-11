var path = require('path');

module.exports = {
  context: __dirname,
  entry: __dirname + '/index.js',
  target: 'web',
  output: {
    path: __dirname + '/dist/',
    filename: 'alert.js',
    library: 'ReactReduxAlert',
    libraryTarget: 'umd'
  },
  resolve: {
    modules: [
      path.resolve(__dirname),
      'node_modules'
    ]
  },
  module: {
    rules: [{
      test: /\.js?$/,
      loader: 'babel-loader',
      include: [
        path.resolve(__dirname)
      ]
    }]
  },
  externals: {
    'react': {
      commonjs: "react",
      commonjs2: "react",
      amd: "react",
      root: "React"
    }
  }
}
