var express = require('express');
var router = express.Router();
var mongodb = require('mongodb');

router.get('/', function(req,res,next){
  res.send("Please contact developer for API and development information.")
});

router.get('/getGroups', function(req,res,next){
  var mongoClient = mongodb.MongoClient;
  var url = 'mongodb://localhost:27017/lookingforgroup';

  mongoClient.connect(url, function(err, db){
    if(err){
      console.log('unable to connect to server db', err);
    }else{
      console.log('connection established');

      var collection = db.collection('groups');

      collection.find({}).toArray(function(err, result){
        if(err){
          res.send(err);
        }else if(result.length){
         res.render('grouplist', {
           "grouplist" : result
         });
        }else{
          res.render('index');
        }
        db.close();
      });
    }
  });
});

module.exports = router;
