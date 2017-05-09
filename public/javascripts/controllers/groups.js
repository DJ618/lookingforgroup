var app = angular.module("lookingForGroup"); //this will go retreive the module rather than create it
app.controller("groups_list_controller", groupsListController); //declare new controller, and the function to call

//controller methods
function groupsListController(){
  var vm = this;
  vm.data = server_groups_data;
  vm.addGroup = addGroup;

  //adding a group
  vm.newType = "";
  vm.newTitle = "";
  vm.newLocation = "";

  function addGroup(){
    var newGroup = {"type":vm.newType, "title":vm.newTitle, "location": vm.newLocation};
    vm.data.push(newGroup);

    //this will insert into db later

    if(vm.data.length > 500){
      return;
    }
    vm.newType = "";
    vm.newTitle = "";
    vm.newLocation = "";
  }
}

//server side data
var server_groups_data =
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




// var server_game_data;
// var xhttp = new XMLHttpRequest();
//   xhttp.open("GET", " http://localhost:8000/data/activities.json ", true);
//   xhttp.onreadystatechange = function(){
//     if (this.readyState == 4 && this.status == 200) {
//       server_game_data = xhttp.responseText;
//       console.log(server_game_data);
//     }
//   };
//
//   xhttp.send();
