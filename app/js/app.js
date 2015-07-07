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
app.controller('EducationalController', function($scope){
    $scope.showLyceum = true;
    $scope.showKpi = false;
    $scope.kpi = {
        'name': 'NTUU \"KPI\",Faculty of Informatics and  Computer Technics',
        'image': './pictures/educational/kpi.png'

    };
    $scope.lyceum = {
        'name' : 'Sverdlovs\'k lyceum #1',
        'image': './pictures/educational/lyceum.png'
    }
    $scope.changeAnimation = function($el) {

        $el.addClass('animated fadeIn');
    };
})
app.controller('HideController', function($scope){
    $scope.showDescrip = false;
    $scope.showButton = true;
})
app.controller('SkillsController', function($scope){
    $scope.skills = [{
        'name':'AngularJS',
        'imgUrl':'./pictures/skills-logo/Angular-logo.png',
        'knowledgeLevel':''


    }, {
        'name':'Bower',
        'imgUrl':'./pictures/skills-logo/Bower-logo.png',
        'knowledgeLevel':''
    },{
        'name':'HTML5',
        'imgUrl':'./pictures/skills-logo/HTML5-logo.png',
        'knowledgeLevel':''

    },{
        'name':'JavaScript',
        'imgUrl':'./pictures/skills-logo/JS-logo.png',
        'knowledgeLevel':''

    },{
        'name':'jQuery',
        'imgUrl':'./pictures/skills-logo/JQuery-logo.png',
        'knowledgeLevel':''

    },{
        'name':'Foundation',
        'imgUrl':'./pictures/skills-logo/zurb-logo.png',
        'knowledgeLevel':''

    },{
        'name':'RequireJS',
        'imgUrl':'./pictures/skills-logo/RequireJS-logo.png',
        'knowledgeLevel':''

    },{
        'name':'NPM',
        'imgUrl':'./pictures/skills-logo/NPM-logo.png',
        'knowledgeLevel':''

    },{
        'name':'git',
        'imgUrl':'./pictures/skills-logo/git-logo.png',
        'knowledgeLevel':''

    },{
        'name':'Photoshop',
        'imgUrl':'./pictures/skills-logo/PS-logo.png',
        'knowledgeLevel':''

    },{
        'name':'Node.JS',
        'imgUrl':'./pictures/skills-logo/node.js-logo.png',
        'knowledgeLevel':''

    },{
        'name':'CSS',
        'imgUrl':'./pictures/skills-logo/Css-logo.png',
        'knowledgeLevel':''

    },{
        'name':'Java',
        'imgUrl':'./pictures/skills-logo/Java-logo.png',
        'knowledgeLevel':''

    },{
        'name':'SailsJS',
        'imgUrl':'./pictures/skills-logo/SailsJs-logo.png',
        'knowledgeLevel':''

    },{
        'name':'D3js',
        'imgUrl':'./pictures/skills-logo/D3-logo.png',
        'knowledgeLevel':''

    },{
        'name':'Sass',
        'imgUrl':'./pictures/skills-logo/Sass-logo.png',
        'knowledgeLevel':''
    },{
        'name':'Less',
        'imgUrl':'./pictures/skills-logo/Less-logo.png',
        'knowledgeLevel':''
    },{
        'name':'PHP',
        'imgUrl':'./pictures/skills-logo/PHP-logo.png',
        'knowledgeLevel':''
    },{
        'name':'Python',
        'imgUrl':'./pictures/skills-logo/Python-logo.png',
        'knowledgeLevel':''
    }

    ]
    $scope.animateKnowDivIn = function($el){
        $el.removeClass('hidden');
        $el.addClass('animated pulse');
    };
    $scope.animateElementIn = function($el) {
        $el.removeClass('hidden');
        $el.addClass('animated pulse');
    };

    $scope.animateElementOut = function($el) {
        $el.addClass('hidden');
        $el.removeClass('animated pulse');
    };


})
