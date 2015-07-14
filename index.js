"use strict";

require('babel/register');
var app = require('./src/serverKoa');

app.init().catch(function (err) {
  console.error(err.stack);
  process.exit(1);
});