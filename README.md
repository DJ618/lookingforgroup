-------------------------------------------------------------------------------
**Developer Notes:**

**Environment:**
**MEAN stack:**<br/>
  Mongodb, Express, Angular(with jade), NodeJS
**Developer Tools:**<br/>
  Atom text editor, google chrome browser, powershell command line, windows10


**{Database query results with empty database}**<br/>
If your db is empty, ie. has no documents, when attempting to request
/grouplist, the user will be directed to /index instead.

**{Known Bugs and/or unwanted behavior}**<br/>
If a new groups title ends with a ? character, inserting into the db
will fail and cause an error alert.

-------------------------------------------------------------------------------

-------------------------------------------------------------------------------
Front End Use:
-------------------------------------------------------------------------------
www./sitename/...

**{/}**<br/>
Main page - will go to index.html

**{/groupList}**<br/>
Will show a html header list of every active groups

**{/api}**<br/>
Will tell the user to contact the developer for more info.

**{/api/getGroups}**<br/>
Will return an array of information for each active group.

-------------------------------------------------------------------------------
Database Commands:
-------------------------------------------------------------------------------
//Change the destination IP for the http requests to your respective server.
//Change mongo port with --port #

**//kill mongo if port is used**<br/>
sudo killall -15 mongod

**//port forward**<br/>
sudo iptables -A PREROUTING -t nat -p tcp --dport 80 -j REDIRECT --to-port 8080

**//start up a mongo db {advice: do this in its own console window}**<br/>
mongod --dbpath D:\docs\Code_Junkie\repos\lookingforgroup\data

**//invoke mongodb {advice: do this in its own console window}**<br/>
mongo

**//switch to the db you want to work on**<br/>
use lookingforgroup

**//adding TTL trigger**<br/>
db.groups.createIndex({"lastModifiedDate": 1}, {expireAfterSeconds: 10})

**//drop index**<br/>
db.groups.dropIndex({"lastModifiedDate": 1}, {expireAfterSeconds: 10})

**//grab everything**<br/>
db.groups.find().pretty()

**//insert into the db (note the array)**<br/>
db.groups.insert([{"gid":"1",
                "title":"im looking for a group","location":"japan"}])

**//remove a specific document (note there is not array)**<br/>
db.groups.remove({"gid":"1",
                "title":"im looking for a group","location":"japan"})

**//drop database**<br/>
mongo <dbname> --eval "db.dropDatabase()"

-------------------------------------------------------------------------------
Server Commands:
-------------------------------------------------------------------------------
**//if npm start does not work, may need to install nodejs-legacy**<br/>
sudo apt-get install nodejs-legacy

Go to the app's directory.<br/>
  **If in linux:**<br/>
    Start the app with: npm start<br/>
  **If in Windows:**<br/>
    Open up powershell with alt-f-release, then S,A<br/>
    Start the app with: npm start

-------------------------------------------------------------------------------
Functionality examples
-------------------------------------------------------------------------------

**{How to query your database}**<br/>
```javascript
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
```
