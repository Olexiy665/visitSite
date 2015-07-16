'use strict';

// Declare app level module which depends on views, and components
var app = angular.module("mainApp", ['ngRoute', 'angularRipple','angular-scroll-animate']);
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
app.controller('mobileHighLightController', function($scope, $route){
    $scope.$route = $route;
})
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
        'knowledgeLevel':'have experience: 2.5/5'


    }, {
        'name':'Bower',
        'imgUrl':'./pictures/skills-logo/Bower-logo.png',
        'knowledgeLevel':'have experience: 4/5'
    },{
        'name':'HTML5',
        'imgUrl':'./pictures/skills-logo/HTML5-logo.png',
        'knowledgeLevel':'have experience: 4/5'

    },{
        'name':'JavaScript',
        'imgUrl':'./pictures/skills-logo/JS-logo.png',
        'knowledgeLevel':'have experience: 3/5'

    },{
        'name':'jQuery',
        'imgUrl':'./pictures/skills-logo/JQuery-logo.png',
        'knowledgeLevel':'have experience: 2.5/5'

    },{
        'name':'Foundation',
        'imgUrl':'./pictures/skills-logo/zurb-logo.png',
        'knowledgeLevel':'have experience: 3/5'

    },{
        'name':'RequireJS',
        'imgUrl':'./pictures/skills-logo/RequireJS-logo.png',
        'knowledgeLevel':'have experience: 2/5'

    },{
        'name':'NPM',
        'imgUrl':'./pictures/skills-logo/NPM-logo.png',
        'knowledgeLevel':'have experience: 3/5'

    },{
        'name':'git',
        'imgUrl':'./pictures/skills-logo/git-logo.png',
        'knowledgeLevel':'have experience: 4/5'

    },{
        'name':'Photoshop',
        'imgUrl':'./pictures/skills-logo/PS-logo.png',
        'knowledgeLevel':'have experience: 4/5'

    },{
        'name':'Node.JS',
        'imgUrl':'./pictures/skills-logo/node.js-logo.png',
        'knowledgeLevel':'have experience: 2.5/5'

    },{
        'name':'CSS',
        'imgUrl':'./pictures/skills-logo/Css-logo.png',
        'knowledgeLevel':'have experience: 3.5/5'

    },{
        'name':'Java',
        'imgUrl':'./pictures/skills-logo/Java-logo.png',
        'knowledgeLevel':'have experience: 3/5'

    },{
        'name':'SailsJS',
        'imgUrl':'./pictures/skills-logo/SailsJs-logo.png',
        'knowledgeLevel':'familiar with: 2/5'

    },{
        'name':'D3js',
        'imgUrl':'./pictures/skills-logo/D3-logo.png',
        'knowledgeLevel':'familiar with: 1/5'

    },{
        'name':'Sass',
        'imgUrl':'./pictures/skills-logo/Sass-logo.png',
        'knowledgeLevel':'familiar with: 1/5'
    },{
        'name':'Less',
        'imgUrl':'./pictures/skills-logo/Less-logo.png',
        'knowledgeLevel':'familiar with: 1/5'
    },{
        'name':'PHP',
        'imgUrl':'./pictures/skills-logo/PHP-logo.png',
        'knowledgeLevel':'familiar with: 2/5'
    },{
        'name':'Python',
        'imgUrl':'./pictures/skills-logo/Python-logo.png',
        'knowledgeLevel':'familiar with: 2.5/5'
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
