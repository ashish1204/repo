/**
 * Created by gaudua on 1/6/2017.
 */


(function(){
    'use strict';

    angular.module('learningAngular.dashboard')
        .controller('DashboardCtrl', DashboardController);

    DashboardController.$inject = ['$scope', '$rootScope'];

    function DashboardController($scope, $rootScope){
    	
    	$scope.myName = $rootScope.myName;
    	
        
    };

})(angular);