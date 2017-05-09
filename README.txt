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
