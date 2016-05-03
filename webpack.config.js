var MeteorImportsPlugin = require('meteor-imports-webpack-plugin');
var path = require('path')

module.exports = {
    entry: './client/index.js',
    output: {
      path: './client-build',
      filename: 'bundle.js'
    },
    module: {
      loaders: [
        {
          test: /\.js$/,
          loader: 'babel',
          include: [path.resolve('client')],
          query: {
            presets: [ 'es2015', 'react']
          }
        }
      ]
    },
    plugins: [
      new MeteorImportsPlugin({
        ROOT_URL: 'http://localhost:8080/',
        DDP_DEFAULT_CONNECTION_URL: 'http://localhost:3000/',
        PUBLIC_SETTINGS: {},
        meteorFolder: 'meteor-server',
        meteorEnv: {},
        exclude: ['ecmascript']
      })
    ]
};
