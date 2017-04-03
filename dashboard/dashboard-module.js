/**
 * Created by gaudua on 1/19/2017.
 */

(function(){
    
    'use strict';
    
    angular.module('learningAngular.dashboard', [])
        .config(['$stateProvider', '$urlRouterProvider', function ($stateProvider, $urlRouterProvider) {

            $stateProvider
                .state('dashboard',{
                    url: '/dashboard',
                    templateUrl: 'dashboard/dashboard.html',
                    controller: 'DashboardCtrl'
                })
            
        }]);
    
})(angular);