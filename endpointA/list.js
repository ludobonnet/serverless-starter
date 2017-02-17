'use strict';

var lib = require('../lib');

module.exports.handler = (event, context, callback) => {
  var response = 'Your Serverless function ran successfully !';
  return callback(null, lib.lambdaProxyResponse(200, response));
};
