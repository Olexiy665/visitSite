'use strict';
(function() {
    var app = angular.module("mainApp", ['mainApp-controllers','ngRoute', 'angularRipple', 'angular-scroll-animate']);

    app.config(function ($routeProvider) {
        $routeProvider
            .when('/home', {
                templateUrl: './pages/home.html',
                activePage: 'home'

            })
            .when('/education', {
                templateUrl: './pages/education.html',
                activePage: 'education'
            })
            .when('/skills', {
                templateUrl: "./pages/skills.html",
                activePage: 'skills',
                controller: 'SkillsController'
            })

            .otherwise({
                redirectTo: '/home'
            });
    });


})();