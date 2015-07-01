'use strict';

// Declare app level module which depends on views, and components
var app = angular.module("mainApp", ['ngRoute','angular-scroll-animate', 'angularRipple']);
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
          activePage: 'skills',
          controller: 'SkillsController'
      })

      .otherwise({
        redirectTo:'/home'
      });
});
app.controller('SkillsController', function($scope){
    $scope.skills = [{
        'name':'AngularJS',
        'imgUrl':'./pictures/skills-logo/Angular-logo.png'

    }, {
        'name':'Bower',
        'imgUrl':'./pictures/skills-logo/Bower-logo.png'
    },{
        'name':'HTML5',
        'imgUrl':'./pictures/skills-logo/HTML5-logo.png'

    },{
        'name':'JavaScript(EcmaScript5)'

    },{
        'name':'jQuery'

    },{
        'name':'Foundation'

    },{
        'name':'RequireJS'

    },{
        'name':'NPM'

    },{
        'name':'git'

    },{
        'name':'Adobe Photoshop'

    },{
        'name':'Node.JS'

    },{
        'name':'CSS'

    },{
        'name':'Java'

    },{
        'name':'SailsJS'

    },{
        'name':'D3(Data-Driven Documents)'

    },{
        'name':'Sass'
    },{
        'name':'Less'
    },{
        'name':'PHP5'
    }

    ]
    $scope.animateElementIn = function($el) {
        $el.removeClass('hidden');
        $el.addClass('animated pulse');
    };

    $scope.animateElementOut = function($el) {
        $el.addClass('hidden');
        $el.removeClass('animated pulse');
    };
})
