-------------------------------------------------------------------------------
Developer Notes:

{Database query results with empty database}
If your db is empty, ie. has no documents, when attempting to request
/grouplist, the user will be directed to /index instead.
-------------------------------------------------------------------------------




-------------------------------------------------------------------------------
Database Commands:
-------------------------------------------------------------------------------
//start up a mongo db {advice: do this in its own console window}
mongod --dbpath D:\docs\Code_Junkie\repos\lookingforgroup\data

//invoke mongodb {advice: do this in its own console window}
mongo

//switch to the db you want to work on
use lookingforgroup

//grab everything
db.groups.find().pretty()

//insert into the db (note the array)
db.groups.insert([{"gid":"1",
                "title":"im looking for a group","location":"japan"}])

//remove a specific document (note there is not array)
db.groups.remove({"gid":"1",
                "title":"im looking for a group","location":"japan"})




-------------------------------------------------------------------------------
Server Commands:
-------------------------------------------------------------------------------
Go to the app's directory.
  If in linux:
    Start the app with: npm start
  If in Windows:
    Open up powershell with alt-f-release, then S,A
    Start the app with: npm start




-------------------------------------------------------------------------------
Functionality examples
-------------------------------------------------------------------------------

{How to query your database}

var mongoClient = mongodb.MongoClient;
var url = 'mongodb://localhost:27017/lookingforgroup';

var mongodb = require('mongodb');
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
          //do something with the found data here
       });
      }else{
        res.render('index');
      }
      db.close();
    });
  }
});





-------------------------------------------------------------------------------
Legacy Developer Notes
-------------------------------------------------------------------------------

{Original db init data}

server_groups_data =
[
  {
    "type":"PC",
    "title": "League of Legends",
    "location": "Online"
  },
  {
    "type":"Console",
    "title":"Call of Duty",
    "location": "Seattle"
  },
  {
    "type":"IRL",
    "title": "Skateboarding",
    "location": "Bellevue"
  },
  {
    "type":"IRL",
    "title": "Dodgeball",
    "location": "Chicago"
  },
  {
    "type":"IRL",
    "title": "Motorcycle Ride",
    "location": "San Diego"
  },
  {
    "type":"IRL",
    "title": "Soccer Game",
    "location": "Mill Creek"
  },
  {
    "type":"IRL",
    "title": "Lan Party",
    "location": "Lynnwood"
  },
  {
    "type":"Console",
    "title":"Halo",
    "location": "Online"
  },{
    "type":"Console",
    "title":"Mario",
    "location": "LA"
  },{
    "type":"Console",
    "title":"Tekken",
    "location": "Online"
  },{
    "type":"Console",
    "title":"Street Fighter and Mortal Kombat",
    "location": "Florida Keys"
  },{
    "type":"Console",
    "title":"Destiny party",
    "location": "Seattle"
  },{
    "type":"Console",
    "title":"Call of Duty zombies mode",
    "location": "DC"
  },
  {
    "type":"PC",
    "title": "BF1 group lets roll!",
    "location": "Online"
  },
  {
    "type":"PC",
    "title": "League of Legends group starting",
    "location": "Online"
  },
  {
    "type":"PC",
    "title": "Rust",
    "location": "Online"
  },
  {
    "type":"PC",
    "title": "Borderlands group",
    "location": "Online"
  },
  {
    "type":"PC",
    "title": "Lan party!!! bring your own candy",
    "location": "Bothell"
  }
];
