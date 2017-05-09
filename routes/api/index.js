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
         res.send(JSON.stringify(result));
        }else{
          res.send("oops, db error");
        }
        db.close();
      });
    }
  });
});

router.get('/addGroup/:type/:title/:location', function(req,res,next){

  var newType = req.params.type;
  var newTitle = req.params.title;
  var newLocation = req.params.location;
  var mongoClient = mongodb.MongoClient;
  var url = 'mongodb://localhost:27017/lookingforgroup';

  mongoClient.connect(url, function(err, db){
    if(err){
      console.log('unable to connect to server db', err);
    }else{
      console.log('connection established');

      db.collection('groups').insertOne({
        "gid" : "0",
        "type": newType,
        "title": newTitle,
        "location": newLocation
        }, function(err, result) {
          console.log("Inserted a document into db");
        });
    }
  });
  res.status(200).send("Update Complete");
  db.close();
});

module.exports = router;
