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
    location.reload();
  }

  //api call to get the active groups
  function getGroups(){
    vm.data = [];
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
