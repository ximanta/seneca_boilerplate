'use strict';

var util = require('util');
var express = require('express');
var router = express.Router();

/**
 * Hello Controller
 */
module.exports = function (router) {
  
  /**
   * GET
   *http://localhost:8000/starter/v1/hello
   */
  router.get('/', function (req, res, next) {
    // Log to child logger
    req.log.info('GET /hello requested');

    // Add cache control header
    res.cacheControl({ maxAge: 300 });

    res.json({
      "message": "Hello"
    });
  });

};