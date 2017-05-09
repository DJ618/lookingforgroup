var express = require('express');
var router = express.Router();
var mongodb = require('mongodb');

/* GET home page. */
// router.get('/', function(req, res, next) {
//   console.log("got request for grouplist");
//   res.render('grouplist');
// });

router.get('/', function(req,res,next){
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
          res.send('No documents found');
        }
        db.close();
      });
    }
  });
});

module.exports = router;
