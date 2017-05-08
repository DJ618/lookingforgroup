var app = angular.module("lookingForGroup"); //this will go retreive the module rather than create it
app.controller("activity_list_controller", activityListController); //declare new controller, and the function to call

//controller methods
function activityListController(){
  var vm = this;
  vm.data = server_activity_data;
}

//server side data
var server_activity_data =
[
  {
    "title":"PC",
    "imageurl": "./images/pc.ico"
  },
  {
    "title":"Console",
    "imageurl": "./images/console.ico"
  },
  {
    "title": "IRL",
    "imageurl": "./images/group.png"
  }
];
