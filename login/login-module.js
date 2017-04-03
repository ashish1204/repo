/**
 * Created by gaudua on 1/19/2017.
 */

(function(){
    
    'use strict';
    
    angular.module('learningAngular.login', [])
        .config(['$stateProvider', '$urlRouterProvider', function ($stateProvider, $urlRouterProvider) {

            $urlRouterProvider.otherwise("/login");

            $stateProvider
                .state('login',{
                    url: '/login',
                    templateUrl: 'login/login.html',
                    controller: 'LoginCtrl'
                })
            
        }]);
    
})(angular);