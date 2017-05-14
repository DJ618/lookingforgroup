-------------------------------------------------------------------------------
_Developer Notes:_

Environment:
MEAN stack:
  Mongodb, Express, Angular(with jade), NodeJS
Developer Tools:
  Atom text editor, google chrome browswer, powershell command line, windows10


{Database query results with empty database}
If your db is empty, ie. has no documents, when attempting to request
/grouplist, the user will be directed to /index instead.

{Known Bugs and/or unwanted behavior}
If a new groups title ends with a ? character, inserting into the db
will fail and cause an error alert.

-------------------------------------------------------------------------------

-------------------------------------------------------------------------------
Front End Use:
-------------------------------------------------------------------------------
www./sitename/...

_{/}_
main page - will go to index.html

_{/groupList}_
Will show a html header list of every active groups

_{/api}_
Will tell the user to contact the developer for more info.

_{/api/getGroups}_
will return an array of information for each active group.

-------------------------------------------------------------------------------
Database Commands:
-------------------------------------------------------------------------------
//Change the destination IP for the http requests to your respective server.
//Change mongo port with --port #

_//kill mongo if port is used_
sudo killall -15 mongod

_//port forward_
sudo iptables -A PREROUTING -t nat -p tcp --dport 80 -j REDIRECT --to-port 8080

_//start up a mongo db {advice: do this in its own console window}_
mongod --dbpath D:\docs\Code_Junkie\repos\lookingforgroup\data

_//invoke mongodb {advice: do this in its own console window}_
mongo

_//switch to the db you want to work on_
use lookingforgroup

_//adding TTL trigger_
db.groups.createIndex({"lastModifiedDate": 1}, {expireAfterSeconds: 10})

_//drop index_
db.groups.dropIndex({"lastModifiedDate": 1}, {expireAfterSeconds: 10})

_//grab everything_
db.groups.find().pretty()

_//insert into the db (note the array)_
db.groups.insert([{"gid":"1",
                "title":"im looking for a group","location":"japan"}])

_//remove a specific document (note there is not array)_
db.groups.remove({"gid":"1",
                "title":"im looking for a group","location":"japan"})

_//drop database_
mongo <dbname> --eval "db.dropDatabase()"

-------------------------------------------------------------------------------
Server Commands:
-------------------------------------------------------------------------------
_//if npm start does not work, may need to install nodejs-legacy_
sudo apt-get install nodejs-legacy

Go to the app's directory.
  _If in linux:_
    Start the app with: npm start
  _If in Windows:_
    Open up powershell with alt-f-release, then S,A
    Start the app with: npm start

-------------------------------------------------------------------------------
Functionality examples
-------------------------------------------------------------------------------

_{How to query your database}_
'''javascript
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
