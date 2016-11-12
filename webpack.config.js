'use strict';

module.exports = {
  entry: __dirname + '/src',

  output: {
    path:       __dirname + '/dist',
    filename:   'koala-translate.js'
  },

  module: {

    loaders: [{
      test:    /\.js$/,
      loader:  "uglify!babel?presets[]=es2015"
    }]

  }
}
