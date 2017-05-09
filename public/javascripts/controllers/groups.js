var app = angular.module("lookingForGroup"); //this will go retreive the module rather than create it
app.controller("groups_list_controller", groupsListController); //declare new controller, and the function to call

//controller methods
function groupsListController(){
  var vm = this;
  vm.data = server_groups_data;

  //adding a group
  vm.addGroup = addGroup;
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


//static server side data
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

//static dynamic test - this is what the db id returning as of now thru the api
//var server_groups_data = [{"_id":"59110ffbbb8e9d3d347edbc1","gid":"2","type":"Console","title":"lets play halo","location":"seattle"}]

//dynamic server side data
//var server_groups_data = [];
var xhttp = new XMLHttpRequest();
  xhttp.onreadystatechange = function(){
    if (this.readyState == 4 && this.status == 200) {
      server_groups_data = JSON.parse(xhttp.responseText);
      console.log(server_groups_data);
    }
  };

xhttp.open("GET", " http://localhost:3000/api/getGroups ", true);
xhttp.send();
