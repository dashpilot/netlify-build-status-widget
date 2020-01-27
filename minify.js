const minify = require('@node-minify/core');
const cleanCSS = require('@node-minify/clean-css');
const babelMinify = require('@node-minify/babel-minify');

minify({
  compressor: cleanCSS,
  input: 'assets/netlify-build-status-widget.css',
  output: 'assets/netlify-build-status-widget.min.css',
  callback: function(err, min) {}
});

minify({
  compressor: babelMinify,
  input: 'assets/netlify-build-status-widget.js',
  output: 'assets/netlify-build-status-widget.min.js',
  callback: function(err, min) {}
});