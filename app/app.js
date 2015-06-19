'use strict';

// Declare app level module which depends on views, and components
var app = angular.module("mainApp", ['ngRoute']);
app.config(function($routeProvider){
  $routeProvider
      .when('/', {
        templateUrl: 'pages/home.html'
      })
      .when('/education',{
        templateUrl: 'pages/education.html'
      })
      .when('/skills', {
        templateUrl:"pages/skills.html"
      })
      .when('/contacts', {
        templateUrl:"pages/contacts.html"
      })
      .otherwise({
        redirectTo:'/'
      });
});
