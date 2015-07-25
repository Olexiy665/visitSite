/**
 * Created by alexey on 25.07.15.
 */
(function(){
    var app = angular.module('mainApp-controllers',[]);
    app.controller("HighLightController", function ($scope, $route) {
        $scope.$route = $route;
    });
    app.controller('mobileHighLightController', function ($scope, $route) {
        $scope.$route = $route;
    })
    app.controller('EducationalController', function ($scope) {
        $scope.showLyceum = true;
        $scope.showKpi = false;
        $scope.kpi = {
            'name': 'NTUU \"KPI\",Faculty of Informatics and  Computer Technics',
            'image': './pictures/educational/kpi.png'

        };
        $scope.lyceum = {
            'name': 'Sverdlovs\'k lyceum #1',
            'image': './pictures/educational/lyceum.png'
        }
        $scope.changeAnimation = function ($el) {

            $el.addClass('animated fadeIn');
        };
    })
    app.controller('HideController', function ($scope) {
        $scope.showDescrip = false;
        $scope.showButton = true;
    });
    app.controller('SkillsController', ['$scope','$http', function ($scope, $http) {

        $scope.skills = [];
        $http.get('js/skills-item-pack.json').success(function(data){
            $scope.skills = data;
        })
        $scope.animateKnowDivIn = function ($el) {
            $el.removeClass('hidden');
            $el.addClass('animated pulse');
        };
        $scope.animateElementIn = function ($el) {
            $el.removeClass('hidden');
            $el.addClass('animated pulse');
        };
        $scope.animateElementOut = function ($el) {
            $el.addClass('hidden');
            $el.removeClass('animated pulse');
        };
    }]);

}());