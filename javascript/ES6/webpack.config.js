const path = require('path');

module.exports = {
  entry: './module_import.js',
  output: {
    path: path.resolve(__dirname, ''),
    filename: 'module_bundle.js'
  },
  mode: 'development'
};