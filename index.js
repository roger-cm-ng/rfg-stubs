#!/usr/bin/env node
'use strict';
var argv = require('optimist').argv;
var filendir = require('filendir');
var pathType = require('path-type');
var controllerJs = require('./templates/controller-js');
var indexHtml = require('./templates/index-html');
var indexJs = require('./templates/index-js');
var styleScss = require('./templates/style-scss');

if (argv.g === true || argv.g === undefined || argv.g === null) {
  console.log('Game name is mandatory');
  return;
}

pathType.dir(argv.g).then(function () {
	console.log('Directoy name clashed, try another name');
}).catch(function() {
  console.log('Generating folder and files...');

  var dirPathName = './' + argv.g;

  filendir.ws(dirPathName + '/images');
  filendir.ws(dirPathName + '/controller.js', controllerJs());
  filendir.ws(dirPathName + '/index.html', indexHtml());
  filendir.ws(dirPathName + '/index.js', indexJs());
  filendir.ws(dirPathName + '/style.scss', styleScss());
  console.log('Files generated');
});
