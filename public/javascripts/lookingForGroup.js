var app = angular.module("lookingForGroup", []);
app.controller('mainController', ['$scope','$http','$interval','$window', function($scope, $http, $interval, $window){

  this.search = "";
  this.activeGroup = {};
  this.queryActive = false;
  this.activateQuery = activateQuery;
  this.deactivateQuery = deactivateQuery;
  this.changeSearch = changeSearch;

  function activateQuery(index){
    this.queryActive = true;
    this.activeGroup = index;
  }

  function deactivateQuery(){
    this.queryActive = false;
    this.search = "";
    this.activeGroup = {};
  }

  function changeSearch(activity){
    this.search = activity.title;
  }
}]);
