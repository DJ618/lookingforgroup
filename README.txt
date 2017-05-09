-------------------------------------------------------------------------------
Developer Notes:

Environment:
MEAN stack:
  Mongodb, Express, Angular(with jade), NodeJS
Developer Tools:
  Atom text editor, google chrome browswer, powershell command line, windows10

{Database query results with empty database}
If your db is empty, ie. has no documents, when attempting to request
/grouplist, the user will be directed to /index instead.
-------------------------------------------------------------------------------

-------------------------------------------------------------------------------
Front End Use:
-------------------------------------------------------------------------------
www./sitename/...

{/}
main page - will go to index.html

{/groupList}
Will show a html header list of every active groups

{/api}
Will tell the user to contact the developer for more info.

{/api/getGroups}
will return an array of information for each active group.

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
