var app = angular.module("lookingForGroup"); //this will go retreive the module rather than create it
//app.controller("groups_list_controller", groupsListController); //declare new controller, and the function to call
app.controller('groups_list_controller', ['$scope','$http','$interval','$window', function($scope, $http, $interval, $window){

//controller methods
  var vm = this;
  vm.data = [];

  vm.getGroups = getGroups;
  vm.addGroup = addGroup;
  vm.newType = "";
  vm.newTitle = "";
  vm.newLocation = "";

  function addGroup(){

    //static data
    //var newGroup = {"type":vm.newType, "title":vm.newTitle, "location": vm.newLocation};
    //vm.data.push(newGroup);

    //this will insert into db
    var groupdata = [];
    var config = {
      headers : {
          'Content-Type': 'application/json;',
          'Access-Control-Allow-Origin': "*"
      }
    }
    console.log("about to make api add group request");
    var getURL = "http://localhost:3000/api/addGroup/" + vm.newType.toString() + "/" + vm.newTitle.toString() + "/" + vm.newLocation.toString();
    $http.get(getURL, groupdata, config)
       .then(
           function(response){
             console.log("made successful api post request");
           },
           function(response){
             // failure callback
             window.alert("An error occured during your request");
           }
        );

    vm.newType = "";
    vm.newTitle = "";
    vm.newLocation = "";
  }

  //api call to get the active groups
  function getGroups(){
    var groupdata = [];

    var config = {
      headers : {
          'Content-Type': 'application/json;',
          'Access-Control-Allow-Origin': "*"
      }
    }
    console.log("about to make api request");
    var getURL = "http://localhost:3000/api/getGroups/" ;
    $http.get(getURL, groupdata, config)
       .then(
           function(response){
             console.log("made api request");
             console.log("response.data:");
             console.log(response.data);
             vm.data = response.data;
           },
           function(response){
             // failure callback
             window.alert("An error occured during your request");
           }
        );
  };
}]);

//static server side data
//var server_groups_data =
// [
//   {
//     "type":"PC",
//     "title": "League of Legends",
//     "location": "Online"
//   },
//   {
//     "type":"Console",
//     "title":"Call of Duty",
//     "location": "Seattle"
//   },
//   {
//     "type":"IRL",
//     "title": "Skateboarding",
//     "location": "Bellevue"
//   },
//   {
//     "type":"IRL",
//     "title": "Dodgeball",
//     "location": "Chicago"
//   },
//   {
//     "type":"IRL",
//     "title": "Motorcycle Ride",
//     "location": "San Diego"
//   },
//   {
//     "type":"IRL",
//     "title": "Soccer Game",
//     "location": "Mill Creek"
//   },
//   {
//     "type":"IRL",
//     "title": "Lan Party",
//     "location": "Lynnwood"
//   },
//   {
//     "type":"Console",
//     "title":"Halo",
//     "location": "Online"
//   },{
//     "type":"Console",
//     "title":"Mario",
//     "location": "LA"
//   },{
//     "type":"Console",
//     "title":"Tekken",
//     "location": "Online"
//   },{
//     "type":"Console",
//     "title":"Street Fighter and Mortal Kombat",
//     "location": "Florida Keys"
//   },{
//     "type":"Console",
//     "title":"Destiny party",
//     "location": "Seattle"
//   },{
//     "type":"Console",
//     "title":"Call of Duty zombies mode",
//     "location": "DC"
//   },
//   {
//     "type":"PC",
//     "title": "BF1 group lets roll!",
//     "location": "Online"
//   },
//   {
//     "type":"PC",
//     "title": "League of Legends group starting",
//     "location": "Online"
//   },
//   {
//     "type":"PC",
//     "title": "Rust",
//     "location": "Online"
//   },
//   {
//     "type":"PC",
//     "title": "Borderlands group",
//     "location": "Online"
//   },
//   {
//     "type":"PC",
//     "title": "Lan party!!! bring your own candy",
//     "location": "Bothell"
//   }
// ];
