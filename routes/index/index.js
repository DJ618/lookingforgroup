var express = require('express');
var router = express.Router();
var mongodb = require('mongodb');

/* GET home page. */
 router.get('/', function(req, res, next) {
   console.log("got request for index");
   res.render('index');
 });
 
module.exports = router;
