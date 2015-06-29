'use strict';

// Declare app level module which depends on views, and components
var app = angular.module("mainApp", ['ngRoute', 'angularRipple']);
app.controller("HighLightController", function($scope, $route){
    $scope.$route = $route;


});
app.config(function($routeProvider){
  $routeProvider
      .when('/home', {
        templateUrl: './pages/home.html',
          activePage: 'home'

      })
      .when('/education',{
        templateUrl: './pages/education.html',
          activePage: 'education'
      })
      .when('/skills', {
        templateUrl:"./pages/skills.html",
          activePage: 'skills'
      })

      .otherwise({
        redirectTo:'/home'
      });
});
function HighLightController ($scope, $route){

}
